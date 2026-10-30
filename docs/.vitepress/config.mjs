import fs from "fs";
import path from "path";
import { createRequire } from "module";
import { fileURLToPath } from "url";
import { defineConfig } from "vitepress";

let docs_dir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
let require = createRequire(import.meta.url);
let { IntellteJson5Parser } = require("../../core/framework/node/json5_parser.js");
let { MarkdownRenderer } = require("../../core/framework/node/MarkdownRenderer.js");
let en_locale_obj = IntellteJson5Parser.parseFile(path.resolve(docs_dir, "../localisation/en_gb.json5")) || {};
let en_strings = (en_locale_obj.strings) ? en_locale_obj.strings : {};
let md_renderer = new MarkdownRenderer();

let base_url = process.env.VITEPRESS_BASE;
if (!base_url && process.env.GITHUB_ACTIONS) {
  base_url = "/Intellte/";
}
if (!base_url) {
  base_url = "/";
}
if (!base_url.endsWith("/")) {
  base_url = `${base_url}/`;
}


let IntellteVitePressMiddleware = {
  /**
   * Creates Connect/Vite middleware redirecting clean `/records/...` directory URLs lacking a trailing slash to `<pathname>/` whilst leaving `.md` module imports and static assets untouched.
   *
   * @param {string} arg0_docs_dir - Absolute path to the `docs/` source/output directory.
   * @param {string} arg1_base_url - Normalised VitePress `base` URL.
   * @return {Function} Connect middleware handler.
   */
  createRecordDirectoryRedirect: function (arg0_docs_dir, arg1_base_url) {
    //Convert from parameters
    let root_docs_dir = arg0_docs_dir;
    let site_base_url = arg1_base_url;

    //Declare local instance variables
    let asset_ext_regex = /\.(?:bib|cjs|css|gif|htm|html|ico|jpe?g|js|json|map|md|mjs|otf|pdf|png|rmd|svg|ts|ttf|txt|vue|webp|woff2?|xml)$/i;

    //Return statement
    return function (arg0_req, arg1_res, arg2_next) {
      //Convert from parameters
      let req = arg0_req;
      let res = arg1_res;
      let next = arg2_next;

      //Declare local instance variables
      let candidate_html = "";
      let candidate_md = "";
      let pathname = String(req?.url ?? "").split("?")[0].split("#")[0];
      let query = "";
      let raw_url = String(req?.url ?? "");
      let rel_record_path = "";
      let stripped = pathname;

      //Guard clauses
      if (req?.headers?.["sec-fetch-dest"] === "script") return next();
      if (asset_ext_regex.test(pathname)) return next();

      if (site_base_url !== "/" && pathname.startsWith(site_base_url)) {
        stripped = pathname.slice(site_base_url.length - 1);
      }

      if (stripped.startsWith("/records/") && !stripped.endsWith("/")) {
        rel_record_path = stripped.replace(/^\/+/, "");
        candidate_md = path.join(root_docs_dir, rel_record_path, "index.md");
        candidate_html = path.join(root_docs_dir, rel_record_path, "index.html");

        if (
          (candidate_md.startsWith(root_docs_dir) && fs.existsSync(candidate_md)) ||
          (candidate_html.startsWith(root_docs_dir) && fs.existsSync(candidate_html))
        ) {
          if (raw_url.includes("?")) {
            query = raw_url.slice(raw_url.indexOf("?"));
          }
          res.writeHead(302, { Location: `${pathname}/${query}` });
          res.end();
          return;
        }
      }

      next();
    };
  }
};

export default defineConfig({
  base: base_url,
  title: "Intellte — CRD",
  description: "Confoederatio, Research Division (CRD) Working Papers",
  appearance: {
    initialValue: "light"
  },
  cleanUrls: true,
  ignoreDeadLinks: true,

  head: [
    ["link", { rel: "icon", type: "image/png", href: `${base_url}artefacts/crd_logo.png` }],
    [
      "script",
      {},
      `;(() => {
        try {
          var saved = localStorage.getItem('vitepress-theme-appearance');
          if (!saved || saved === 'auto') {
            localStorage.setItem('vitepress-theme-appearance', 'light');
          }
          if (saved !== 'dark') {
            document.documentElement.classList.remove('dark');
          }
        } catch (e) {}
      })();`
    ]
  ],

  markdown: {
    html: true,
    math: true,
    config: (arg0_md) => {
      md_renderer.configureVitePressMarkdown(arg0_md);
    }
  },

  vite: {
    server: {
      port: 16000,
      strictPort: true,
      watch: {
        ignored: ["**/.vitepress/.temp/**", "**/.vitepress/cache/**", "**/.vitepress/dist/**"]
      }
    },
    preview: {
      port: 16000,
      strictPort: true
    },
    plugins: [
      {
        name: "crd-css-base-fonts",
        transform (arg0_code, arg1_id) {
          //Convert from parameters
          let code = arg0_code;
          let id = arg1_id;

          if (id.endsWith(".css") && base_url !== "/") {
            //Return statement
            return {
              code: code.replace(/url\(["']?\/fonts\//g, `url("${base_url}fonts/`),
              map: null
            };
          }
        }
      },
      {
        name: "crd-version-redirect",
        configurePreviewServer (arg0_server) {
          //Convert from parameters
          let server = arg0_server;

          //Declare local instance variables
          let dist_dir = path.join(docs_dir, ".vitepress/dist");

          server.middlewares.use(IntellteVitePressMiddleware.createRecordDirectoryRedirect(dist_dir, base_url));
        },
        configureServer (arg0_server) {
          //Convert from parameters
          let server = arg0_server;

          server.middlewares.use(IntellteVitePressMiddleware.createRecordDirectoryRedirect(docs_dir, base_url));
        }
      }
    ]
  },

  themeConfig: {
    logo: "/artefacts/crd_logo.png",
    siteTitle: "Intellte",
    nav: [
      { text: en_strings.nav_catalogue || "Catalogue", link: "/" }
    ],
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonAriaLabel: en_strings.nav_search_placeholder || "Search Intellte",
            buttonText: en_strings.nav_search_placeholder || "Search Intellte"
          }
        }
      }
    },
    footer: {
      message: "Confoederatio, Research Division (CRD)",
      copyright: "Intellte Working Papers"
    }
  }
});

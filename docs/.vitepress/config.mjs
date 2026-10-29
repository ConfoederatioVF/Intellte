import { defineConfig } from "vitepress";
import { createRequire } from "module";

let require = createRequire(import.meta.url);
let { MarkdownRenderer } = require("../../core/framework/node/MarkdownRenderer.js");
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
      strictPort: true
    },
    preview: {
      port: 16000,
      strictPort: true
    },
    plugins: [
      {
        name: "crd-css-base-fonts",
        transform (code, id) {
          if (id.endsWith(".css") && base_url !== "/") {
            return {
              code: code.replace(/url\(["']?\/fonts\//g, `url("${base_url}fonts/`),
              map: null
            };
          }
        }
      },
      {
        name: "crd-version-redirect",
        configureServer (server) {
          server.middlewares.use((req, res, next) => {
            let pathname = (req.url || "").split("?")[0].split("#")[0];
            let stripped = (base_url !== "/" && pathname.startsWith(base_url))
              ? pathname.slice(base_url.length - 1)
              : pathname;
            if (/^\/records\/[^\/]+\/[\w\.\-]+$/.test(stripped)) {
              let query = req.url.includes("?") ? req.url.slice(req.url.indexOf("?")) : "";
              res.writeHead(302, { Location: pathname + "/" + query });
              res.end();
              return;
            }
            next();
          });
        }
      }
    ]
  },

  themeConfig: {
    logo: "/artefacts/crd_logo.png",
    siteTitle: "Intellte",
    nav: [
      { text: "Catalogue", link: "/" },
      { text: "Velkscala", link: "/records/velkscala/" },
      { text: "Eoscala", link: "/records/eoscala/" },
      { text: "Stadestér", link: "/records/stadester/" }
    ],
    search: {
      provider: "local"
    },
    footer: {
      message: "Confoederatio, Research Division (CRD)",
      copyright: "Intellte Working Papers"
    }
  }
});

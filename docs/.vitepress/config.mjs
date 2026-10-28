import { defineConfig } from "vitepress";
import { createRequire } from "module";

let require = createRequire(import.meta.url);
let { MarkdownRenderer } = require("../../core/framework/node/MarkdownRenderer.js");
let md_renderer = new MarkdownRenderer();

export default defineConfig({
  title: "Intellte — CRD",
  description: "Confoederatio, Research Division (CRD) Working Papers",
  appearance: {
    initialValue: "light"
  },
  cleanUrls: true,
  ignoreDeadLinks: true,

  head: [
    ["link", { rel: "icon", type: "image/png", href: "/artefacts/crd_logo.png" }],
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
        name: "crd-version-redirect",
        configureServer (server) {
          server.middlewares.use((req, res, next) => {
            let pathname = (req.url || "").split("?")[0].split("#")[0];
            if (/^\/records\/[^\/]+\/\d+\.\d+$/.test(pathname)) {
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
      { text: "Velkscala 1.0", link: "/records/velkscala/" }
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

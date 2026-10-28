import { defineConfig } from "vitepress";
import { createRequire } from "module";

let require = createRequire(import.meta.url);
let { MarkdownRenderer } = require("../../core/framework/node/MarkdownRenderer.js");
let md_renderer = new MarkdownRenderer();

export default defineConfig({
  title: "Intellte — CRD",
  description: "Confoederatio, Research Division (CRD) Working Papers & Empirical Validation Repository",
  cleanUrls: true,
  ignoreDeadLinks: true,

  head: [
    ["link", { rel: "icon", type: "image/png", href: "/artefacts/crd_logo.png" }]
  ],

  markdown: {
    html: true,
    math: true,
    config: (arg0_md) => {
      md_renderer.configureVitePressMarkdown(arg0_md);
    }
  },

  themeConfig: {
    logo: "/artefacts/crd_logo.png",
    siteTitle: "INTELLTE · CRD",
    nav: [
      { text: "Working Papers Catalogue", link: "/" },
      { text: "Velkscala 1.0", link: "/records/velkscala/1.0" },
      { text: "CDT Validation", link: "/records/velkscala/1.0-cdt_validation" },
      { text: "NDT Validation", link: "/records/velkscala/1.0-ndt_validation" }
    ],
    search: {
      provider: "local"
    },
    footer: {
      message: "Confoederatio, Research Division (CRD) — Intellte Working Papers Repository",
      copyright: "All timestamps GMT+0 · European decimal & semantic numeric standard"
    }
  }
});


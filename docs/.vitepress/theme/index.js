import DefaultTheme from "vitepress/theme";
import "./custom.css";

import PdfEmbed from "../../../core/ui/components/PdfEmbed.vue";
import PdfSplitWorkspace from "../../../core/ui/components/PdfSplitWorkspace.vue";
import RecordSearchCatalogue from "../../../core/ui/components/RecordSearchCatalogue.vue";
import RecordVersionSidebar from "../../../core/ui/components/RecordVersionSidebar.vue";
import TagBadge from "../../../core/ui/components/TagBadge.vue";

export default {
  extends: DefaultTheme,
  setup () {
    if (typeof window !== "undefined") {
      try {
        let saved = localStorage.getItem("vitepress-theme-appearance");
        if (!saved || saved === "auto") {
          localStorage.setItem("vitepress-theme-appearance", "light");
        }
        if (saved !== "dark") {
          document.documentElement.classList.remove("dark");
        }
      } catch (e) {}
    }
  },
  enhanceApp ({ app }) {
    app.component("PdfEmbed", PdfEmbed);
    app.component("pdf", PdfEmbed);
    app.component("PdfSplitWorkspace", PdfSplitWorkspace);
    app.component("RecordSearchCatalogue", RecordSearchCatalogue);
    app.component("RecordVersionSidebar", RecordVersionSidebar);
    app.component("TagBadge", TagBadge);
  }
};


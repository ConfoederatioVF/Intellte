<template>
  <!-- Intellte Workspace: Academic Manuscript + Minimised Bottom PDF + Metadata Sidebar -->
  <div class="crd-workspace-shell">
    <!-- Top Record Navigation Bar -->
    <div class="crd-workspace-topbar">
      <div class="crd-breadcrumb">
        <a :href="resolveUrl('/')" class="crd-breadcrumb-link">Catalogue</a>
        <span class="crd-breadcrumb-sep">/</span>
        <span class="crd-breadcrumb-proj">{{ record_obj.project_name }}</span>
        <span class="crd-breadcrumb-sep">/</span>
        <span class="crd-version-pill">{{ record_obj.version }}</span>
        <span v-if="record_obj.is_latest" class="crd-latest-badge">Latest</span>
      </div>

      <div v-if="record_obj.pdf_url" class="crd-topbar-pdf-controls">
        <button
          v-if="record_obj.has_dom !== false"
          type="button"
          class="crd-btn-sm"
          @click="toggleBottomPdf"
        >
          {{ is_pdf_expanded ? "Minimise PDF" : "Preview PDF" }}
        </button>
        <a
          :href="resolveUrl(record_obj.pdf_url)"
          download
          class="crd-btn-sm crd-btn-primary"
        >
          Download PDF ({{ record_obj.pdf_size_euro }})
        </a>
      </div>
    </div>

    <!-- Older Version Notice -->
    <div v-if="record_obj.version && !record_obj.is_latest" class="crd-older-version-alert">
      You are viewing <strong>Version {{ record_obj.version }}</strong> of this working paper.
      A newer release (<a :href="resolveUrl(record_obj.latest_route_url)">Version {{ record_obj.latest_version }}</a>) is available.
    </div>

    <!-- Main Workspace Grid: Manuscript Column + Metadata Sidebar -->
    <div class="crd-workspace-grid">
      <!-- 1. Academic R Markdown Manuscript Column -->
      <main class="crd-manuscript-column">
        <div class="crd-manuscript-paper">
          <slot />
        </div>

        <!-- 2. Minimised Bottom PDF Section (Collapsible) -->
        <section v-if="record_obj.pdf_url && record_obj.has_dom !== false" id="crd-bottom-pdf" class="crd-bottom-pdf-section">
          <div class="crd-bottom-pdf-header" @click="toggleBottomPdf">
            <div class="crd-bottom-pdf-title">
              <span class="crd-pdf-badge">PDF</span>
              <span class="crd-bottom-pdf-name">Compiled Manuscript ({{ record_obj.pdf_size_euro }})</span>
            </div>
            <div class="crd-bottom-pdf-actions" @click.stop>
              <button
                type="button"
                class="crd-btn-xs"
                @click="toggleBottomPdf"
              >
                {{ is_pdf_expanded ? "Minimise" : "Preview PDF" }}
              </button>
              <a
                :href="resolveUrl(record_obj.pdf_url)"
                target="_blank"
                rel="noopener"
                class="crd-btn-xs"
              >
                Open in New Tab
              </a>
              <a
                :href="resolveUrl(record_obj.pdf_url)"
                download
                class="crd-btn-xs crd-btn-primary"
              >
                Download ({{ record_obj.pdf_size_euro }})
              </a>
            </div>
          </div>

          <!-- Expanded PDF Viewer Drawer -->
          <div v-if="is_pdf_expanded" class="crd-bottom-pdf-viewer">
            <iframe
              :src="resolveUrl(record_obj.pdf_url)"
              class="crd-bottom-pdf-iframe"
              :title="`${record_obj.title} PDF`"
            ></iframe>
          </div>
        </section>
      </main>

      <!-- 3. Right-Hand Metadata, Versions, Downloads & Citation Sidebar -->
      <RecordVersionSidebar
        :record="record_obj"
        @preview-pdf="scrollToBottomPdf"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { withBase } from "vitepress";
import RecordVersionSidebar from "./RecordVersionSidebar.vue";

let props = defineProps({
  recordB64: {
    required: true,
    type: String
  }
});

let is_pdf_expanded = ref(false);

let decodeBase64Utf8 = function (arg0_b64) {
  let b64 = String(arg0_b64 || "");
  if (!b64) return "{}";
  try {
    if (typeof Buffer !== "undefined") {
      return Buffer.from(b64, "base64").toString("utf8");
    }
    let bin_str = atob(b64);
    let bytes = Uint8Array.from(bin_str, (m) => m.codePointAt(0));
    return new TextDecoder("utf-8").decode(bytes);
  } catch (e) {
    console.error("Failed to decode record metadata:", e);
    return "{}";
  }
};

let record_obj = computed(() => {
  try {
    return JSON.parse(decodeBase64Utf8(props.recordB64));
  } catch (e) {
    return {
      tags: [],
      title: "Working Paper",
      version: "1.0",
      versions: []
    };
  }
});

let resolveUrl = function (arg0_url) {
  let u = String(arg0_url || "");
  if (u.startsWith("http://") || u.startsWith("https://")) return u;
  return withBase(u.startsWith("/") ? u : `/${u}`);
};

let toggleBottomPdf = function () {
  is_pdf_expanded.value = !is_pdf_expanded.value;
};

let scrollToBottomPdf = function () {
  is_pdf_expanded.value = true;
  if (typeof document !== "undefined") {
    let el = document.getElementById("crd-bottom-pdf");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
};
</script>

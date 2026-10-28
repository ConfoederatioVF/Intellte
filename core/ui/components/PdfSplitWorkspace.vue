<template>
  <!-- InvenioRDM-Style Workspace: WYSIWYG .Rmd Body + Collapsible/Expandable Side-by-Side PDF + Metadata Sidebar -->
  <div class="crd-workspace-shell" :class="`pdf-mode-${pdf_mode}`">
    <!-- Top Record Navigation & PDF Split Toolbar -->
    <div class="crd-workspace-topbar">
      <div class="crd-breadcrumb">
        <a :href="resolveUrl('/')" class="crd-breadcrumb-link">Intellte Working Papers</a>
        <span class="crd-breadcrumb-sep">/</span>
        <span class="crd-breadcrumb-proj">Project {{ record_obj.project_id }} — {{ record_obj.project_name }}</span>
        <span class="crd-breadcrumb-sep">/</span>
        <span class="crd-version-pill">v{{ record_obj.version }}</span>
        <span v-if="record_obj.is_latest" class="crd-latest-badge">Latest</span>
      </div>

      <div v-if="record_obj.pdf_url" class="crd-topbar-pdf-controls">
        <span class="crd-pdf-status-label">PDF View:</span>
        <button
          type="button"
          class="crd-btn-sm"
          :class="{ 'is-active': pdf_mode === 'minimised' }"
          @click="setPdfMode('minimised')"
        >
          Minimised
        </button>
        <button
          type="button"
          class="crd-btn-sm"
          :class="{ 'is-active': pdf_mode === 'beside' }"
          @click="setPdfMode('beside')"
        >
          Split Beside Text
        </button>
        <button
          type="button"
          class="crd-btn-sm"
          :class="{ 'is-active': pdf_mode === 'inline-top' }"
          @click="setPdfMode('inline-top')"
        >
          Inline Above
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

    <!-- Older Version Alert Banner -->
    <div v-if="record_obj.version && !record_obj.is_latest" class="crd-older-version-alert">
      You are viewing <strong>Version {{ record_obj.version }}</strong> of this working paper.
      A newer release (<a :href="resolveUrl(record_obj.latest_route_url)">Version {{ record_obj.latest_version }}</a>) is available.
    </div>

    <!-- Optional Top Inline Collapsible PDF Embed -->
    <div v-if="pdf_mode === 'inline-top' && record_obj.pdf_url" class="crd-top-pdf-holder">
      <PdfEmbed
        :src="record_obj.pdf_url"
        :title="`${record_obj.title} (v${record_obj.version}) — Compiled PDF`"
        :size="record_obj.pdf_size_euro"
        height="720px"
      />
    </div>

    <!-- Main 2- or 3-Column Split Grid: Body Text + Side-by-Side Collapsible PDF + InvenioRDM Sidebar -->
    <div class="crd-workspace-grid">
      <!-- 1. WYSIWYG R Markdown Manuscript Column -->
      <main class="crd-manuscript-column">
        <slot />
      </main>

      <!-- 2. Side-by-Side Sticky PDF Companion Column (when expanded beside text) -->
      <section v-if="pdf_mode === 'beside' && record_obj.pdf_url" class="crd-beside-pdf-column">
        <div class="crd-beside-pdf-sticky">
          <div class="crd-beside-pdf-header">
            <div class="crd-beside-pdf-title">
              <span class="crd-pdf-badge">PDF</span>
              <span>{{ record_obj.project_name }} v{{ record_obj.version }} ({{ record_obj.pdf_size_euro }})</span>
            </div>
            <div class="crd-beside-pdf-actions">
              <button type="button" class="crd-btn-xs" @click="setPdfMode('minimised')">
                Minimise
              </button>
              <a :href="resolveUrl(record_obj.pdf_url)" target="_blank" rel="noopener" class="crd-btn-xs">
                Open Tab
              </a>
            </div>
          </div>
          <iframe
            :src="resolveUrl(record_obj.pdf_url)"
            class="crd-beside-pdf-iframe"
            :title="`${record_obj.title} PDF`"
          ></iframe>
        </div>
      </section>

      <!-- 3. Right-Hand InvenioRDM Metadata, Versions & Tags Sidebar -->
      <RecordVersionSidebar
        :record="record_obj"
        :pdf-mode="pdf_mode"
        @set-pdf-mode="setPdfMode"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { withBase } from "vitepress";
import PdfEmbed from "./PdfEmbed.vue";
import RecordVersionSidebar from "./RecordVersionSidebar.vue";

let props = defineProps({
  defaultPdfMode: {
    default: "beside",
    type: String
  },
  recordB64: {
    required: true,
    type: String
  }
});

let pdf_mode = ref(props.defaultPdfMode);

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

let setPdfMode = function (arg0_mode) {
  pdf_mode.value = arg0_mode;
};
</script>


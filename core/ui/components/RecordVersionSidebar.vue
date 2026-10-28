<template>
  <!-- InvenioRDM-Lite Right Sidebar: PDF Trigger, Versions, Tags, Artefacts & Citation -->
  <aside class="crd-record-sidebar">
    <!-- 1. Attached PDF Companion Control Card -->
    <div v-if="record.pdf_url" class="crd-sidebar-card crd-pdf-control-card">
      <div class="crd-sidebar-card-header">
        <span class="crd-sidebar-heading">Attached PDF</span>
        <span v-if="record.pdf_size_euro" class="crd-meta-pill">{{ record.pdf_size_euro }}</span>
      </div>
      <div class="crd-pdf-mode-buttons">
        <button
          type="button"
          class="crd-btn-block"
          :class="{ 'is-active': pdfMode === 'beside' }"
          @click="$emit('set-pdf-mode', pdfMode === 'beside' ? 'minimised' : 'beside')"
        >
          {{ pdfMode === "beside" ? "Minimise Side-by-Side PDF" : "Expand PDF Beside Text" }}
        </button>
        <div class="crd-btn-row">
          <button
            type="button"
            class="crd-btn-sm"
            :class="{ 'is-active': pdfMode === 'inline-top' }"
            @click="$emit('set-pdf-mode', pdfMode === 'inline-top' ? 'minimised' : 'inline-top')"
          >
            {{ pdfMode === "inline-top" ? "Hide Top PDF" : "Embed Above Text" }}
          </button>
          <a
            :href="resolveUrl(record.pdf_url)"
            download
            class="crd-btn-sm crd-btn-primary"
          >
            Download PDF
          </a>
        </div>
      </div>
    </div>

    <!-- 2. Versions Box (InvenioRDM style) -->
    <div class="crd-sidebar-card">
      <div class="crd-sidebar-card-header">
        <span class="crd-sidebar-heading">Versions</span>
        <span class="crd-meta-pill">GMT+0</span>
      </div>
      <ul class="crd-version-list">
        <li
          v-for="ver in record.versions"
          :key="ver.version"
          class="crd-version-item"
          :class="{ 'is-current': ver.version === record.version }"
        >
          <a :href="resolveUrl(ver.route_url)" class="crd-version-link">
            <span class="crd-version-label">
              Version {{ ver.version }}
              <span v-if="ver.is_latest" class="crd-latest-tag">Latest</span>
            </span>
            <span class="crd-version-date">{{ ver.date }}</span>
          </a>
        </li>
      </ul>
    </div>

    <!-- 3. Tags Box -->
    <div v-if="record.tags && record.tags.length > 0" class="crd-sidebar-card">
      <div class="crd-sidebar-card-header">
        <span class="crd-sidebar-heading">Tags</span>
      </div>
      <div class="crd-sidebar-tags">
        <TagBadge
          v-for="t in record.tags"
          :key="t"
          :tag="t"
          @select="navigateToTag"
        />
      </div>
    </div>

    <!-- 4. Supplementary Validation Reports -->
    <div v-if="record.supplementary_links && record.supplementary_links.length > 0" class="crd-sidebar-card">
      <div class="crd-sidebar-card-header">
        <span class="crd-sidebar-heading">Validation Suites</span>
      </div>
      <ul class="crd-artefact-list">
        <li v-for="supp in record.supplementary_links" :key="supp.key" class="crd-artefact-item">
          <a :href="resolveUrl(supp.route_url)" class="crd-artefact-link">
            <span class="crd-artefact-name">{{ supp.title }}</span>
            <span class="crd-artefact-cat">Markdown Report</span>
          </a>
        </li>
      </ul>
    </div>

    <!-- 5. Artefacts & Downloads -->
    <div v-if="record.staged_files && record.staged_files.length > 0" class="crd-sidebar-card">
      <div class="crd-sidebar-card-header">
        <span class="crd-sidebar-heading">Artefacts &amp; Downloads</span>
      </div>
      <ul class="crd-artefact-list">
        <li v-for="file in record.staged_files" :key="file.filename" class="crd-artefact-item">
          <a :href="resolveUrl(file.url)" download class="crd-artefact-link">
            <div class="crd-artefact-info">
              <span class="crd-artefact-name">{{ file.filename }}</span>
              <span class="crd-artefact-cat">{{ file.category }}</span>
            </div>
            <span class="crd-artefact-size">{{ file.size_euro }}</span>
          </a>
        </li>
      </ul>
    </div>

    <!-- 6. MLA Citation Box -->
    <div v-if="record.citation_mla" class="crd-sidebar-card">
      <div class="crd-sidebar-card-header">
        <span class="crd-sidebar-heading">Citation (MLA)</span>
        <button type="button" class="crd-btn-xs" @click="copyCitation">
          {{ copied ? "Copied" : "Copy" }}
        </button>
      </div>
      <p class="crd-citation-box">{{ record.citation_mla }}</p>
    </div>
  </aside>
</template>

<script setup>
import { ref } from "vue";
import { withBase } from "vitepress";
import TagBadge from "./TagBadge.vue";

let props = defineProps({
  pdfMode: {
    default: "beside",
    type: String
  },
  record: {
    required: true,
    type: Object
  }
});

defineEmits(["set-pdf-mode"]);

let copied = ref(false);

let resolveUrl = function (arg0_url) {
  let u = String(arg0_url || "");
  if (u.startsWith("http://") || u.startsWith("https://")) return u;
  return withBase(u.startsWith("/") ? u : `/${u}`);
};

let navigateToTag = function (arg0_tag) {
  if (typeof window !== "undefined") {
    window.location.href = `${withBase("/")}?tag=${encodeURIComponent(arg0_tag)}`;
  }
};

let copyCitation = function () {
  if (typeof navigator !== "undefined" && navigator.clipboard && props.record.citation_mla) {
    navigator.clipboard.writeText(props.record.citation_mla);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 1800);
  }
};
</script>


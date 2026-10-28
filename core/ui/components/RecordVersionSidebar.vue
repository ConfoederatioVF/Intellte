<template>
  <!-- Metadata, Versions, Downloads & Citation Sidebar -->
  <aside class="crd-record-sidebar">
    <!-- 1. Attached PDF Card -->
    <div v-if="record.pdf_url" class="crd-sidebar-card crd-pdf-card">
      <div class="crd-sidebar-card-header">
        <span class="crd-sidebar-heading">PDF Manuscript</span>
        <span v-if="record.pdf_size_euro" class="crd-meta-pill">{{ record.pdf_size_euro }}</span>
      </div>
      <div class="crd-pdf-sidebar-actions">
        <a
          :href="resolveUrl(record.pdf_url)"
          download
          class="crd-btn-block crd-btn-primary"
        >
          Download PDF ({{ record.pdf_size_euro }})
        </a>
        <button
          type="button"
          class="crd-btn-block crd-btn-secondary"
          @click="$emit('preview-pdf')"
        >
          View at Bottom
        </button>
      </div>
    </div>

    <!-- 2. Versions Box -->
    <div v-if="record.versions && record.versions.length > 0" class="crd-sidebar-card">
      <div class="crd-sidebar-card-header">
        <span class="crd-sidebar-heading">Versions</span>
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
              v{{ ver.version }}
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

    <!-- 4. Artefacts & Downloads (Validation reports listed here if present) -->
    <div v-if="record.staged_files && record.staged_files.length > 0" class="crd-sidebar-card">
      <div class="crd-sidebar-card-header">
        <span class="crd-sidebar-heading">Artefacts &amp; Downloads</span>
      </div>
      <ul class="crd-artefact-list">
        <li v-for="file in record.staged_files" :key="file.filename" class="crd-artefact-item">
          <a :href="resolveUrl(file.url)" download class="crd-artefact-link" :title="file.filename">
            <div class="crd-artefact-info">
              <span class="crd-artefact-name">{{ file.filename }}</span>
              <span class="crd-artefact-cat">{{ file.category }}</span>
            </div>
            <span class="crd-artefact-size">{{ file.size_euro }}</span>
          </a>
        </li>
      </ul>
    </div>

    <!-- 5. MLA Citation Box -->
    <div v-if="record.citation_mla" class="crd-sidebar-card">
      <div class="crd-sidebar-card-header">
        <span class="crd-sidebar-heading">Citation</span>
        <button type="button" class="crd-btn-xs" @click="copyCitation">
          {{ copied ? "Copied" : "Copy MLA" }}
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
  record: {
    required: true,
    type: Object
  }
});

defineEmits(["preview-pdf"]);

let copied = ref(false);

let copyCitation = async function () {
  let text = props.record.citation_mla || "";
  if (!text) return;
  try {
    await navigator.clipboard.writeText(text);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch (e) {
    console.error("Failed to copy citation:", e);
  }
};

let navigateToTag = function (arg0_tag) {
  if (typeof window !== "undefined") {
    window.location.href = withBase(`/?tag=${encodeURIComponent(arg0_tag)}`);
  }
};

let resolveUrl = function (arg0_url) {
  let u = String(arg0_url || "");
  if (u.startsWith("http://") || u.startsWith("https://")) return u;
  return withBase(u.startsWith("/") ? u : `/${u}`);
};
</script>

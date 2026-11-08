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
          v-if="record.has_dom !== false"
          type="button"
          class="crd-btn-block crd-btn-secondary"
          @click="$emit('preview-pdf')"
        >
          View at Bottom
        </button>
        <a
          v-else
          :href="resolveUrl(record.pdf_url)"
          target="_blank"
          rel="noopener"
          class="crd-btn-block crd-btn-secondary"
        >
          Open PDF
        </a>
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
              {{ ver.label || ver.version }}
              <span v-if="ver.is_latest" class="crd-latest-tag">Latest</span>
              <span v-if="ver.is_synthetic" class="crd-synthetic-tag">Synthetic</span>
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

    <!-- 4b. Source Papers (Researcher Request Gated) -->
    <div v-if="record.source_papers && record.source_papers.length > 0" class="crd-sidebar-card">
      <div class="crd-sidebar-card-header">
        <span class="crd-sidebar-heading">Source Papers</span>
        <span class="crd-meta-pill">{{ record.source_papers.length }}</span>
      </div>
      <input
        v-if="record.source_papers.length > 5"
        v-model="source_filter_query"
        type="search"
        class="crd-sidebar-search"
        placeholder="Filter source papers..."
      />
      <ul class="crd-source-papers-list">
        <li
          v-for="sp in filtered_source_papers"
          :key="sp.filename"
          class="crd-source-paper-item"
        >
          <button
            type="button"
            class="crd-source-paper-btn"
            :title="sp.title || sp.filename"
            @click="$emit('request-source-paper', sp)"
          >
            <span class="crd-source-paper-title">{{ sp.title || sp.filename }}</span>
            <span class="crd-source-paper-meta">
              <template v-if="sp.author || sp.year">
                {{ [sp.author, sp.year].filter(Boolean).join(" · ") }} ·
              </template>
              {{ sp.filename }}
            </span>
          </button>
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
import { computed, ref } from "vue";
import { withBase } from "vitepress";
import TagBadge from "./TagBadge.vue";

let props = defineProps({
  record: {
    required: true,
    type: Object
  }
});

defineEmits(["preview-pdf", "request-source-paper"]);

let copied = ref(false);
let source_filter_query = ref("");

let filtered_source_papers = computed(() => {
  let list = Array.isArray(props.record.source_papers) ? props.record.source_papers : [];
  let q = source_filter_query.value.trim().toLowerCase();
  if (!q) return list;
  return list.filter((arg0_sp) => {
    let hay = [arg0_sp.title, arg0_sp.author, arg0_sp.year, arg0_sp.filename]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    return hay.includes(q);
  });
});

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

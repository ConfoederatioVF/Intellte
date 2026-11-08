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
        <span class="crd-version-pill">{{ record_obj.label || record_obj.version }}</span>
        <span v-if="record_obj.is_latest" class="crd-latest-badge">Latest</span>
        <span v-if="record_obj.is_synthetic" class="crd-synthetic-badge">Synthetic</span>
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
    <div v-if="record_obj.version && !record_obj.is_latest && record_obj.status === 'Archived'" class="crd-older-version-alert">
      You are viewing <strong>Version {{ record_obj.version }}</strong> of this working paper.
      A newer release (<a :href="resolveUrl(record_obj.latest_route_url)">Version {{ record_obj.latest_version }}</a>) is available.
    </div>

    <!-- Main Workspace Grid: Manuscript Column + Metadata Sidebar -->
    <div class="crd-workspace-grid">
      <!-- 1. Academic R Markdown Manuscript Column -->
      <main class="crd-manuscript-column" @click="handleManuscriptClick">
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
        @request-source-paper="openSourcePaperModal"
      />
    </div>

    <!-- 4. Source Paper Researcher Request Modal -->
    <div
      v-if="active_source_paper"
      class="crd-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="crd-source-paper-modal-title"
      @click.self="closeSourcePaperModal"
    >
      <div class="crd-modal-card">
        <div class="crd-modal-header">
          <h3 id="crd-source-paper-modal-title" class="crd-modal-title">
            Available upon researcher request
          </h3>
          <button
            type="button"
            class="crd-modal-close-btn"
            aria-label="Close"
            @click="closeSourcePaperModal"
          >
            &times;
          </button>
        </div>

        <div class="crd-modal-body">
          <div v-if="active_source_paper.title || active_source_paper.filename" class="crd-modal-paper-info">
            <div v-if="active_source_paper.title" class="crd-modal-paper-title">
              {{ active_source_paper.title }}
            </div>
            <div v-if="active_source_paper.author || active_source_paper.year" class="crd-modal-paper-meta">
              {{ [active_source_paper.author, active_source_paper.year].filter(Boolean).join(" · ") }}
            </div>
            <div v-if="active_source_paper.filename" class="crd-modal-paper-file">
              {{ active_source_paper.filename }}
            </div>
          </div>

          <p class="crd-modal-text">
            Source and reference papers are archived internally to respect copyright and repository storage limits. For research inquiries or access to the archived PDF, please contact
            <a href="mailto:vf@confoederatio.org" class="crd-email-link">vf@confoederatio.org</a> (e-mail).
          </p>
        </div>

        <div class="crd-modal-actions">
          <a
            :href="source_paper_mailto"
            class="crd-btn-sm crd-btn-primary"
          >
            Contact vf@confoederatio.org
          </a>
          <button
            type="button"
            class="crd-btn-sm"
            @click="closeSourcePaperModal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { withBase } from "vitepress";
import RecordVersionSidebar from "./RecordVersionSidebar.vue";

let props = defineProps({
  recordB64: {
    required: true,
    type: String
  }
});

let active_source_paper = ref(null);
let is_pdf_expanded = ref(false);

let closeSourcePaperModal = function () {
  active_source_paper.value = null;
};

let handleKeydown = function (arg0_e) {
  if (arg0_e && arg0_e.key === "Escape" && active_source_paper.value) {
    closeSourcePaperModal();
  }
};

let handleManuscriptClick = function (arg0_e) {
  if (!arg0_e || !arg0_e.target || typeof arg0_e.target.closest !== "function") return;
  let link_el = arg0_e.target.closest(".crd-bib-source-paper");
  if (!link_el) return;
  arg0_e.preventDefault();
  let filename = link_el.getAttribute("data-source-paper") || "";
  let title = link_el.getAttribute("data-source-title") || "";
  let matched = (record_obj.value.source_papers || []).find(
    (arg0_sp) => arg0_sp.filename === filename
  );
  if (matched) {
    openSourcePaperModal(matched);
  } else {
    openSourcePaperModal({
      author: "",
      filename: filename,
      title: title || filename,
      year: ""
    });
  }
};

let openSourcePaperModal = function (arg0_paper) {
  active_source_paper.value = arg0_paper || {
    author: "",
    filename: "",
    title: "Source Paper",
    year: ""
  };
};

let source_paper_mailto = computed(() => {
  let sp = active_source_paper.value;
  if (!sp) return "mailto:vf@confoederatio.org";
  let label = sp.filename || sp.title || "Source Paper";
  let subject = encodeURIComponent(`Source Paper Request: ${label}`);
  let body = encodeURIComponent(
    `Hello,\n\nI would like to request researcher access to the archived source paper:\n- Title: ${sp.title || label}\n- File: ${sp.filename || "N/A"}\n- Referenced in: ${record_obj.value.title || "Intellte Working Paper"}\n\nThank you.`
  );
  return `mailto:vf@confoederatio.org?subject=${subject}&body=${body}`;
});

onMounted(() => {
  if (typeof window !== "undefined") {
    window.addEventListener("keydown", handleKeydown);
  }
});

onBeforeUnmount(() => {
  if (typeof window !== "undefined") {
    window.removeEventListener("keydown", handleKeydown);
  }
});

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

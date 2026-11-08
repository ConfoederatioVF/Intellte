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

    <!-- 2. Versions Box (Hierarchical Project & Folder Tree) -->
    <div v-if="record.versions && record.versions.length > 0" class="crd-sidebar-card">
      <div class="crd-sidebar-card-header">
        <span class="crd-sidebar-heading">Versions</span>
      </div>

      <div class="crd-version-tree">
        <a
          v-if="record.project_name"
          :href="resolveUrl(record.latest_route_url || `/records/${record.concept_id}/`)"
          class="crd-tree-project-root"
        >
          <svg class="crd-tree-icon" viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
            <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" />
          </svg>
          <span class="crd-tree-project-name">{{ record.project_name }}</span>
        </a>

        <!-- Folder-Grouped Tree (e.g. Project Polaris) -->
        <ul v-if="has_folder_tree" class="crd-tree-folder-list">
          <li
            v-for="folder in version_tree_folders"
            :key="folder.key"
            class="crd-tree-folder-node"
          >
            <a
              :href="resolveUrl(folder.route_url)"
              class="crd-tree-folder-link"
              :class="{ 'is-active-folder': folder.key === record.folder_key }"
            >
              <svg class="crd-tree-folder-icon" viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true">
                <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" />
              </svg>
              <span>{{ folder.label }}</span>
            </a>

            <ul class="crd-tree-branch">
              <li
                v-for="ver in folder.items"
                :key="ver.version"
                class="crd-tree-leaf-group"
              >
                <div
                  class="crd-version-item crd-tree-item"
                  :class="{ 'is-current': ver.version === record.version }"
                >
                  <a :href="resolveUrl(ver.route_url)" class="crd-version-link">
                    <span class="crd-version-label">
                      {{ ver.label || ver.version }}
                      <span v-if="ver.is_latest" class="crd-latest-tag">Latest</span>
                    </span>
                    <span class="crd-version-date">{{ ver.date }}</span>
                  </a>
                </div>

                <ul v-if="ver.children && ver.children.length > 0" class="crd-tree-subbranch">
                  <li
                    v-for="child in ver.children"
                    :key="child.version"
                    class="crd-version-item crd-tree-subitem"
                    :class="{ 'is-current': child.version === record.version }"
                  >
                    <a :href="resolveUrl(child.route_url)" class="crd-version-link">
                      <span class="crd-version-label">
                        {{ child.label || child.version }}
                        <span v-if="child.is_latest" class="crd-latest-tag">Latest</span>
                      </span>
                      <span class="crd-version-date">{{ child.date }}</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>

        <!-- Standard Version List under Project Root -->
        <ul v-else class="crd-version-list crd-tree-branch">
          <li
            v-for="ver in record.versions"
            :key="ver.version"
            class="crd-version-item crd-tree-item"
            :class="{ 'is-current': ver.version === record.version }"
          >
            <a :href="resolveUrl(ver.route_url)" class="crd-version-link">
              <span class="crd-version-label">
                {{ ver.label || ver.version }}
                <span v-if="ver.is_latest" class="crd-latest-tag">Latest</span>
              </span>
              <span class="crd-version-date">{{ ver.date }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- 3. Tags Box -->
    <div v-if="sorted_tags.length > 0" class="crd-sidebar-card">
      <div class="crd-sidebar-card-header">
        <span class="crd-sidebar-heading">Tags</span>
      </div>
      <div class="crd-sidebar-tags">
        <template v-for="(t, idx) in sorted_tags" :key="t">
          <TagBadge
            :tag="t"
            @select="navigateToTag"
          />
          <span
            v-if="t === 'synthetic' && idx < sorted_tags.length - 1"
            class="crd-tag-pipe"
            aria-hidden="true"
          >|</span>
        </template>
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

let has_folder_tree = computed(() => {
  let vers = Array.isArray(props.record.versions) ? props.record.versions : [];
  return vers.some((arg0_v) => Boolean(arg0_v.folder_key));
});

let sorted_tags = computed(() => {
  let list = Array.isArray(props.record.tags) ? props.record.tags.slice() : [];
  return list.sort((arg0_a, arg1_b) => {
    if (arg0_a === "synthetic" && arg1_b !== "synthetic") return -1;
    if (arg1_b === "synthetic" && arg0_a !== "synthetic") return 1;
    return String(arg0_a).localeCompare(String(arg1_b));
  });
});

let version_tree_folders = computed(() => {
  let folder_map = new Map();
  let folders = [];
  let vers = Array.isArray(props.record.versions) ? props.record.versions : [];

  for (let i = 0; i < vers.length; i++) {
    let ver = vers[i];
    let f_key = ver.folder_key || "general";
    let f_label = ver.folder_label || "General";
    if (!folder_map.has(f_key)) {
      let folder_obj = {
        all_versions: [],
        items: [],
        key: f_key,
        label: f_label,
        route_url: ver.folder_route_url || ver.route_url
      };
      folder_map.set(f_key, folder_obj);
      folders.push(folder_obj);
    }
    folder_map.get(f_key).all_versions.push(ver);
  }

  for (let i = 0; i < folders.length; i++) {
    let folder_obj = folders[i];
    let by_ver = new Map();
    for (let x = 0; x < folder_obj.all_versions.length; x++) {
      let v = folder_obj.all_versions[x];
      by_ver.set(v.version, { ...v, children: [] });
    }
    for (let x = 0; x < folder_obj.all_versions.length; x++) {
      let v = folder_obj.all_versions[x];
      let node = by_ver.get(v.version);
      if (v.parent_version && by_ver.has(v.parent_version)) {
        by_ver.get(v.parent_version).children.push(node);
      } else {
        folder_obj.items.push(node);
      }
    }
  }

  return folders;
});

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

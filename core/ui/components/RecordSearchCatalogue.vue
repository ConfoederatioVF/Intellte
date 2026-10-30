<template>
  <!-- Intellte CRD Working Papers Catalogue: Clean Academic Search & Filters -->
  <div class="crd-catalogue-shell">
    <!-- 1. Top Banner & Locale Switcher -->
    <header class="crd-portal-hero">
      <div class="crd-portal-hero-top">
        <div class="crd-banner-row">
          <img class="crd-banner-logo" :src="resolveUrl('/artefacts/crd_logo.png')" alt="CRD Emblem" />
          <div class="crd-banner-text">
            <h1 class="crd-banner-line">{{ t("portal_title") }}</h1>
            <p class="crd-banner-subline">{{ t("portal_subtitle") }}</p>
          </div>
        </div>

        <div class="crd-locale-switcher">
          <button
            v-for="loc in ['en-gb', 'fr', 'de']"
            :key="loc"
            type="button"
            class="crd-locale-btn"
            :class="{ 'is-active': active_locale === loc }"
            @click="active_locale = loc"
          >
            {{ loc.toUpperCase() }}
          </button>
        </div>
      </div>

      <!-- 2. Search & Sort Controls -->
      <div class="crd-search-controls-row">
        <div class="crd-search-input-wrap">
          <input
            v-model="search_query"
            type="search"
            class="crd-search-input"
            :placeholder="t('search_placeholder')"
          />
        </div>
        <div class="crd-controls-group">
          <button
            type="button"
            class="crd-version-toggle-btn"
            :class="{ 'is-active': show_all_versions }"
            :aria-pressed="show_all_versions"
            @click="toggleShowAllVersions"
          >
            <span class="crd-toggle-track" aria-hidden="true">
              <span class="crd-toggle-thumb"></span>
            </span>
            <span class="crd-toggle-label">{{ t("show_all_versions") }}</span>
          </button>
          <div class="crd-sort-wrap">
            <select v-model="sort_by" class="crd-sort-select">
              <option value="newest">{{ t("sort_newest") }}</option>
              <option value="title">{{ t("sort_title") }}</option>
            </select>
          </div>
        </div>
      </div>

      <!-- 3. Tag Filters -->
      <div v-if="all_tags_with_counts.length > 0" class="crd-tag-filter-bar">
        <span class="crd-tag-filter-label">{{ t("filter_by_tags") }}:</span>
        <div class="crd-tag-filter-list">
          <TagBadge
            v-for="item in all_tags_with_counts"
            :key="item.tag"
            :tag="item.tag"
            :count="item.count"
            :active="selected_tags.includes(item.tag)"
            @select="toggleTag"
          />
          <button
            v-if="selected_tags.length > 0 || search_query"
            type="button"
            class="crd-clear-filters-btn"
            @click="clearFilters"
          >
            {{ t("clear_filters") }}
          </button>
        </div>
      </div>
    </header>

    <!-- 4. Results Count Meta -->
    <div class="crd-results-meta-bar">
      <span>{{ formatLocaleString(t("showing_records"), [filtered_records.length, base_records.length]) }}</span>
    </div>

    <!-- 5. Working Paper Cards List -->
    <div v-if="filtered_records.length > 0" class="crd-records-list">
      <article
        v-for="rec in filtered_records"
        :key="rec.record_id"
        class="crd-record-card"
      >
        <div class="crd-record-card-top">
          <div class="crd-record-badges">
            <span class="crd-badge-type">{{ rec.record_type }}</span>
            <span class="crd-badge-sep">·</span>
            <span class="crd-badge-project">Project {{ rec.project_id }}</span>
            <span class="crd-badge-sep">·</span>
            <span class="crd-badge-version">v{{ rec.version }}</span>
            <span v-if="rec.is_latest" class="crd-latest-badge-sm">Latest</span>
            <span class="crd-badge-sep">·</span>
            <span class="crd-badge-date">{{ rec.published_date }}</span>
          </div>
        </div>

        <h2 class="crd-record-card-title">
          <a :href="resolveUrl(rec.route_url)">{{ rec.title }}</a>
        </h2>
        <p v-if="rec.subtitle" class="crd-record-card-subtitle">{{ rec.subtitle }}</p>
        <p class="crd-record-card-authors">{{ rec.authors_line }}</p>

        <p v-if="rec.abstract_excerpt" class="crd-record-card-abstract">
          {{ rec.abstract_excerpt }}
        </p>

        <!-- Tags on Card -->
        <div v-if="rec.tags && rec.tags.length > 0" class="crd-record-card-tags">
          <TagBadge
            v-for="tag in rec.tags"
            :key="tag"
            :tag="tag"
            :active="selected_tags.includes(tag)"
            @select="toggleTag"
          />
        </div>

        <!-- Clean Action Buttons -->
        <div class="crd-record-card-actions">
          <a :href="resolveUrl(rec.route_url)" class="crd-btn-sm crd-btn-primary">
            {{ t("read_paper") }}
          </a>
          <a
            v-if="rec.pdf_url"
            :href="resolveUrl(rec.pdf_url)"
            download
            class="crd-btn-sm"
          >
            Download PDF ({{ rec.pdf_size_euro }})
          </a>
          <a
            v-if="rec.rmd_url"
            :href="resolveUrl(rec.rmd_url)"
            download
            class="crd-btn-sm crd-btn-subtle"
          >
            Source (.Rmd)
          </a>
        </div>
      </article>
    </div>

    <div v-else class="crd-empty-state">
      <p>{{ t("no_records_found") }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { withBase } from "vitepress";
import TagBadge from "./TagBadge.vue";

import search_index_data from "../../../docs/data/search_index.json";
import localisation_data from "../../../docs/data/localisation.json";

let active_locale = ref("en-gb");
let records_list = ref(
  (search_index_data && Array.isArray(search_index_data.records))
    ? search_index_data.records
    : []
);
let search_query = ref("");
let selected_tags = ref([]);
let show_all_versions = ref(false);
let sort_by = ref("newest");

onMounted(() => {
  if (typeof window !== "undefined") {
    let params = new URLSearchParams(window.location.search);
    let url_all_versions = params.get("all_versions");
    let url_tag = params.get("tag");
    if (url_all_versions === "1" || url_all_versions === "true") {
      show_all_versions.value = true;
    }
    if (url_tag && !selected_tags.value.includes(url_tag)) {
      selected_tags.value.push(url_tag);
    }
  }
});

let t = function (arg0_key) {
  let loc_obj = localisation_data[active_locale.value] || localisation_data["en-gb"] || {};
  let strings = loc_obj.strings || {};
  return strings[arg0_key] || arg0_key;
};

let formatLocaleString = function (arg0_template, arg1_values) {
  let out = String(arg0_template || "");
  let vals = Array.isArray(arg1_values) ? arg1_values : [];
  for (let i = 0; i < vals.length; i++) {
    let token = `\u00a3${i + 1}\u00a3`;
    out = out.split(token).join(String(vals[i] !== undefined ? vals[i] : ""));
  }
  return out;
};

let base_records = computed(() => {
  if (show_all_versions.value) return records_list.value;
  return records_list.value.filter((arg0_rec) => Boolean(arg0_rec.is_latest));
});

let all_tags_with_counts = computed(() => {
  let counts = {};
  for (let i = 0; i < base_records.value.length; i++) {
    let tags = base_records.value[i].tags || [];
    for (let x = 0; x < tags.length; x++) {
      let tg = tags[x];
      counts[tg] = (counts[tg] || 0) + 1;
    }
  }
  return Object.keys(counts)
    .sort()
    .map((arg0_tg) => ({ count: counts[arg0_tg], tag: arg0_tg }));
});

let filtered_records = computed(() => {
  let active_t = selected_tags.value;
  let q = search_query.value.trim().toLowerCase();

  let filtered = base_records.value.filter((arg0_rec) => {
    let rec = arg0_rec;
    if (active_t.length > 0) {
      let rec_tags = rec.tags || [];
      for (let i = 0; i < active_t.length; i++) {
        if (!rec_tags.includes(active_t[i])) return false;
      }
    }
    if (!q) return true;
    let haystack = [
      rec.title,
      rec.subtitle,
      rec.authors_line,
      rec.abstract_excerpt,
      rec.project_name,
      rec.project_id,
      ...(rec.tags || [])
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });

  return filtered.slice().sort((arg0_a, arg1_b) => {
    if (sort_by.value === "title") {
      return String(arg0_a.title).localeCompare(String(arg1_b.title));
    }
    return String(arg1_b.published_iso_gmt).localeCompare(String(arg0_a.published_iso_gmt));
  });
});

let clearFilters = function () {
  search_query.value = "";
  selected_tags.value = [];
};

let resolveUrl = function (arg0_url) {
  let u = String(arg0_url || "");
  if (u.startsWith("http://") || u.startsWith("https://")) return u;
  return withBase(u.startsWith("/") ? u : `/${u}`);
};

let toggleShowAllVersions = function () {
  show_all_versions.value = !show_all_versions.value;
};

let toggleTag = function (arg0_tag) {
  let idx = selected_tags.value.indexOf(arg0_tag);
  if (idx >= 0) {
    selected_tags.value.splice(idx, 1);
  } else {
    selected_tags.value.push(arg0_tag);
  }
};
</script>

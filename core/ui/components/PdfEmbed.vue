<template>
  <!-- Inline <pdf src="..."> Embed Component with Minimise / Expand Controls -->
  <div
    class="crd-pdf-embed"
    :class="{
      'is-minimised': is_minimised,
      'is-expanded-tall': is_tall
    }"
  >
    <div class="crd-pdf-embed-toolbar">
      <div class="crd-pdf-embed-title-group">
        <span class="crd-pdf-badge">PDF</span>
        <span class="crd-pdf-embed-title">{{ display_title }}</span>
        <span v-if="size" class="crd-pdf-embed-size">({{ size }})</span>
      </div>
      <div class="crd-pdf-embed-actions">
        <button
          type="button"
          class="crd-btn-sm"
          @click="toggleMinimise"
        >
          {{ is_minimised ? "Expand PDF" : "Minimise PDF" }}
        </button>
        <button
          v-if="!is_minimised"
          type="button"
          class="crd-btn-sm"
          @click="toggleTall"
        >
          {{ is_tall ? "Standard height" : "Full height" }}
        </button>
        <a
          :href="resolved_src"
          target="_blank"
          rel="noopener"
          class="crd-btn-sm crd-btn-link"
        >
          Open
        </a>
        <a
          :href="resolved_src"
          download
          class="crd-btn-sm crd-btn-primary"
        >
          Download
        </a>
      </div>
    </div>

    <div v-if="!is_minimised" class="crd-pdf-embed-body" :style="{ height: active_height }">
      <iframe
        :src="resolved_src"
        class="crd-pdf-iframe"
        :title="display_title"
      ></iframe>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { withBase } from "vitepress";

let props = defineProps({
  defaultOpen: {
    default: true,
    type: [Boolean, String]
  },
  height: {
    default: "640px",
    type: String
  },
  size: {
    default: "",
    type: String
  },
  src: {
    required: true,
    type: String
  },
  title: {
    default: "",
    type: String
  }
});

let initial_open = !(props.defaultOpen === false || props.defaultOpen === "false");
let is_minimised = ref(!initial_open);
let is_tall = ref(false);

let resolved_src = computed(() => {
  let raw = String(props.src || "");
  if (raw.startsWith("http://") || raw.startsWith("https://")) return raw;
  return withBase(raw.startsWith("/") ? raw : `/${raw}`);
});

let display_title = computed(() => {
  if (props.title) return props.title;
  let parts = String(props.src || "").split("/");
  return parts[parts.length - 1] || "Attached PDF Document";
});

let active_height = computed(() => {
  if (is_tall.value) return "86vh";
  return props.height || "640px";
});

let toggleMinimise = function () {
  is_minimised.value = !is_minimised.value;
};

let toggleTall = function () {
  is_tall.value = !is_tall.value;
};
</script>


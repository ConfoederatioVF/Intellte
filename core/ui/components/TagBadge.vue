<template>
  <!-- Interactive CRD Tag Pill (Supports Include & Exclude States) -->
  <button
    type="button"
    class="crd-tag-badge"
    :class="{
      'is-active': active,
      'is-excluded': excluded,
      'is-synthetic': is_synthetic_tag
    }"
    :title="tooltip_text"
    @click="handleClick"
    @contextmenu.prevent="handleExclude"
  >
    <svg
      v-if="is_synthetic_tag"
      class="crd-tag-robot-icon"
      viewBox="0 0 24 24"
      width="13"
      height="13"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20 9V7c0-1.1-.9-2-2-2h-3c0-1.66-1.34-3-3-3S9 3.34 9 5H6c-1.1 0-2 .9-2 2v2c-1.66 0-3 1.34-3 3s1.34 3 3 3v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c1.66 0 3-1.34 3-3s-1.34-3-3-3zM7.5 11.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S9.83 13 9 13s-1.5-.67-1.5-1.5zM16 17H8v-2h8v2zm-1-4c-.83 0-1.5-.67-1.5-1.5S14.17 10 15 10s1.5.67 1.5 1.5S15.83 13 15 13z" />
    </svg>
    <span class="crd-tag-label"><span class="crd-tag-hash">#</span><span class="crd-tag-text">{{ display_tag }}</span></span>
    <span v-if="count !== null && count !== undefined" class="crd-tag-count">{{ count }}</span>
  </button>
</template>

<script setup>
import { computed } from "vue";

let props = defineProps({
  active: {
    default: false,
    type: Boolean
  },
  count: {
    default: null,
    type: Number
  },
  excluded: {
    default: false,
    type: Boolean
  },
  tag: {
    required: true,
    type: String
  },
  tooltip: {
    default: "",
    type: String
  }
});

let emit = defineEmits(["exclude", "select"]);

let is_synthetic_tag = computed(() => String(props.tag || "").toLowerCase() === "synthetic");

let display_tag = computed(() => {
  if (is_synthetic_tag.value) return "synthetic";
  return props.tag;
});

let tooltip_text = computed(() => {
  if (props.tooltip) return props.tooltip;
  return "Click to cycle: include (green), exclude (red), neutral";
});

let handleClick = function (arg0_e) {
  if (arg0_e && arg0_e.shiftKey) {
    emit("exclude", props.tag);
    return;
  }
  emit("select", props.tag);
};

let handleExclude = function () {
  emit("exclude", props.tag);
};
</script>


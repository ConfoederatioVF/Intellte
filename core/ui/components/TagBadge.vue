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
    <span class="crd-tag-hash">{{ excluded ? "−#" : "#" }}</span>
    <span class="crd-tag-text">{{ display_tag }}</span>
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
  if (is_synthetic_tag.value) return "Synthetic";
  return props.tag;
});

let tooltip_text = computed(() => {
  if (props.tooltip) return props.tooltip;
  return "Click to include · Click again (or Shift-click) to exclude";
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


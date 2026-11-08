<template>
  <!-- Interactive CRD Tag Pill -->
  <button
    type="button"
    class="crd-tag-badge"
    :class="{ 'is-active': active, 'is-synthetic': is_synthetic_tag }"
    @click="handleClick"
  >
    <span class="crd-tag-hash">#</span>
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
  tag: {
    required: true,
    type: String
  }
});

let emit = defineEmits(["select"]);

let is_synthetic_tag = computed(() => String(props.tag || "").toLowerCase() === "synthetic");

let display_tag = computed(() => {
  if (is_synthetic_tag.value) return "Synthetic";
  return props.tag;
});

let handleClick = function () {
  emit("select", props.tag);
};
</script>


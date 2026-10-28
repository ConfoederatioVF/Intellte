<template>
  <!-- Interactive CRD Tag Pill -->
  <button
    type="button"
    class="crd-tag-badge"
    :class="{ 'is-active': active }"
    @click="handleClick"
  >
    <span class="crd-tag-hash">#</span>
    <span class="crd-tag-text">{{ tag }}</span>
    <span v-if="count !== null && count !== undefined" class="crd-tag-count">{{ count }}</span>
  </button>
</template>

<script setup>
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

let handleClick = function () {
  emit("select", props.tag);
};
</script>


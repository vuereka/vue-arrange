<template>
  <div>
    <slot :open="open" :toggle="toggle"></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, inject, Ref } from "vue";

const open = ref(false);

const expandAll = inject<Ref<boolean | undefined>>("expandAll", ref(false));
watch(
  expandAll,
  (state: boolean | undefined) => {
    if (state != undefined) open.value = state;
  },
  { immediate: true },
);

function toggle(state?: boolean) {
  if (state !== undefined) {
    open.value = state;
  } else {
    open.value = !open.value;
  }
  expandAll.value = undefined;
}

defineExpose({ open, toggle });
</script>

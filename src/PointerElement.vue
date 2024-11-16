<script setup lang="ts">
import { onMounted, ref, watch, computed } from "vue";
import { usePointer } from "@vueuse/core";

const PointerElement = ref<HTMLElement>();

const { x, y } = usePointer();

// Standard html events @pointerenter and @pointerleave are not being registered while pointerdown
// That is why this is implemented.
const isAbove = computed<boolean>(() => {
  const element = PointerElement.value as HTMLElement;
  const box = element.getBoundingClientRect();
  return (
    x.value >= box.x &&
    x.value <= box.x + box.width &&
    y.value >= box.y &&
    y.value <= box.y + box.height
  );
});

const emit = defineEmits<{
  (e: "pointer-enter", target: HTMLElement): void;
  (e: "pointer-leave", target: HTMLElement): void;
}>();

defineExpose({
  isAbove,
});

defineProps({
  tag: {
    type: String,
    default: "div",
  },
});

onMounted(() => {
  watch(isAbove, (afterInside, beforeInside) => {
    if (afterInside && !beforeInside) {
      emit("pointer-enter", PointerElement.value as HTMLElement);
    } else if (beforeInside && !afterInside) {
      emit("pointer-leave", PointerElement.value as HTMLElement);
    }
  });
});
</script>

<template>
  <component :is="tag" ref="PointerElement">
    <slot v-bind="$attrs" />
  </component>
</template>

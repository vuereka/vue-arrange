<script setup lang="ts">
import { onMounted, ref, watch, computed } from "vue";
import { useMouse } from "@vueuse/core";

export type RelativePosition = {
  ratio: {
    x: number;
    y: number;
  }
  offset: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  }
}

const item = ref<HTMLElement>();

const { x, y } = useMouse();
  
const mouseInside = computed<boolean>(() => {
  const box = (<HTMLElement>item.value).getBoundingClientRect()
  return x.value >= box.x &&
    x.value <= box.x + box.width &&
    y.value >= box.y &&
    y.value <= box.y + box.height;
})

const relativeMousePosition = computed<RelativePosition>(() =>{
  const box = (<HTMLElement>item.value).getBoundingClientRect()
  return {
    ratio: {
      x: (x.value - box.x) / box.width,
      y: (y.value - box.y) / box.height,
    },
    offset: {
      left: x.value - box.x,
      right: box.x + box.width - x.value, 
      top: y.value - box.y,
      bottom: box.y + box.height - y.value,
    }
  }
})

const emit = defineEmits<{
  (e: "mouseEnter", position: RelativePosition): void;
  (e: "mouseLeave"): void;
}>();

defineExpose({
  mouseInside, relativeMousePosition
})

onMounted(() => {
  watch(mouseInside, (afterInside, beforeInside) => {
    if (afterInside && !beforeInside) {
      emit("mouseEnter", relativeMousePosition.value);
    } else if (beforeInside && !afterInside) {
      emit("mouseLeave");
    }
  });
});
</script>

<template>
  <div ref="item">
    <slot v-bind="$attrs" />
  </div>
</template>

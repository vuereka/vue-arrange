<script setup lang="ts">
import { onMounted, ref, watch, computed } from "vue";
import { useMouse } from "@vueuse/core";

const props = withDefaults(defineProps<{
  margin?: number;
}>(), {
  margin: 0.5,
});

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

const HoverItem = ref<HTMLElement>();

const { x, y } = useMouse();
  
const mouseInside = computed<boolean>(() => {
  const box = (<HTMLElement>HoverItem.value).getBoundingClientRect()
  return x.value >= box.x &&
    x.value <= box.x + box.width &&
    y.value >= box.y &&
    y.value <= box.y + box.height;
})

const relativeMousePosition = computed<RelativePosition>(() =>{
  const box = (<HTMLElement>HoverItem.value).getBoundingClientRect()
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
  (e: "mouseEnterRight", position: RelativePosition): void;
  (e: "mouseEnterLeft", position: RelativePosition): void;
  (e: "mouseEnterCenterX", position: RelativePosition): void;
  (e: "mouseEnterBottom", position: RelativePosition): void;
  (e: "mouseEnterTop", position: RelativePosition): void;
  (e: "mouseEnterCenterY", position: RelativePosition): void;
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
  watch(() => relativeMousePosition.value.ratio, (after, before) => {
    if(after.y > 1 - props.margin && after.y < 1 && (before.y > 1 || before.y < 1 - props.margin)) {
      emit('mouseEnterBottom', relativeMousePosition.value);
    }
    if(after.y > 0 && after.y < props.margin && (before.y < 0 || before.y > props.margin)) {
      emit('mouseEnterTop', relativeMousePosition.value);
    }
    if(after.y > props.margin && after.y < 1 - props.margin && (before.y < props.margin || before.y > 1 - props.margin)) {
      emit('mouseEnterCenterY', relativeMousePosition.value);
    }
    if(after.x > 1 - props.margin && after.x < 1 && (before.x > 1 || before.x < 1 - props.margin)) {
      emit('mouseEnterRight', relativeMousePosition.value);
    }
    if(after.x > 0 && after.x < props.margin && (before.x < 0 || before.x > props.margin)) {
      emit('mouseEnterLeft', relativeMousePosition.value);
    }
    if(after.x > props.margin && after.x < 1 - props.margin && (before.x < props.margin || before.x > 1 - props.margin)) {
      emit('mouseEnterCenterX', relativeMousePosition.value);
    }
  })
});
</script>

<template>
  <div ref="HoverItem">
    <slot v-bind="$attrs" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useMouse } from "@vueuse/core";

const item = ref<HTMLElement>();

const { x, y } = useMouse();

const emit = defineEmits<{
  (e: "mouseEnter"): void;
  (e: "mouseLeave"): void;
}>();

onMounted(() => {
  watch([x, y], ([afterX, afterY], [beforeX, beforeY]) => {
    const box = (<HTMLElement>item.value).getBoundingClientRect();
    const beforeInside =
      beforeX >= box.x &&
      beforeX <= box.x + box.width &&
      beforeY >= box.y &&
      beforeY <= box.y + box.height;
    const afterInside =
      afterX >= box.x &&
      afterX <= box.x + box.width &&
      afterY >= box.y &&
      afterY <= box.y + box.height;
    if (afterInside && !beforeInside) {
      emit("mouseEnter");
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

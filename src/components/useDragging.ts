import { ref, Ref } from "vue";
import { DraggingType, iArrangeable } from "./types.js";

const dragging = ref<DraggingType | undefined>(undefined);

export const useDragging = <T>() => {
  function isDragging(item: T) {
    if (dragging.value === undefined) return false;
    return item === dragging.value.payload;
  }

  return {
    isDragging,
    dragging: dragging as Ref<iArrangeable<T>>,
  };
};

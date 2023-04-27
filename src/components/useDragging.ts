import { useMousePressed } from "@vueuse/core";
import { watch, ref } from "vue";

const { pressed: mouseDown } = useMousePressed();
watch(mouseDown, (down) => {
  if (!down) {
    dragging.value = undefined;
  }
});

export interface Arrangeable<PayloadType> {
  payload: PayloadType;
  fromIndex: number;
  origin: string | symbol;
  toIndex?: number;
  destination?: string | symbol;
  targets: Array<string | symbol>;
  key: symbol;
}

export type ArrangeableType = Arrangeable<any>;

const dragging = ref<ArrangeableType | undefined>(undefined);

export const useDragging = <T>() => {
  function isDragging(item: T) {
    if (dragging.value === undefined) return false;
    return item === dragging.value?.payload;
  }

  return {
    isDragging,
    dragging,
  };
};

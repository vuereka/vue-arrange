import { ref, type Ref } from "vue";
import { MovingItem } from "./types.js";

const movingItem = ref<MovingItem<any> | undefined>(undefined);

export const useMovingItem = <PayloadType>() => {
  function isMoving(item: PayloadType) {
    if (movingItem.value === undefined) return false;
    return item === movingItem.value.payload;
  }

  return {
    isMoving,
    movingItem: movingItem as Ref<MovingItem<PayloadType> | undefined>,
  };
};

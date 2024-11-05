import { ref, type Ref } from "vue";
import { TargetIdentifier, MovingItem } from "./types.js";

const movingItem = ref<MovingItem<any> | undefined>(undefined);

export const useMovingItem = <PayloadType>() => {
  function isMoving(item: PayloadType) {
    if (movingItem.value === undefined) return false;
    return item === movingItem.value.payload;
  }

  function movingItemCanTarget(targets: Array<TargetIdentifier>) {
    if (movingItem.value === undefined) return false;
    return movingItem.value.dropTargets.some((target) =>
      targets.includes(target)
    );
  }

  return {
    isMoving,
    movingItemCanTarget,
    movingItem: movingItem as Ref<MovingItem<PayloadType> | undefined>,
  };
};

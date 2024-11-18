import { computed, ComputedRef, reactive, ref, watch } from "vue";
import { TargetIdentifier } from "./types";
import { useMovingItem } from "./useMovingItem";

const { movingItemCanTarget } = useMovingItem();

type List = {
  identifier: TargetIdentifier;
  group: TargetIdentifier | undefined;
  stackLevel: number;
  pointerIsAbove: ComputedRef;
  enterList: () => void;
  leaveList: () => void;
};

// an array of list identifiers and their identifying properties
const lists = reactive<Record<TargetIdentifier, List>>({});
const listUnderPointer = ref<List | undefined>(undefined);
const targetedListIdentifier = computed(
  () => listUnderPointer.value?.identifier,
);

watch(
  () =>
    Reflect.ownKeys(lists)
      .filter((key) =>
        movingItemCanTarget([key as TargetIdentifier, lists[key].group]),
      )
      .filter((key) => lists[key].pointerIsAbove)
      .toSorted((a, b) => lists[b].stackLevel - lists[a].stackLevel)
      .map((key) => lists[key]),
  (list) => {
    listUnderPointer.value = list.length ? list.at(0) : undefined;
  },
);

watch(
  () => listUnderPointer.value,
  (newValue, oldValue) => {
    if (newValue === oldValue) return;
    if (oldValue) oldValue.leaveList();
    if (newValue) newValue.enterList();
  },
);

export const useArrangeableLists = () => {
  function addList(
    identifier: TargetIdentifier,
    group: TargetIdentifier | undefined,
    stackLevel: number,
    pointerIsAbove: ComputedRef<boolean>,
    enterList: () => void,
    leaveList: () => void,
  ) {
    lists[identifier] = {
      identifier,
      group,
      stackLevel,
      pointerIsAbove,
      enterList,
      leaveList,
    };
  }

  function removeList(identifier: TargetIdentifier) {
    delete lists[identifier];
  }

  return {
    addList,
    removeList,
    targetedList: targetedListIdentifier,
  };
};

<script setup lang="ts">
import { useMouse, useEventListener } from "@vueuse/core";
import { ref, toRaw, onMounted, watch, computed } from "vue";
import { useDragging, type Arrangeable } from "./useDragging";
import HoverItem, { type RelativePosition } from "./HoverItem.vue";

// TODO: any way we can use a generic in stead of unknown here? Would be great to assure it at least contains the key in the options.
interface ArrangeableOptions {
  hoverClass?: string;
  pickedItemClass?: string;
  unpickedItemClass?: string;
}
type PayloadType = object;
type ListType = Array<PayloadType>;
type KeyItem = {
  payload: PayloadType;
  key: symbol;
};

const props = withDefaults(
  defineProps<{
    options?: ArrangeableOptions;
    list: ListType;
    name?: string | symbol;
    group?: string | symbol;
    targets?: string | symbol | Array<string | symbol>;
  }>(),
  {
    options: () => ({
      name: Symbol(),
      hoverClass: "",
      pickedItemClass: "",
      unpickedItemClass: "",
    }),
  }
);

const emit = defineEmits<{
  (e: "dropItem", item: Arrangeable<PayloadType>): void;
}>();

const mouse = useMouse();
const { dragging, isDragging } = useDragging<PayloadType>();
const keyItemsList = ref<KeyItem[]>([]);
const arrangedItems = computed(() =>
  keyItemsList.value.map(({ payload }) => payload)
);

defineExpose({
  arrangedItems,
  dragging,
});

function populateList(newList: PayloadType[]) {
  dragging.value = undefined;
  const newArrangedList = keyItemsList.value.filter(({ payload }) =>
    newList.includes(payload)
  );
  const newItems = newList.filter(
    (item) => !newArrangedList.find(({ payload }) => payload === item)
  );
  for (const item of newItems) {
    newArrangedList.push({
      key: Symbol(),
      payload: item,
    });
  }
  keyItemsList.value = newArrangedList;
}

watch(() => props.list, populateList);
const hoverOverItem = (payload: PayloadType, toIndex: number) => {
  if (
    dragging.value === undefined ||
    dragging.value.destination !== props.name ||
    isDragging(payload)
  )
    return;
  dragging.value.toIndex = toIndex;
  // if the dragging item does not appear in the list, add it
  if (!arrangedItems.value.includes(dragging.value?.payload)) {
    keyItemsList.value.splice(toIndex, 0, {
      payload: dragging.value.payload,
      key: dragging.value.key,
    });
  }
  // else move it
  else {
    const moverIndex = keyItemsList.value.findIndex(
      ({ payload }) => payload === dragging.value?.payload
    );
    keyItemsList.value =
      moverIndex < toIndex
        ? [
            ...keyItemsList.value.slice(0, moverIndex),
            ...keyItemsList.value.slice(moverIndex + 1, toIndex + 1),
            keyItemsList.value[moverIndex],
            ...keyItemsList.value.slice(toIndex + 1),
          ]
        : [
            ...keyItemsList.value.slice(0, toIndex),
            keyItemsList.value[moverIndex],
            ...keyItemsList.value.slice(toIndex, moverIndex),
            ...keyItemsList.value.slice(moverIndex + 1),
          ];
  }
};

let offsetX: number = 0;
let offsetY: number = 0;
const pickUpItem = ($event: MouseEvent, { key, payload }: KeyItem) => {
  offsetX = $event.offsetX;
  offsetY = $event.offsetY;
  dragging.value = {
    payload: payload,
    origin: props.name,
    destination: props.name,
    fromIndex: arrangedItems.value.indexOf(payload),
    toIndex: arrangedItems.value.indexOf(payload),
    targets: [props.targets ?? props.group ?? props.name].flat(),
    key,
  };
};

// https://play.vuejs.org/#eNrdVk1v4zYQ/SsDLYooiSXZySYH1THSS4sFWrRAe2ix2gMtUTZriRREyonXyH/vIynb8kdz2tMmAUQO33AeZx6H2QY/NU287niQBlOdt6IxpLnpmlkmRd2o1tCWWl7SG5WtqukK0Kv90p/4VvxXoU2/GicHk931AP25k6vNEXJv6YFEmcyVBGLBzScpjGDVJ8NrTU8UXtPTjD5PRnQ3ovsRfRzRw5cdXPQg0AxPXMPr60xWHJgCAAeM16zqeFxxuTBLuqVJJjNZdjI3QkkSUvPWINzWEur3h+tvzCzjVnWyCP2QyULVwN1c2BUx6cism0rkPBQjGo9A5fYWiLejuC1H1ndhB64IfXakU1+97Mqy4pe9BzO7SBTXrAmt1WY03LqV1MFGpFGptD9rf8A3m0HnZxfDkI1o7orBnIEimruBQ2XG7W7nHAmfuQ154cNf/3h+6FqtkRbEPkv4MH1CFvz199ID3RFLCgXNKJr0fv+X7omDIyr+ponXN5SNCeBNxQzHjGg674wBoeccjqunLPAyyIKZHxAz5BMCgYDLNPEOl51dLeHrvu9D+9IB3I+O4YdLk7rzWWb2mwW0jnSlDAxbd3ScMXA+mZkWYu2G9me7W0YCvOUC3UMVsMnfewr2QjqPZLfj9HBpMZ8mgyRmMhgF/q5H0ED8r1YSPcVVB6zdAninu3plAW69nWfB0phGp0nSyWa1iHNVJ89YS9pOGlHzCFl/vo/v4o8P4KHN0B5zXUfzVr2gSIiYBaPB5gmMa95GLUfJWt6+G+wEexTwZO0s6E5iSMBRT7vQUgteCsn/aFWjw8/W78rVE93vC5T6nkL/gv40uoCSv6ANNSRZzVG8khVWPX2hUCcIo1RtLxSo1V8MCCavmN4JCNN0xTf72V4uR9rB1GrMa+/gmeyFMZTGsUxO2J6LZarNprJDlEAahqS0XhmN8n4pugPQYs3RNmBmRSHkIqXxrovE7oDO50UUZpnSZDz+wYGXXCyWaGT34+bVGeYsXy1c945yVak2pQ/lvf31q6pFYeHfvKJhVXgqPjw+PvZLr5EWX11kD4tg2lFIbmgSU8GR2paT2Z+ZbhLws6WJ7NWCKP2ES4MNGJrfwFhxtua90R/nsFFKrKpoHD9oyru5yKM5/yp4G8Ly4N6ScYwncbLvrCB0dyDkwvnnFr2LXCAyirRBFQYcPS2LOyEFrCOkGpYLs/HJ7/lBZHVKOmcV/wd8xujEzm4rHNrEg9yQ130MProDLbs3Eto/2y5zbMUlqc6QKqliGzsqK/WCapBZovcii/DYiY7hfwooA08F5UzSnONT5Z2NXOAFaVuem2oTD054nuODzNgcNe+MlZl/JJwwcZeP/5P5lpcZFvNtbiy6/YUrOkNsWM/u5fd4C/cFe/sPiY2qXQ==

const leaveList = () => {
  if (dragging.value !== undefined) {
    // TODO: Why does it go clunky again?
    keyItemsList.value.splice(
      keyItemsList.value.findIndex(
        ({ payload }: KeyItem) => payload === dragging.value?.payload
      ),
      1
    );
    dragging.value.destination = undefined;
    dragging.value.toIndex = undefined;
  }
};

const enterList = () => {
  if (
    dragging.value &&
    (dragging.value.targets.includes(props.name) ||
      (props.group && dragging.value.targets.includes(props.group)))
  ) {
    dragging.value.destination = props.name;
  }
};

onMounted(() => {
  populateList(props.list);
});

useEventListener(document, "mouseup", () => {
  if (dragging.value && dragging.value.origin === props.name) {
    if (dragging.value.destination) {
      emit("dropItem", toRaw(dragging.value));
    } else if (!arrangedItems.value.includes(dragging.value.payload)) {
      keyItemsList.value = [
        ...keyItemsList.value.slice(0, dragging.value.fromIndex),
        {
          payload: dragging.value.payload,
          key: dragging.value.key,
        },
        ...keyItemsList.value.slice(dragging.value.fromIndex),
      ];
    }
    dragging.value = undefined;
  }
});

const beforeKey = Symbol();
const afterKey = Symbol();
const hoverElement = ref<HTMLElement>();
const ArrangeableList = ref<HTMLElement>();
</script>

<template>
  <HoverItem
    ref="ArrangeableList"
    class="border-4"
    @mouse-leave="leaveList"
    @mouse-enter="enterList"
  >
    <div class="h-20 w-40 border-4 border-red-600" />
    <TransitionGroup name="list">
      <div :key="beforeKey">
        <slot name="before" />
      </div>
      <HoverItem
        v-for="(item, index) in keyItemsList"
        :key="item.key"
        :class="
          isDragging(item.payload)
            ? options.pickedItemClass
            : options.unpickedItemClass
        "
        @mousedown.left="pickUpItem($event, item)"
        @mouse-enter="hoverOverItem(item.payload, index)"
      >
        <slot :item="item.payload as any" />
      </HoverItem>
      <div :key="afterKey">
        <slot name="after" />
      </div>
    </TransitionGroup>
    <Teleport to="body" v-if="dragging && dragging.origin === name">
      <div
        ref="hoverElement"
        :class="options.hoverClass"
        style="z-index: 1000000; position: absolute"
        :style="{
          left: mouse.x.value - offsetX + 'px',
          top: mouse.y.value - offsetY + 'px',
        }"
      >
        <slot :item="dragging.payload as any" :dragging="true" />
      </div>
    </Teleport>
  </HoverItem>
</template>

<style scoped>
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>

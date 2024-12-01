# Vue-arrange: Arrangeable lists for Vue3

Component library to drag and drop items across lists in Vue3. Try out [here](https://vuereka.github.io/vue-arrange/):

[![showcase](./video/showcase2.gif)](https://vuereka.github.io/vue-arrange/)

Features:

- Rearranging a component list. Dragging/dropping items from one list to another.
- Nested lists (for making kanbans, see example)
- Recursively stackable, see filesystem example
- Fully customizable
- sensible defaults for "homing effect" and sliding list transitions
- Supports grab handles for list elements.
- Interactive elements such trash bin.
- Utility-class (Tailwind) friendly
- Completely built in Typescript. Supports generic items for any type of list.
- lightweight on dependencies

## Usage

### To install

```
npm add vue-arrange
```

### To run the example app

- clone the package and install dependencies
- `npm run dev`

## Exports:

### Component `ArrangeableList <PayloadType>`

`PayloadType` is the generic type of the items in the list.

#### **Props:**

- **list**: `<PayloadType[]>` list of items to arrange.
- **listKey**: `<key of PayloadType>`, optional;
  - Unique identifier for items.
  - If not given, one gets automatically generated.
- **identifier**: `<TargetIdentifier>`, optional
  - Unique name of the list. Defaults to an unnamed symbol.
- **group**: `<TargetIdentifier>`, optional
  - Group the list belongs to. Items can be moved across member lists of this group.
- **targets**: `<TargetIdentifier | TargetIdentifier[]>`, optional
  - By supplying one or more targets, items from this list can only be moved to those groups/lists.
- **tag**: `<string>`, default: `'ul'`
  - HTML tag to use for the rendered list. E.g. `'ol'` or `'div'`.
- **listItemTag**: `<string>`, default: `'li'`
  - HTML tag to use for rendered list items.
- **meta**: <any>, optional
  - any information you wish to send along with items that get picked up.
- **options**: `<ArrangeableOptions>`, optional; options passed to the ArrangeableList.
  - **defaultItemClass**: `<string>`
    - css classes to place on all list items.
  - **pickedItemClass**: `<string>`
    - css classes to place on the original of the list item being picked up.
    - By default: 'invisible' built-in class (see below).
  - **listTransition**: `<TransitionGroupProps>`
    - Transition props for the list, dictating how moving, removing and adding items to the list looks.
    - Defaults to `{moveClass: "transition-all", leaveActiveClass: "absolute"}` See built-in classes below.
    - See Vue TransitionGroup API documentation: https://vuejs.org/api/built-in-components.html#transitiongroup.
  - **hoverTransitionClass**: `<string>`
    - CSS classes to apply for transition instructions about how the item transitions to the hovering state.
  - **hoverClass**: `<string>`
    - CSS classes to shape the item in its lifted state.
  - **homingEffect**: `<string | boolean>`, default `true`/`homing-effect`
    - If `boolean` and `true`, applies default class `homing-effect` as the transition to bring the hovering item to its destination.
    - If `string`, applies given CSS classes as the homing effect.
    - If `false`, no homing effect.
  - **handle**: `<boolean | string>`, default `false`
    - Indicate if the elements should be only dragged by a handle element. If `true`, any descendant elements with property: `name="handle"` are used as a handle. If `string` the name should be set to that string.
  - **liftDelay**: `<number>`, default `0`
    - time to wait after clicking before the item gets lifted up and starts hovering. Useful if single click needs to be used for something else.

See [ArrangeableProps type](#type-arrangeablepropspayloadtype) below

#### **Slots:**

- `#before`: template to display something before the list of items.
  - Props:
    - `arrangedItems`: the list of items as it is rendered now.
- `#default`: template for the listed items;
  - Props:
    - `item`: the list item
    - `arrangedItems`: the list of items as it is rendered now.
- `#after`: template to display something after the list of items.
  - Props:
    - `arrangedItems`: the list of items as it is rendered now.

#### **Events emitted:**

- `@lift-item`: fired when an item is being picked up out of this list. Payload: `MovingItem`.
- `@drop-item`: fired when an item _from this list_ is dropped somewhere. Payload: `MovingItem`.

#### **Notes**

- The `drop-item` hook is required to update the actual list. If not, the list restores to its original order.
- Can be customized using options (see [below](#type-arrangeableoptions)).
  - class options can take any list of (utility) classes like they would be normally passed to a component.
  - There is a default transition for the list, this can be overridden by with the listTransition option.
  - by default, items can only be moved within the same list.
    - By adding a `group` (see [options](#type-arrangeableoptions) below), items can be moved between different lists with the same group name.
    - By adding one or more `targets` (see [options](#type-arrangeableoptions) below), items can be made to move only to lists with `identifier` or `group` listed in `targets`.
- It can be used both by touch devices, mouse and any other type of pointer, as it uses PointerEvents. This is still experimental. It puts `touch-action: 'none'` css class on the document, to prevent interference from the browser gestures.

### Composable `useMovingItem<PayloadType>()`

Exposes:

- `movingItem`, of ref-type `MovingItem<PayloadType> | undefined`; the item currently being dragged around by the user from any list.
- `isMoving(item: PayloadType) => boolean`; test whether `item` is currently being dragged.
- `movingItemCanTarget(targets: Array<TargetIdentifier | undefined>) => boolean` tests whether the movingItem has one of the targets given.

```typescript
const { movingItem, isMoving } = useMovingItem<MyObjectType>();
```

### Types

#### `MovingItem<PayloadType>`

Information about what is/was being dragged/dropped.

```typescript
type MovingItem<PayloadType extends object> = {
  payload: PayloadType; // The item object being moved.
  hoverElement?: Ref<HTMLElement>; // the element ref of the hovering item.
  origin: Target<PayloadType>; // the list from which it was picked up as it was before the item was picked up.
  destination: Target<PayloadType>; // the list where the item is hovering or being dropped. It includes the new item.
  targets: Array<TargetIdentifier>; // the names/groups of the lists where this item can be dropped.
};
```

```typescript
type TargetIdentifier = string | number | symbol;
```

```typescript
type Target<PayloadType> = {
  identifier: TargetIdentifier; // unique id
  group?: TargetIdentifier; // shared id for lists of the same group (such as kanban columns)
  type: "list" | "dropzone"; // dropzones are used to interact with listitems outside of lists.
  listItems: PayloadType[]; // the elements of the list.
  index: number; // The index of the lifted item.
  meta: any; // any other information you may want to send to the recipient.
};
```

#### `ArrangeableProps<PayloadType>`

See above for description.

```typescript
type ArrangeableProps<PayloadType extends object> = {
  options?: ArrangeableOptions;
  list: PayloadType[];
  listKey?: string;
  identifier?: TargetIdentifier;
  meta?: any;
  group?: TargetIdentifier;
  targets?: TargetIdentifier | Array<TargetIdentifier>;
};
```

```typescript
type ArrangeableOptions = {
  defaultItemClass?: string;
  pickedItemClass?: string;
  listTransition?: TransitionGroupProps;
  hoverTransitionClass?: string;
  hoverClass?: string;
  homingEffect?: string | boolean;
  handle?: boolean | string;
};
```

## CSS classes used for defaults

These classes are shipped to be used as defaults:

```css
.arrangeable-list__transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.arrangeable-list__transition-all-but-location {
  transition-property: opacity, transform, box-shadow, background-color,
    border-color, color, fill, stroke, padding, margin;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.arrangeable-list__absolute {
  position: absolute;
}
.arrangeable-list__invisible {
  visibility: hidden;
}
.arrangeable-list__homing-effect {
  transition-property: all;
  top: var(--landingzone-top) !important;
  left: var(--landingzone-left) !important;
}
```

To include them in a project, add `vue-arrange` to the css section of the vue/nuxt config like this:

```js
  css: [
    //...
    'vue-arrange/dist/vue-arrange.css',
  ],
```

## **Example usage**

Simple example without typescript.

```vue
<script setup>
import { ref } from "vue";
import { ArrangeableList } from "vue-arrange";
const twColors = ref([
  { name: "red", color: "#fecaca" },
  { name: "orange", color: "#fed7aa" },
  { name: "amber", color: "#fde68a" },
  { name: "yellow", color: "#fef08a" },
]);

const dropItem = ({ destination }) => {
  twColors.value = destination.list;
};
</script>

<template>
  <ArrangeableList
    :list="twColors"
    :options="{
      hoverClass: 'hover',
    }"
    @drop-item="dropItem"
    v-slot="{ item }"
  >
    <div
      style="height: 40px;width: 160px;border-radius: 8px;"
      :style="item.color"
    >
      {{ item.name }}
    </div>
  </ArrangeableList>
</template>

<style>
.hover {
  opacity: 0.65;
}
</style>
```

See [example folder](./example/) for a complete example using typescript and tailwindcss.

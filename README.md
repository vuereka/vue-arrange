# Vue-arrange: Arrangeable lists for Vue3

Component library to drag and drop items across lists in Vue3. Try out [here](https://vuereka.github.io/vue-arrange/):

[![showcase](./video/showcase1.gif)](https://vuereka.github.io/vue-arrange/)

Comparable to, and inspired by, sortablejs, but unrelated.

Features:

- Rearranging a component list. Dragging/dropping items from one list to another.
- Fully customizable dragging element.
- Supports using a handle.
- Drop zones, e.g. for trash bin.
- Utility-class friendly
- Completely built in Typescript. Supports generic items.

## Usage

### To install

```
npm add vue-arrange
```

### To run the example app

- clone the package
- `npm i; npm run dev`

# Functional Description

## Component `ArrangeableList`

### **Props:**

- `list`: object[]. The elements in the list. Should be distinct objects, and not primitive types, to avoid messing up with duplicates.
- `name`: string/symbol. Optional. Needs to be unique between
  lists. Is to reference where things are coming from or going to.
- `group`: string/symbol. Optional. Within the same group of ArrangeableLists objects can be moved freely.
- `targets`: string/symbol/array of such. Optional. Lists which names/groups can receive items from this ArrangeableList.
- `options`:
  - `hoverClass`: string. Optional. The class/classes of the 'copied' item you drag with the pointer.
  - `pickedItemClass`: string. Optional. The class/classes of the item you are dragging as it shows in the lists before it is dropped.
  - `unpickedItemClass`: string. Optional. The class/classes of the items that are not being dragged.
  - `transitionName`: string. Optional. Under the hood this uses Vue TransitionGroups. Put the name of the class-prefix for the transition here. See <https://vuejs.org/guide/built-ins/transition-group.html#move-transitions>
  - `handle`: boolean. Optional, defaults to false. If true, only elements within the template with attribute `name` set to `handle` can be used to move the item.

### **Slots:**

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

### **Emits:**

- `liftItem`: fired when an item is being picked up out of this list. Payload: `MovingType`.
- `dropItem`: fired when an item from this is dropped somewhere. Payload: `Movingtype`.

### **Notes**

- The consumer needs to take care that the list prop gets stored/updated upon `dropItem` event, otherwise it the list will reset to its original position on the next re-render phase.
- Can be customized using options (see ArrangeableOptions below).
- class options can take any list of (utility) classes like they would be normally passed to a component. Tailwind works perfectly for example. They are empty by default.
- There is no default transition, this needs to be provided by the consumer.
- by default, items can only be moved within the same list.
  - By adding a `group` (see options below), items can be moved between different lists with the same group name.
  - By adding one or more `targets` (see options below), items can be made to move only to lists with `name` or `group` listed in `targets`.
- It can be used both by touch devices, mouse and any other type of pointer, as it uses PointerEvents. To be able to do this, it puts `touch-action: 'none'` css class on the entire document.

### **Example**

See [example folder](./example/) for working example using tailwindcss.

## Composable `useMovingItem<PayloadType>()`

Exposes:

- `movingItem`, of type `MovingItem<PayloadType>`; the item currently being dragged around by the user from any list at all. If using typescript, it should use the same `PayloadType` as the list items of the `ArrangeableList`.
- `isMoving(item: PayloadType) => boolean`; test whether `item` is currently being dragged.

```typescript
const { movingItem, isMoving } = useMovingItem<MyObjectType>();
```

## Type `MovingItem<PayloadType>`

Information about what is/was being dragged/dropped.

```typescript
type MovingItem<PayloadType> = {
  payload: PayloadType; // The item object being moved. PayloadType is a generic object
  hoverElement?: Ref<HTMLElement>; // the element ref of the hovering item.
  fromIndex: number; // the 0-based list-index where it was picked up.
  origin: string | symbol; // the name of the list from which it was picked up.
  originList: PayloadType[]; // the arranged items-list from where the item came as it appears now.
  toIndex?: number; // the 0-based list-index where the item is hovering or being dropped.
  destination?: string | symbol; // the name of the list where it is hovering over or being dropped.
  destinationList?: PayloadType[]; // the arranged items-list where the item is hovering over or being dropped as it appears now.
  originItemBoundingBox?: DOMRect; // the bounding box of the original location of the picked item.
  targets: Array<string | symbol>; // the names/groups of the lists where this item can be dropped.
};
```

## type `ArrangeableOptions`

options to pass to the arrangeable list.

```typescript
type ArrangeableOptions = {
  hoverClass?: string; // class or classes to place on the element that is being dragged by the user
  pickedItemClass?: string; // class or classes to place on the original of the element in the list that is being picked up. Typically: 'invisible' or something like this.
  unpickedItemClass?: string; // class or classes to place on the items that are _not_ being picked up
  listTransition?: TransitionProps; // Transition props for the list, dictating how moving, removing and adding items to the list looks. See: Vue TransitionGroup documentation.
  hoverTransition?: TransitionProps; // Transition props for the hovered element. See: Vue Transition docuemntation.
  handle?: boolean; // indicate if the elements should be only dragged using a handle. If so, any descendant elements with attribute: 'name="handle"' are used as a handle.
};
```

## type `ArrangeableProps<PayloadType`

props object for arrangeable list

```typescript
type ArrangeableProps<PayloadType> = {
  options?: ArrangeableOptions; // See above
  list: PayloadType[]; // items passed to the list. PayloadType is the generic object type used by ArrangeableList.
  name?: symbol | string; // unique name of the list. Defaults to an unnamed symbol. Advised is to use a named symbol.
  group?: string | symbol; // group of the list. Items can be arbitrarily moved across member lists of this group.
  targets?: string | symbol | Array<string | symbol>; // By supplying one or more targets, items from this list can only be moved to other groups/lists named in 'targets' (using the name/group).
};
```

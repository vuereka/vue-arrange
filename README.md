# Vue-arrange: Arrangeable lists for Vue3

Component library to drag and drop items across lists in Vue3.

Comparable to, and inspired by, sortablejs, but unrelated and not even trying to use the same API. Focused on vertical lists, but I guess it should work in any direction.

Features:

- Rearranging a component list.
- Dragging/dropping items from one list to another.
- Smooth transitions using `TransitionGroup`
- Fully customizable dragging element.
- Utility-class friendly
- Completely built in Typescript. Supports generic items.

![showcase](./video/showcase1.gif)

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

- It can be used both by touch devices, mouse and any other type of pointer, as it uses PointerEvents. To be able to do this, it puts `touch-action: 'none'` css class on the entire document.

- The consumer needs to take care that the list prop gets stored/updated upon `dropItem` event, otherwise it the list will reset to its original position on the next re-render phase.
- the class options can take any list of (utility) classes like they would be normally passed to a component. Tailwind works perfectly for example. They are empty by default.
- There is no default transition, this too needs to be provided by the consumer.

### **Example**

See [example folder](./example/) for working example using tailwindcss.

## Composable `useMovingItem<PayloadType>()`

Exposes:

- `movingItem`, of type `MovingItem<PayloadType>`; the item currently being dragged around by the user from any list at all. If using typescript, it should use the same `PayloadType` as the list items of the `ArrangeableList`.
- `isMoving(item: PayloadType) => boolean`; test whether `item` is currently being dragged.

```typescript
const { movingItem, isMoving } = useMovingItem<MyObjectType>();
```

## Type `MovingType<PayloadType>`

Information about what is/was being dragged/dropped.

```typescript
type MovingItem<PayloadType> = {
  payload: PayloadType; // The item object being moved
  fromIndex: number; // the 0-based list-index where it was picked up
  origin: string | symbol; // the name of the list from which it was picked up
  originList: PayloadType[]; // the arranged items-list from where the item came as it appears now.
  toIndex?: number; // the 0-based list-index where the item is hovering or being dropped.
  destination?: string | symbol; // the name of the list where it is hovering over or being dropped.
  destinationList?: PayloadType[]; // the arranged items-list where the item is hovering over or being dropped as it appears now.
  targets: Array<string | symbol>; // the names/groups of the lists where this item can be dropped.
};
```

import { Ref } from "vue";

export type DropTargetIdentifier = string | number | symbol;
export type DropTarget<PayloadType> = {
  identifier: DropTargetIdentifier;
  group?: DropTargetIdentifier;
  type: "list" | "dropzone";
  listItems?: PayloadType[];
  index?: number;
  meta?: any;
};

export type MovingItem<PayloadType> = {
  payload: PayloadType;
  hoverElement?: Ref<HTMLElement | undefined>;
  origin: DropTarget<PayloadType>;
  destination?: DropTarget<PayloadType>;
  dropTargets: Array<DropTargetIdentifier>;
  key: symbol;
};

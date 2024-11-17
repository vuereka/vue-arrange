import { Ref, TransitionGroupProps } from "vue";

export type ArrangeableOptions = {
  defaultItemClass?: string;
  pickedItemClass?: string;
  hoveredOverListClass?: string;
  listTransition?: TransitionGroupProps;
  hoverTransitionClass?: string;
  hoverClass?: string;
  homingEffect?: string | boolean;
  handle?: boolean | string;
  liftDelay?: number;
};

export type TargetIdentifier = string | number | symbol;
export type Target<PayloadType> = {
  identifier: TargetIdentifier;
  group?: TargetIdentifier;
  type: "list" | "dropzone";
  listItems?: PayloadType[];
  index?: number;
  meta?: unknown;
};

export type MovingItem<PayloadType> = {
  payload: PayloadType;
  hoverElement?: Ref<HTMLElement | undefined>;
  origin: Target<PayloadType>;
  destination?: Target<PayloadType>;
  dropTargets: Array<TargetIdentifier>;
  key: symbol;
};

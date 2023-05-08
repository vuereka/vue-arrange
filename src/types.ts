import { Ref } from "vue";

export type MovingItem<PayloadType> = {
  payload: PayloadType;
  hoverElement?: Ref<HTMLElement | undefined>;
  fromIndex: number;
  origin: string | symbol;
  originList: PayloadType[];
  toIndex?: number;
  destination?: string | symbol;
  destinationList?: PayloadType[];
  targets: Array<string | symbol>;
  originItemBoundingBox?: DOMRect;
  key: symbol;
};

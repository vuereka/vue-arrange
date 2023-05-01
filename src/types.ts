export type MovingItem<PayloadType> = {
  payload: PayloadType;
  fromIndex: number;
  origin: string | symbol;
  originList: PayloadType[];
  toIndex?: number;
  destination?: string | symbol;
  destinationList?: PayloadType[];
  targets: Array<string | symbol>;
  key: symbol;
};

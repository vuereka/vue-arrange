export type MovingItem<PayloadType> = {
  payload: PayloadType;
  fromIndex: number;
  origin: string | symbol;
  toIndex?: number;
  destination?: string | symbol;
  targets: Array<string | symbol>;
  key: symbol;
}

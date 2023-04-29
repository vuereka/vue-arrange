export interface iArrangeable<PayloadType> {
  payload: PayloadType;
  fromIndex: number;
  origin: string | symbol;
  toIndex?: number;
  destination?: string | symbol;
  targets: Array<string | symbol>;
  key: symbol;
}

export type DraggingType = iArrangeable<any>;

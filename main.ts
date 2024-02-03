enum EFieldType {
  ONE,
  TWO,
}

interface IMessage {
  id: string;
  text: string;
}

type TConfig<T extends EFieldType> = Record<
  keyof IMessage,
  { type: T } & (T extends EFieldType.ONE ? { info: string } : { text: string })
>;

type TCofig2<T> = { type: T } & (T extends EFieldType.ONE
  ? { info: string }
  : { text: string });

const Config2: TCofig2<EFieldType> = { type: EFieldType.ONE, text: "" };

const Config: TConfig = {
  id: {
    type: EFieldType.ONE,
    text: "",
  },
  text: {
    type: EFieldType.TWO,
    text: "",
  },
};

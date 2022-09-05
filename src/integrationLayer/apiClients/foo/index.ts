import { IAPIModule } from "../../../APIModule/interfaces";
import { IFooDTO } from "../../../fsd/shared/Models";
import { IFooApiClient } from "./interfaces";

export class FooApiClient implements IFooApiClient {
  constructor(protected apiModule: IAPIModule) {}

  getData = async (): Promise<IFooDTO> => {
    const dataMock: IFooDTO = { baz: "baz", bar: 1234 };
    return dataMock;
    // return this.apiModule.getData('data');
  };
}

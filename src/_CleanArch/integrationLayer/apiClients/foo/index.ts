import { IAPIModule } from "../../../intfrastructureLayer/APIModule/interfaces";
import { IFooDTO } from "../../../../shared/Models";
import { IFooApiClient } from "./interfaces";

export class FooApiClient implements IFooApiClient {
  constructor(protected apiModule: IAPIModule) {}

  getData = async (): Promise<IFooDTO> => {
    const dataMock: IFooDTO = { baz: "baz", bar: 1234 };
    return dataMock;
    // return this.apiModule.getData('data');
  };
}

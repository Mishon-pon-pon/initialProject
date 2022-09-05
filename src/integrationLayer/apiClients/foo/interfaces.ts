import { IFooDTO } from "../../../fsd/shared/Models";

export interface IFooApiClient {
  getData(): Promise<IFooDTO>;
}

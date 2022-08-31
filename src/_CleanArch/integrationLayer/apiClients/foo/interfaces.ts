import { IFooDTO } from "../../../../shared/Models";

export interface IFooApiClient {
  getData(): Promise<IFooDTO>;
}

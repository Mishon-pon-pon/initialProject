import { IFooDTO } from "../../../../shared/Models";

export interface IFooService {
  getData(): Promise<IFooDTO>;
}

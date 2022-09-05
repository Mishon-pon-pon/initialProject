import { IFooDTO } from "../../../fsd/shared/Models";

export interface IFooService {
  getData(): Promise<IFooDTO>;
}

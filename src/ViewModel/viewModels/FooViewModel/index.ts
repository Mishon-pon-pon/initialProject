import { action, makeObservable, observable } from "mobx";
import { IFooService } from "../../../bussinesLayer/services/Foo/interfaces";
import { IFooDTO } from "../../../fsd/shared/Models";

export interface IFooViewModel {
  data?: IFooDTO;
  getData(): Promise<IFooDTO>;
}

export class FooViewModel implements IFooViewModel {
  data?: IFooDTO;
  constructor(protected service: IFooService) {
    makeObservable(this, {
      data: observable,
      getData: action,
    });
  }

  getData = async (): Promise<IFooDTO> => {
    this.data = await this.service.getData();
    return this.data;
  };
}

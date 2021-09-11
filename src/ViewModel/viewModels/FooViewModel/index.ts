import {IFooService} from '../../../bussinesLayer/services/Foo/interfaces';
import {IFooDTO} from '../../../Models';

export interface IFooViewModel {
  getData(): Promise<IFooDTO>;
}

export class FooViewModel implements IFooViewModel {
  constructor(protected service: IFooService) {}

  getData = async (): Promise<IFooDTO> => {
    return this.service.getData();
  };
}

import {IAPIModule} from '../../../intfrastructureLayer/APIModule/interfaces';
import {IFooDTO} from '../../../Models';
import {IFooApiClient} from './interfaces';

export class FooApiClient implements IFooApiClient {
  constructor(protected apiModule: IAPIModule) {}
  getData = async (): Promise<IFooDTO> => {
    return this.apiModule.getData('/data');
  };
}

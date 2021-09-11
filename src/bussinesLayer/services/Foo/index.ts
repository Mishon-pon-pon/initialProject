import {IFooApiClient} from '../../../integrationLayer/apiClients/foo/interfaces';
import {IFooDTO} from '../../../Models';
import {IFooService} from './interfaces';

export class FooService implements IFooService {
  constructor(protected apiClient: IFooApiClient) {}
  getData = async (): Promise<IFooDTO> => {
    return this.apiClient.getData();
  };
}

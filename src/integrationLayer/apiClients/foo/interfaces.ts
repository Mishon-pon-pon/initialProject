import {IFooDTO} from '../../../Models';

export interface IFooApiClient {
  getData(): Promise<IFooDTO>;
}

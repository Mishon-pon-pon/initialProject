import {IFooDTO} from '../../../Models';

export interface IFooService {
  getData(): Promise<IFooDTO>;
}

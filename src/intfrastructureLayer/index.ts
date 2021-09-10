import {Container} from 'inversify';
import {APIModule} from './APIModule';
import {IAPIModule} from './APIModule/interfaces';

export const INTEGRATION_MODULE = {
  APIModule: Symbol.for('APIModule'),
};

export const integrationContainer = new Container();

const url = 'http://localhost:3005';

integrationContainer
  .bind<IAPIModule>(INTEGRATION_MODULE.APIModule)
  .toDynamicValue(({container}) => {
    return new APIModule(url);
  });

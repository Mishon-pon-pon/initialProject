import {Container} from 'inversify';
import {SERVICE} from '../bussinesLayer/serviceContainer';
import {IFooService} from '../bussinesLayer/services/Foo/interfaces';
import {FooViewModel, IFooViewModel} from './viewModels/FooViewModel';

export const VIEW_MODEL = {
  Foo: Symbol.for('FooViewModel'),
};

export const viewModelContainer = new Container();

viewModelContainer
  .bind<IFooViewModel>(VIEW_MODEL.Foo)
  .toDynamicValue(({container}) => {
    const service = container.get<IFooService>(SERVICE.FOO);
    return new FooViewModel(service);
  })
  .inSingletonScope();

import { Container } from "inversify";
import { SERVICE } from "../bussinesLayer/serviceContainer";
import { IFooService } from "../bussinesLayer/services/Foo/interfaces";
import {
  CounterViewModel,
  ICounterViewModel,
} from "./viewModels/CounterViewModel";
import { FooViewModel, IFooViewModel } from "./viewModels/FooViewModel";
import { IUserViewModel, UserViewModel } from "./viewModels/UserViewModel";

export const VIEW_MODEL = {
  Foo: Symbol.for("FooViewModel"),
  Counter: Symbol.for("CounterViewModel"),
  User: Symbol.for("UserViewModel"),
};

export const viewModelContainer = new Container();

viewModelContainer
  .bind<IFooViewModel>(VIEW_MODEL.Foo)
  .toDynamicValue(({ container }) => {
    const service = container.get<IFooService>(SERVICE.FOO);
    return new FooViewModel(service);
  })
  .inSingletonScope();

viewModelContainer
  .bind<ICounterViewModel>(VIEW_MODEL.Counter)
  .toDynamicValue(() => {
    return new CounterViewModel();
  })
  .inSingletonScope();

viewModelContainer
  .bind<IUserViewModel<any>>(VIEW_MODEL.User)
  .toDynamicValue(() => {
    return new UserViewModel();
  })
  .inSingletonScope();

import { Container } from "inversify";
import { IFooApiClient } from "../integrationLayer/apiClients/foo/interfaces";
import { API_CLIENT } from "../integrationLayer/integrationContainer";
import { FooService } from "./services/Foo";
import { IFooService } from "./services/Foo/interfaces";

export const SERVICE = {
  FOO: Symbol.for("FooService"),
};

export const serviceContainer = new Container();

serviceContainer
  .bind<IFooService>(SERVICE.FOO)
  .toDynamicValue(({ container }) => {
    const apiClient = container.get<IFooApiClient>(API_CLIENT.Foo);
    return new FooService(apiClient);
  });

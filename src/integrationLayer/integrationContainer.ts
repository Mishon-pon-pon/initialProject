import { Container } from "inversify";
import { INFRASTRUCTION_MODULE } from "../intfrastructureLayer";
import { IAPIModule } from "../APIModule/interfaces";
import { FooApiClient } from "./apiClients/foo";
import { IFooApiClient } from "./apiClients/foo/interfaces";

export const API_CLIENT = {
  Foo: Symbol.for("FooApiClient"),
};

export const apiClientsContainer = new Container();

apiClientsContainer
  .bind<IFooApiClient>(API_CLIENT.Foo)
  .toDynamicValue(({ container }) => {
    const apiModule = container.get<IAPIModule>(
      INFRASTRUCTION_MODULE.APIModule
    );
    return new FooApiClient(apiModule);
  });

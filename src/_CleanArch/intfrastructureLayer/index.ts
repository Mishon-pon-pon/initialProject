import { Container } from "inversify";
import { APIModule } from "./APIModule";
import { IAPIModule } from "./APIModule/interfaces";

export const INFRASTRUCTION_MODULE = {
  APIModule: Symbol.for("APIModule"),
};

export const integrationContainer = new Container();

const url = "http://localhost:3005";

integrationContainer
  .bind<IAPIModule>(INFRASTRUCTION_MODULE.APIModule)
  .toDynamicValue(() => {
    return new APIModule(url);
  });

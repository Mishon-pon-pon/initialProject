import {IAppConfig} from '../settings/AppConfigType';
import {Bootstrap} from '../../../Boostrap';
import {ConfigApp} from '../settings/ConfigApp';

export const init = async (): Promise<{
  bootstrap: Bootstrap;
  config: IAppConfig;
}> => {
  const bootstrap = new Bootstrap();
  await bootstrap.getDiContainer();

  const routes = ConfigApp.getRoutes();
  const routerConst = ConfigApp.getRouterConst();

  bootstrap.initRouter(routes, routerConst);
  return {bootstrap: bootstrap, config: ConfigApp};
};

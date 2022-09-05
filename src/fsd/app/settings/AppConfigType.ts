import {Route} from 'router5';

export interface IAppConfig {
  getRoutes(): Route[];
  getUI(): () => JSX.Element;
  getRouterConst(): any;
}

export class AppConfig implements IAppConfig {
  constructor(
    protected routes: Route[],
    protected ui: () => JSX.Element,
    protected routerConst: any
  ) {}

  getRoutes = (): Route[] => {
    return this.routes;
  };

  getUI = (): (() => JSX.Element) => {
    return this.ui;
  };

  getRouterConst = () => {
    return this.routerConst;
  };
}

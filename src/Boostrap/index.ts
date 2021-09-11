import createRouter5, {createRouter, Route, Router} from 'router5';
import {createDIContainer} from './CreateDIContainer';
import {interfaces} from 'inversify';
import {integrationContainer} from '../intfrastructureLayer';
import {serviceContainer} from '../bussinesLayer/serviceContainer';
import {viewModelContainer} from '../ViewModel/viewModelContainer';

export class Bootstrap {
  private diContainer: interfaces.Container;
  private router: Router;

  constructor() {
    this.router = createRouter5();
    this.diContainer = createDIContainer(
      integrationContainer,
      integrationContainer,
      serviceContainer,
      viewModelContainer
    );
  }

  initRouter = (routes: Route[], routerConst: any) => {
    this.router = createRouter(routes);
    this.router.setDependencies({container: this.diContainer});
    this.router.setDependencies({routerConst});
  };

  getDiContainer(): interfaces.Container {
    return this.diContainer;
  }

  getRouter(): Router {
    return this.router;
  }
}

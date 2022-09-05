import {interfaces} from 'inversify';

export const createDIContainer = (
  integrationModuleAndErrorContainer: interfaces.Container,
  apiClientContainer: interfaces.Container,
  serviceContainer: interfaces.Container,
  viewModelContainer: interfaces.Container
): interfaces.Container => {
  apiClientContainer.parent = integrationModuleAndErrorContainer;
  serviceContainer.parent = apiClientContainer;
  viewModelContainer.parent = serviceContainer;
  return viewModelContainer;
};

import MainContainer from '../../Containers/MainContainer';
import {AppConfig, IAppConfig} from './AppConfigType';
import {getPageMapFromSegmentCB} from './MapPage';
import {ROUTER_CONST} from './routerConst/RouterConstCB';
import {routes} from './routes/routes';

export const ConfigApp: IAppConfig = new AppConfig(
  routes,
  () => MainContainer(getPageMapFromSegmentCB),
  ROUTER_CONST
);

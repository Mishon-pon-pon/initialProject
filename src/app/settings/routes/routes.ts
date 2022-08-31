import { Router } from "router5";
import { Params } from "router5/dist/types/base";
import { RouterDependencies } from "../../routes/onEnter";
import { VIEW_MODEL } from "../../../shared/ViewModel/viewModelContainer";
import { IFooViewModel } from "../../../shared/ViewModel/viewModels/FooViewModel";
import { ROUTER_CONST } from "../routerConst/RouterConstCB";

export const routes = [
  {
    name: ROUTER_CONST.HOME.name,
    path: ROUTER_CONST.HOME.path,
    onEnter: (params: Params, router: Router<RouterDependencies>): void => {
      const container = router.getDependencies().container;
      const { getData } = container.get<IFooViewModel>(VIEW_MODEL.Foo);

      getData();
    },
  },
  {
    name: ROUTER_CONST.TEST.name,
    path: ROUTER_CONST.TEST.path,
  },
];

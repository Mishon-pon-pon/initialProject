import React from "react";
import { Home } from "../../pages/Home";
import { Test } from "../../pages/Test";
import { ROUTER_CONST } from "./routerConst/RouterConstCB";

export const getPageMapFromSegmentCB = (
  segment: string,
  path: string
): JSX.Element | null => {
  switch (segment) {
    case ROUTER_CONST.HOME.name:
      return <Home />;
    case ROUTER_CONST.TEST.name:
      return <Test />;
    default:
      return <div>home default</div>;
  }
};

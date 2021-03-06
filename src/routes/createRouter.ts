import createRouter, {Route, Router} from 'router5';
import browserPlugin from 'router5-plugin-browser';
import {onEnterMiddlewareFactory} from './onEnter';

export const _createRouter = (routes: Route[]): Router => {
  const router = createRouter(routes, {
    allowNotFound: true,
    queryParamsMode: 'loose',
    autoCleanUp: false,
  });

  router.useMiddleware(onEnterMiddlewareFactory(routes));

  router.usePlugin(
    browserPlugin({
      useHash: true,
    })
  );

  return router;
};

import React from 'react';
import {interfaces} from 'inversify';
import {RouterProvider} from 'react-router5';
import {Router} from 'router5';
import DIContainerProvider from '../../providers/DIContainerProvider';

export const render = (
  container: interfaces.Container,
  router: Router,
  App: () => JSX.Element
) => {
  return (
    <RouterProvider router={router}>
      <DIContainerProvider container={container}>
        <App />
      </DIContainerProvider>
    </RouterProvider>
  );
};

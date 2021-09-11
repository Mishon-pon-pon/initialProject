import React, {useEffect, useState} from 'react';
import {init} from './init';
import {render} from './render';

export const App = () => {
  const [app, setApp] = useState<JSX.Element>(<div>loading</div>);

  useEffect(() => {
    init()
      .then(({bootstrap, config}) => {
        const router = bootstrap.getRouter();
        const container = bootstrap.getDiContainer();
        const UI = config.getUI();
        router.start(() => {
          setApp(render(container, router, UI));
        });
      })
      .catch((err) => {
        setApp(<div>500</div>);
      });
  }, []);

  return app;
};

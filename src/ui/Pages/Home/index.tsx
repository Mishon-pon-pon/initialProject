import React from 'react';
import {observer} from 'mobx-react-lite';
import {VIEW_MODEL} from '../../../ViewModel/viewModelContainer';
import {IFooViewModel} from '../../../ViewModel/viewModels/FooViewModel';
import useViewModel from '../../hooks/useViewModel';

export const Home = observer(() => {
  const {data} = useViewModel<IFooViewModel>(VIEW_MODEL.Foo);
  console.log(data);
  return (
    <div>
      {data
        ? Object.keys(data).map((item) => {
            const foo = data[item as keyof typeof data];
            return <li>{foo}</li>;
          })
        : null}
    </div>
  );
});

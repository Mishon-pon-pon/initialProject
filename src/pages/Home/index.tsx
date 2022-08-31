import React from "react";
import { observer } from "mobx-react-lite";
import { VIEW_MODEL } from "../../shared/ViewModel/viewModelContainer";
import { IFooViewModel } from "../../shared/ViewModel/viewModels/FooViewModel";
import useViewModel from "../../shared/hooks/useViewModel";
import { ButtonsPanel } from "../../widgets/buttons-panel";

export const Home = observer(() => {
  const { data } = useViewModel<IFooViewModel>(VIEW_MODEL.Foo);
  console.log(data);
  return (
    <div>
      {data
        ? Object.keys(data).map((item, index) => {
            const foo = data[item as keyof typeof data];
            return <li key={index}>{foo}</li>;
          })
        : null}
      <ButtonsPanel />
    </div>
  );
});

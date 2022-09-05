import React from "react";
import { observer } from "mobx-react-lite";

import { ICounterViewModel } from "ViewModel/viewModels/CounterViewModel";
import { VIEW_MODEL } from "ViewModel/viewModelContainer";

import { Counter } from "fsd/entities/counter";
import { IncrementButton } from "fsd/featrures/counter";
import useViewModel from "fsd/shared/hooks/useViewModel";

export const CounterWidget = observer(() => {
  const { getCounter } = useViewModel<ICounterViewModel>(VIEW_MODEL.Counter);

  return (
    <div
      style={{
        border: "1px solid",
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        margin: "15px",
      }}
    >
      <h1>Счётчик(widget)</h1>
      <Counter data={getCounter()} />
      <span>
        <h2>Buttons</h2>
        <IncrementButton>
          <button onClick={() => {}}>Инкремент</button>
        </IncrementButton>
      </span>
    </div>
  );
});

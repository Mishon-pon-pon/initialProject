import React from "react";

import { ICounter } from "ViewModel/viewModels/CounterViewModel";

interface IProps {
  data: ICounter;
}

export const CounterEntity = (props: IProps) => {
  return (
    <section>
      <header>Счётчик(entity)</header>
      <main>{props.data.count}</main>
    </section>
  );
};

import React from "react";

import { ICounterViewModel } from "ViewModel/viewModels/CounterViewModel";
import { VIEW_MODEL } from "ViewModel/viewModelContainer";

import useViewModel from "fsd/shared/hooks/useViewModel";

interface IProps {
  children: JSX.Element;
}

export const IncrementButtonFeature = (props: IProps) => {
  const { increment } = useViewModel<ICounterViewModel>(VIEW_MODEL.Counter);

  return <div onClick={increment}>{props.children}</div>;

  // return <Button onClick={increment}>Increment(feature)</Button>;
};

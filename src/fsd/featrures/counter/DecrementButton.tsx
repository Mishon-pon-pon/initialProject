import { VIEW_MODEL } from "ViewModel/viewModelContainer";
import { ICounterViewModel } from "ViewModel/viewModels/CounterViewModel";

import useViewModel from "fsd/shared/hooks/useViewModel";

interface IProps {
  children: JSX.Element;
}
export const DecrementButtonFeature = (props: IProps) => {
  const { decrement } = useViewModel<ICounterViewModel>(VIEW_MODEL.Counter);
  return <div onClick={decrement}>{props.children}</div>;
};

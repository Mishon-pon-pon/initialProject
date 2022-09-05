import useViewModel from "fsd/shared/hooks/useViewModel";
import { Button } from "fsd/shared/ui/atoms/controls/button";
import { VIEW_MODEL } from "ViewModel/viewModelContainer";
import { ICounterViewModel } from "ViewModel/viewModels/CounterViewModel";

export const ClearButtonFeature = () => {
  const { clear } = useViewModel<ICounterViewModel>(VIEW_MODEL.Counter);
  return <Button onClick={clear}>Clear(featrue)</Button>;
};

import { UseFormHandleSubmit } from "react-hook-form";

import { IUser } from "fsd/shared/Models/User";
import useViewModel from "fsd/shared/hooks/useViewModel";
import { IUserViewModel } from "ViewModel/viewModels/UserViewModel";
import { VIEW_MODEL } from "ViewModel/viewModelContainer";
import { observer } from "mobx-react-lite";

interface IProps {
  text: string;
}

export const SaveUser = observer((props: IProps) => {
  const { submitHandler } = useViewModel<
    IUserViewModel<UseFormHandleSubmit<IUser>>
  >(VIEW_MODEL.User);
  const submit = submitHandler?.((data) => {
    alert(JSON.stringify(data));
  });
  return <button onClick={submit}>{props.text}</button>;
});

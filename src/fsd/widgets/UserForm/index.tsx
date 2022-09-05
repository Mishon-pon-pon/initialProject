import { UserForm } from "fsd/entities/user";
import { SaveUser } from "fsd/featrures/user";
import useViewModel from "fsd/shared/hooks/useViewModel";
import { IUser } from "fsd/shared/Models/User";
import { FormProvider, useForm, UseFormHandleSubmit } from "react-hook-form";
import { VIEW_MODEL } from "ViewModel/viewModelContainer";
import { IUserViewModel } from "ViewModel/viewModels/UserViewModel";

export const UserFormWidget = () => {
  const methods = useForm<IUser>({ mode: "onSubmit" });
  const { setSubmitHandler } = useViewModel<
    IUserViewModel<UseFormHandleSubmit<IUser>>
  >(VIEW_MODEL.User);

  setSubmitHandler(methods.handleSubmit);

  return (
    <div style={{ padding: "15px", border: "1px solid" }}>
      <h2>Форма</h2>
      <FormProvider {...methods}>
        <UserForm />
      </FormProvider>
      <SaveUser text="Сохранить" />
    </div>
  );
};

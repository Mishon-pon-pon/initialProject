import { useFormContext } from "react-hook-form";

import { IUser } from "fsd/shared/Models/User";

interface IProps {
  isEdit?: boolean;
}

export const UserForm = (props: IProps) => {
  const methods = useFormContext<IUser>();

  if (methods) {
    const {
      register,
      formState: { errors },
    } = methods;
    return (
      <form
        onSubmit={(e) => e.preventDefault()}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="name">Name</label>
          <input
            {...register("name", { required: true })}
            type="text"
            style={{ borderColor: `${errors.name ? "red" : "black"}` }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="surname">Surname</label>
          <input
            {...register("surname", { required: true })}
            style={{ borderColor: `${errors.surname ? "red" : "black"}` }}
            type="text"
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="age">Age</label>
          <input
            {...register("age", { required: true })}
            style={{ borderColor: `${errors.age ? "red" : "black"}` }}
            type="number"
          />
        </div>
      </form>
    );
  }
  return null;
};

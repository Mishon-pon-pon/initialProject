import React, { MouseEvent } from "react";

interface IButtonProps {
  children: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}
export const Button = (props: IButtonProps) => {
  return <button onClick={props.onClick}>{props.children}</button>;
};

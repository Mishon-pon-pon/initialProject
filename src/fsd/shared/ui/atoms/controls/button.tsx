import React, { MouseEvent, useState } from "react";

interface IButtonProps {
  children: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}
export const Button = (props: IButtonProps) => {
  return (
    <button onClick={props.onClick} data-testid="button">
      {props.children}
      hello
    </button>
  );
};

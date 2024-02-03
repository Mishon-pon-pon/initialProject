import React from "react";

interface IProps {
  children: string;
}

export const Viewer = ({ children }: IProps) => {
  return <span data-testid="viewer">{children}</span>;
};

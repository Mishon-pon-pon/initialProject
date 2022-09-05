import React from "react";

interface IProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: IProps) => {
  return <div style={{ display: "flex" }}>{children}</div>;
};

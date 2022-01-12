import React, { FC } from "react";
import { Navigation } from "../Navigation";

interface Props {
  children: JSX.Element;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Navigation />
      <div className="flex flex-col px-6 py-6">{children}</div>
    </div>
  );
};

export { Layout };

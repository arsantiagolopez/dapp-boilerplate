import React, { FC } from "react";
import { Logo } from "../Logo";

interface Props {}

const Navigation: FC<Props> = () => {
  return (
    <div className="flex items-center h-14 md:h-16 w-screen px-6 shadow-lg shadow-gray-100 ">
      <div className="relative aspect-square h-1/2 w-auto mr-3">
        <Logo />
      </div>
      <h1 className="text-lg">Boilerplate</h1>
    </div>
  );
};

export { Navigation };

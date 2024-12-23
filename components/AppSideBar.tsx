"use client";
import { Sidebar } from "./Sidebar";
import { Appbar } from "./AppBar";

import { ReactNode, useState } from "react";

interface AppSideBarProps {
  children: ReactNode;
}

export const AppSideBar = ({ children }: AppSideBarProps) => {
  const [isColapsed, setIsColapsed] = useState(false);
  return (
    <div>
      <Appbar title="My App123" setCollapsed={setIsColapsed} />
      <div className="flex-row flex relative top-14 drop-shadow-lg">
        <Sidebar isColapsed={isColapsed} />
        <div>{children}</div>
      </div>
    </div>
  );
};
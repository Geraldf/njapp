"use client";

import { ReactNode } from "react";
import { DesignLayout } from "@/app/designlayout";
import { AppMenuItems } from "@/app/AppMenuItems";

interface AppSideBarProps {
  children: ReactNode;
}

export const AppSideBar = ({ children }: AppSideBarProps) => {
  return (
    <DesignLayout MenuItems={AppMenuItems} userClassName="bg-cyan-400">
      {children}
    </DesignLayout>
    // <div>
    //   <Appbar title="My App123" setCollapsed={setIsColapsed} />
    //   <div className="flex-row flex relative top-14 drop-shadow-lg">
    //     <Sidebar isColapsed={isColapsed} />
    //     <div>{children}</div>
    //   </div>
    // </div>
  );
};

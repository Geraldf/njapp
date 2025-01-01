"use client";

import { ReactNode } from "react";
import { DesignLayout } from "@/components/designlayout";
import { AppMenuItems } from "@/app/AppMenuItems";

interface AppSideBarProps {
  children: ReactNode;
}

export const AppSideBar = ({ children }: AppSideBarProps) => {
  return (
    <DesignLayout MenuItems={AppMenuItems} userClassName="bg-cyan-400">
      {children}
    </DesignLayout>
   
  );
};

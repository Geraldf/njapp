"use client";
import { IAppbarProps } from "@/components/AppBar";
import { ISidebarProps } from "@/components/Sidebar";
import { Toggle } from "@/components/ui/toggle";
import React, { useState } from "react";
import { Menu, SquareMenu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ILayoutProps {
  sitebar?: ISidebarProps;
  appbar?: IAppbarProps;
}

export const DesignLayout = () => {
  const [isColapsed, setIsColapsed] = useState(false);
  const toogle = () => {
    console.log(isColapsed);
    setIsColapsed(!isColapsed);
  };
  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed App Bar */}
      <header className="h-16 bg-white border-b flex items-center px-4 fixed top-0 left-0 right-0 z-50">
        <Button
          variant={"ghost"}
          className="p-2 rounded focus:outline-none"
          onClick={toogle}
        >
          {isColapsed ? <Menu /> : <SquareMenu />}
        </Button>
        <h1 className="text-xl font-semibold">App Name</h1>
      </header>

      {/* Main container with offset for fixed header */}
      <div className="flex pt-16 h-screen">
        {/* Sidebar with independent scroll */}
        <aside
          className={`${
            isColapsed ? "w-16" : "w-64"
          } bg-gray-50 border-r fixed left-0 top-16 bottom-0 overflow-y-auto transition-width duration-300`}
        >
          <nav className="p-4">
            <ul className="space-y-2">
              {Array.from({ length: 20 }).map((_, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-gray-100 rounded cursor-pointer"
                >
                  Menu Item {index + 1}
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content with independent scroll and offset for sidebar */}
        <main className="ml-64 flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4">Main Content</h2>
            {Array.from({ length: 20 }).map((_, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-lg font-semibold mb-2">
                  Section {index + 1}
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris.
                </p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

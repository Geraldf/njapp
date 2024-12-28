"use client";
import React, { ReactNode, useState } from "react";
import { Menu, SquareMenu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

/**
 * Interface for the layout properties.
 */
interface ILayoutProps {
  /** The children nodes to be rendered within the layout. */
  children?: ReactNode;
  /** Array of menu items to be displayed in the sidebar. */
  MenuItems: iMenuItems[];
  userClassName?: string;
}

/**
 * Interface for the menu items.
 */
export interface iMenuItems {
  /** The name of the menu item. */
  name: string;
  /** The link URL for the menu item. */
  link: string;
  /** The icon component for the menu item. */
  icon: React.FC<{ className?: string }>;
}

/**
 * The DesignLayout component provides a layout with a fixed header, collapsible sidebar, and main content area.
 * @param {ILayoutProps} props - The properties for the layout component.
 * @returns {JSX.Element} The rendered layout component.
 */
export const DesignLayout = ({
  children,
  MenuItems,
  userClassName,
}: ILayoutProps): JSX.Element => {
  const [isColapsed, setIsColapsed] = useState(false);

  /**
   * Toggles the collapsed state of the sidebar.
   */
  const toogle = () => {
    console.log(isColapsed);
    setIsColapsed(!isColapsed);
  };
  const classes = twMerge(`h-16 bg-white border-b flex items-center px-4 fixed top-0 left-0 right-0 z-50 ${userClassName }`);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed App Bar */}
      <header
        className={classes}
      >
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
          <nav>
            <ul>
              {MenuItems.map((item, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-gray-100 rounded cursor-pointer flex "
                >
                  <Link
                    className="flex items-center space-x-2"
                    href={item.link}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content with independent scroll and offset for sidebar */}
        <main
          className={`${
            isColapsed ? "ml-16" : "ml-64"
          } flex-1 overflow-y-auto transition-all duration-300`}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

"use client";
import React, { ReactNode, useState } from "react";
import { ChevronRight, Menu, SquareMenu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { usePathname } from 'next/navigation'

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
  link?: string;
  /** The icon component for the menu item. */
  icon?: React.FC<{ className?: string }>;
}

const MenuItem = ({ item, segment, collapsed, children = null }) => {
  const [isHovered, setIsHovered] = useState(false);
  // Inside you client component
  

  if (item.link) {
    return (
      <Link
        className={segment === item.link ? 'text-primary font-semibold' : 'text-muted-foreground'}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)} href={item.link}    >
        <div className="flex items-center  px-1 py-2 hover:bg-gray-100 cursor-pointer">
          {item.icon && <item.icon className="w-4 h-4 mr-2" />}
         {!collapsed && <span>{item.name}</span>}
          {children && <ChevronRight className="w-4 h-4 ml-2" />}
        </div>
        {children && isHovered && (
          <div className="absolute left-full top-0 bg-white shadow-lg rounded-md min-w-[200px] border border-gray-200">
        {children}
          </div>
        )}
      </Link>
    );
  } else {
    return (
      <div >
        
        <hr className="h-px bg-gray-900 border-0 rounded  dark:bg-black-900"></hr>
      </div>
    );
  }
};



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
    //console.log(isColapsed);
    setIsColapsed(!isColapsed);
  };
  const classes = twMerge(`h-16 bg-white border-b flex items-center px-4 fixed top-0 left-0 right-0 z-50 ${userClassName }`);
  const segment =  usePathname()
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
        <h1 className="text-xl font-semibold">App Name123</h1>
      </header>

      {/* Main container with offset for fixed header */}
      <div className="flex pt-16 h-screen">
        {/* Sidebar with independent scroll */}
        <aside
          className={`${
            isColapsed ? "w-8" : "w-64"
          } bg-gray-50 border-r fixed left-0 top-16 bottom-0 overflow-y-auto transition-width duration-300`}
        >
          <nav>
            <ul>
              {MenuItems.map((item, index) => (
                <li key={index}>
                  <MenuItem item={item} segment={segment} collapsed={isColapsed}/>
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

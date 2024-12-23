import React from "react";
import Link from "next/link";
import { Home, Info, Mail } from "lucide-react";

export const Sidebar = ({ isColapsed }: { isColapsed: boolean }) => {
  return (
    <aside
      className={`bg-gray-800 text-white sticky top-14 h-[calc(100vh-theme(spacing.16))] w-40 overflow-y-auto ${
        isColapsed ? "w-20" : "w-64"
      } transition-width duration-300`}
    >
      <h2
        className={`text-xl font-bold mb-4 ${isColapsed ? "hidden" : "block"}`}
      >
        Sidebar
      </h2>
      <ul className="space-y-4">
        <li className="flex items-center">
          <Link
            href="/"
            className="flex items-center space-x-2 hover:text-teal-400 transition-colors duration-200"
          >
            <Home size={20} />
            <span className={`${isColapsed ? "hidden" : "block"}`}>Home</span>
          </Link>
        </li>
        <li className="flex items-center">
          <Link
            href="/about"
            className="flex items-center space-x-2 hover:text-teal-400 transition-colors duration-200"
          >
            <Info size={20} />
            <span className={`${isColapsed ? "hidden" : "block"}`}>About</span>
          </Link>
        </li>
        <li className="flex items-center">
          <Link
            href="/contact"
            className="flex items-center space-x-2 hover:text-teal-400 transition-colors duration-200"
          >
            <Mail size={20} />
            <span className={`${isColapsed ? "hidden" : "block"}`}>
              Contact
            </span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

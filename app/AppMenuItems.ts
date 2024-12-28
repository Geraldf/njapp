import { iMenuItems } from "./designlayout";
import { Home, Info, Mail } from "lucide-react";

export const AppMenuItems: iMenuItems[] = [
  {
    name: "Home",
    link: "/",
    icon: Home,
  },
  {
    name: "About",
    link: "/about",
    icon: Info,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: Mail,
  },
];

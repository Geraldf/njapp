"use Client";
import { Menu } from "lucide-react";
import { Toggle } from "./ui/toggle";
interface IProps {
  title: string;
  setCollapsed: (isCollapsed: boolean) => void;
}

export const Appbar: React.FC<IProps> = ({ title, setCollapsed }) => {
  const toogle = (isCollapsed: boolean) => {
    //console.log(isCollapsed);
    setCollapsed(isCollapsed);
  };
  return (
    <>
      <div className="bg-teal-500 text-white p-2 top-0 w-full grow fixed space-between">
        <div className="container flex flex-col lg:flex-row justify-between items-center">
          <div className="flex items-center space-x-4">
            <Toggle
              className="p-2 rounded hover:bg-teal-600 focus:outline-none"
              onPressedChange={toogle}
            >
              <Menu />
            </Toggle>
            <div className="font-bold">{title}</div>
          </div>

          <div>sdfdgfd</div>
        </div>
      </div>
    </>
  );
};

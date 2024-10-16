import { VerticalArrowIcon } from "./icons";
import { ReactNode, useState } from "react";
import SidebarSubItem from "./SidebarSubItem";

type SidebarItemProps = {
  subItems?: string[];
  children: ReactNode;
};

export default function SidebarItem({ subItems, children }: SidebarItemProps) {
  const [expandedItem, setExpandedItem] = useState<ReactNode | null>(null);
  const isExpanded = expandedItem === children;

  const handleExpand = () => {
    setExpandedItem((prev) => (prev === children ? null : children));
  };

  return (
    <li className="flex flex-col gap-6">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={handleExpand}
      >
        <a href="#">{children}</a>
        <VerticalArrowIcon
          pathClassName="fill-complementary-600"
          className={`size-6 ${
            expandedItem === children ? "rotate-180" : ""
          } transition-all duration-150`}
        />
      </div>
      <ul
        className={`flex flex-col gap-6 overflow-hidden transition-all duration-500 ${
          isExpanded ? "max-h-full" : "max-h-0"
        } `}
      >
        {isExpanded &&
          subItems?.map((subItem) => (
            <SidebarSubItem key={subItem}>{subItem}</SidebarSubItem>
          ))}
      </ul>
    </li>
  );
}

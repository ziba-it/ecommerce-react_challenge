import { ArrowIcon } from "../icons";
import { ReactNode, useState } from "react";
import SidebarSubItem from "./SidebarSubItem";
import { MenuItem } from "../../types";
import { cn } from "../../utils/cn";

type SidebarItemProps = {
  children: ReactNode;
  handleOpenSubMenu: (menuItem: MenuItem) => void;
  item: MenuItem;
  expandedMenuItem?: MenuItem | null;
};

export default function SidebarItem({
  handleOpenSubMenu,
  children,
  item,
  expandedMenuItem,
}: SidebarItemProps) {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleExpand = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
      setIsSubMenuOpen((prev) => !prev);
    } else if (item.children) {
      handleOpenSubMenu(item);
    }
  };

  const renderSubMenu = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768 && item.children) {
      return item.children.map(({ title }) => (
        <SidebarSubItem key={title}>{title}</SidebarSubItem>
      ));
    }
    return null;
  };

  const isExpanded =
    isSubMenuOpen ||
    (expandedMenuItem && expandedMenuItem.title === item.title);

  return (
    <li className="flex flex-col gap-6 h-full">
      <div
        className="flex items-center justify-between cursor-pointer w-full md:py-2 md:px-2 hover:brightness-110"
        onClick={handleExpand}
      >
        <a href="#">{children}</a>
        <ArrowIcon
          pathClassName="fill-complementary-600"
          className={cn("size-6 md:-rotate-90 transition-all duration-300", {
            "rotate-180 md:rotate-90": isExpanded,
          })}
        />
      </div>
      <ul
        className={cn(
          "flex flex-col gap-6 transition-all duration-500 overflow-hidden opacity-0 max-h-0",
          {
            "opacity-100 max-h-[600px]": isExpanded,
          }
        )}
      >
        {renderSubMenu()}
      </ul>
    </li>
  );
}

import { ArrowIcon } from "../icons";
import { ReactNode, useState } from "react";
import SidebarSubItem from "./SidebarSubItem";
import { SubMenuItem, MenuItem } from "../../types";

type SidebarItemProps = {
  subMenuItems?: SubMenuItem[];
  children: ReactNode;
  handleOpenSubMenu: (menuItem: MenuItem) => void;
  item: MenuItem;
  expandedMenuItem?: MenuItem | null;
};

export default function SidebarItem({
  subMenuItems,
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
    } else if (item.subMenuItems) {
      handleOpenSubMenu(item);
    }
  };

  const renderSubMenu = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768 && isSubMenuOpen && subMenuItems) {
      return (
        <ul className="flex flex-col gap-6 transition-all duration-500">
          {subMenuItems.map(({ title }) => (
            <SidebarSubItem key={title}>{title}</SidebarSubItem>
          ))}
        </ul>
      );
    }
    return null;
  };

  const isExpanded =
    isSubMenuOpen ||
    (expandedMenuItem && expandedMenuItem.title === item.title);

  return (
    <li className="flex flex-col gap-6">
      <div
        className={`flex items-center justify-between cursor-pointer w-full md:py-2 md:px-2 hover:brightness-110 ${
          isExpanded &&
          "md:border-2 md:border-complementary-100 md:rounded-full"
        }`}
        onClick={handleExpand}
      >
        <a href="#">{children}</a>
        <ArrowIcon
          pathClassName="fill-complementary-600"
          className={`size-6 md:-rotate-90 transition-all duration-300 ${
            isExpanded ? "rotate-180 md:rotate-90" : ""
          }`}
        />
      </div>
      {renderSubMenu()}
    </li>
  );
}

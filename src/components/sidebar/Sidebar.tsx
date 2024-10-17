import SidebarMenu from "./SidebarMenu";
import { MouseEventHandler, useState } from "react";
import { MenuItem } from "../../types";
import { cn } from "../../utils/cn";

type SidebarProps = {
  handleOpenSidebar: MouseEventHandler<HTMLButtonElement>;
  isOpen: boolean;
};

const menuItems: MenuItem[] = [
  { title: "New In" },
  {
    title: "Clothing",
    children: [
      { title: "New In" },
      { title: "See all" },
      { title: "Coats" },
      { title: "Beach clothes" },
      { title: "Sweaters & hoodies" },
      { title: "Shirts" },
      { title: "Jeans and pants" },
      { title: "T-shirts" },
      { title: "Shorts" },
      { title: "Underwear" },
      { title: "SALE" },
    ],
  },
  { title: "Footwear" },
  { title: "Accessories" },
  { title: "SALE" },
];

export default function Sidebar({ handleOpenSidebar, isOpen }: SidebarProps) {
  const [expandedMenuItem, setExpandedMenuItem] = useState<MenuItem | null>(
    null
  );

  const handleOpenSubMenu = (menuItem: MenuItem) => {
    setExpandedMenuItem((prev) =>
      prev?.title === menuItem.title ? null : menuItem
    );
  };

  const renderSubMenu = () => {
    if (expandedMenuItem?.children) {
      return (
        <SidebarMenu
          handleOpenSidebar={handleOpenSidebar}
          handleOpenSubMenu={handleOpenSubMenu}
          menuItems={expandedMenuItem.children}
          showCloseButton={false}
          isSubMenu
        />
      );
    }
    return null;
  };

  return (
    <div
      className={cn(
        "flex fixed w-full h-full md:backdrop-brightness-50 z-30 pointer-events-none transition-all duration-300 opacity-0",
        {
          "opacity-100 pointer-events-auto": isOpen,
        }
      )}
    >
      <div className="w-full flex">
        <SidebarMenu
          handleOpenSidebar={handleOpenSidebar}
          handleOpenSubMenu={handleOpenSubMenu}
          menuItems={menuItems}
          showCloseButton
          expandedMenuItem={expandedMenuItem}
        />
        {renderSubMenu()}
      </div>
    </div>
  );
}

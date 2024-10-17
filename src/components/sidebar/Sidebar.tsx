import SidebarMenu from "./SidebarMenu";
import { MouseEventHandler, useState } from "react";
import { MenuItem } from "../../types";

type SidebarProps = {
  handleOpenSidebar: MouseEventHandler<HTMLButtonElement>;
  isSidebarOpen: boolean;
};

const menuItems: MenuItem[] = [
  { title: "New In" },
  {
    title: "Clothing",
    subMenuItems: [
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

export default function Sidebar({
  handleOpenSidebar,
  isSidebarOpen,
}: SidebarProps) {
  const [expandedMenuItem, setExpandedMenuItem] = useState<MenuItem | null>(
    null
  );

  const handleOpenSubMenu = (menuItem: MenuItem) => {
    setExpandedMenuItem((prev) =>
      prev?.title === menuItem.title ? null : menuItem
    );
  };

  const renderSubMenu = () => {
    if (
      expandedMenuItem?.subMenuItems &&
      expandedMenuItem.subMenuItems.length > 0
    ) {
      return (
        <SidebarMenu
          handleOpenSidebar={handleOpenSidebar}
          handleOpenSubMenu={handleOpenSubMenu}
          menuItems={expandedMenuItem.subMenuItems}
          showCloseButton={false}
          isSubMenu
        />
      );
    }
    return null;
  };

  return (
    <div
      className={`flex fixed w-full h-full opacity-0 md:backdrop-brightness-50 z-30 pointer-events-none transition-all duration-300 ${
        isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0"
      }`}
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

import SidebarItem from "./SidebarItem";
import { CloseIcon } from "../icons";
import { MouseEventHandler } from "react";
import { MenuItem } from "../../types";

type SidebarMenuProps = {
  menuItems: MenuItem[];
  handleOpenSidebar: MouseEventHandler<HTMLButtonElement>;
  handleOpenSubMenu: (menuItem: MenuItem) => void;
  showCloseButton: boolean;
  expandedMenuItem?: MenuItem | null;
  isSubMenu?: boolean;
};

export default function SidebarMenu({
  handleOpenSidebar,
  handleOpenSubMenu,
  menuItems,
  showCloseButton,
  expandedMenuItem,
  isSubMenu,
}: SidebarMenuProps) {
  return (
    <div
      className={`flex flex-col h-full w-3/5 md:w-2/6 lg:w-3/12 bg-primary-50 shadow-lg py-14 px-12 gap-9 overflow-auto ${
        isSubMenu ? "z-40" : "z-50"
      }`}
    >
      <button onClick={handleOpenSidebar}>
        <CloseIcon
          className={`size-6 ${!showCloseButton && "invisible"}`}
          pathClassName={"fill-complementary-600"}
        />
      </button>
      <ul className="text-complementary-600 font-manrope font-semibold flex flex-col gap-10">
        {menuItems.map((item) => (
          <SidebarItem
            key={item.title}
            subMenuItems={item.subMenuItems}
            item={item}
            handleOpenSubMenu={handleOpenSubMenu}
            expandedMenuItem={expandedMenuItem}
          >
            {item.title}
          </SidebarItem>
        ))}
      </ul>
    </div>
  );
}

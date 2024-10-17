import SidebarItem from "./SidebarItem";
import { CloseIcon } from "../icons";
import { MouseEventHandler } from "react";
import { MenuItem } from "../../types";
import { cn } from "../../utils/cn";

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
      className={cn(
        "flex flex-col h-full w-3/5 md:w-2/6 lg:w-3/12 bg-primary-50 shadow-lg py-14 px-12 gap-9 overflow-auto z-50",
        {
          "z-40": isSubMenu,
        }
      )}
    >
      <button onClick={handleOpenSidebar}>
        <CloseIcon
          className={cn("size-6", { invisible: !showCloseButton })}
          pathClassName={"fill-complementary-600"}
        />
      </button>
      <ul className="text-complementary-600 font-manrope font-semibold flex flex-col gap-10">
        {menuItems.map((item) => (
          <SidebarItem
            key={item.title}
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

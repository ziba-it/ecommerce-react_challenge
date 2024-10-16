import { CloseIcon } from "./icons";
import SidebarItem from "./SidebarItem";
import { MouseEventHandler } from "react";

type SidebarProps = {
  handleOpen: MouseEventHandler<HTMLButtonElement>;
  isSidebarOpen: boolean;
};

const clothingItems = [
  "New In",
  "See all",
  "Coats",
  "Beach clothes",
  "Sweaters & hoodies",
  "Shirts",
  "Jeans and pants",
  "T-shirts",
  "Shorts",
  "Underwear",
  "SALE",
];

export default function Sidebar({ handleOpen, isSidebarOpen }: SidebarProps) {
  return (
    <aside
      className={`flex flex-col fixed h-full w-3/5 bg-primary-50 shadow-lg z-50 py-14 px-12 gap-9 opacity-0 pointer-events-none overflow-auto transition-all duration-300 ${
        isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0"
      }`}
    >
      <button onClick={handleOpen}>
        <CloseIcon className="size-6" pathClassName="fill-complementary-600" />
      </button>
      <ul className="text-complementary-600 text-lg font-manrope font-semibold flex flex-col gap-9">
        <SidebarItem>New In</SidebarItem>
        <SidebarItem subItems={clothingItems}>Clothing</SidebarItem>
        <SidebarItem>Footwear</SidebarItem>
        <SidebarItem>Accessories</SidebarItem>
        <SidebarItem>SALE</SidebarItem>
      </ul>
    </aside>
  );
}

import { ReactNode } from "react";

type SidebarSubItemProps = {
  children: ReactNode;
};

export const SidebarSubItem = ({ children }: SidebarSubItemProps) => {
  return (
    <li>
      <a className="text-primary-800" href="#">
        {children}
      </a>
    </li>
  );
};

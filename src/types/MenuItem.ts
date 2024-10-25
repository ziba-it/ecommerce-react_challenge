import { SubMenuItem } from "./SubMenuItem";

export type MenuItem = {
  title: string;
  children?: SubMenuItem[];
};

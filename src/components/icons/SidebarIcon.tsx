import { IconProps } from "../../types";

export const SidebarIcon = ({
  pathClassName,
  rectClassName,
  ...props
}: IconProps) => {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="1"
        y="1"
        width="42"
        height="42"
        rx="21"
        stroke-width="2"
        className={rectClassName}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.2917 17.8333C29.2917 18.1785 29.0118 18.4583 28.6667 18.4583L15.3333 18.4583C14.9882 18.4583 14.7083 18.1785 14.7083 17.8333C14.7083 17.4882 14.9882 17.2083 15.3333 17.2083L28.6667 17.2083C29.0118 17.2083 29.2917 17.4882 29.2917 17.8333Z"
        className={pathClassName}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.2917 22C29.2917 22.3452 29.0118 22.625 28.6667 22.625L15.3333 22.625C14.9882 22.625 14.7083 22.3452 14.7083 22C14.7083 21.6548 14.9882 21.375 15.3333 21.375L28.6667 21.375C29.0118 21.375 29.2917 21.6548 29.2917 22Z"
        className={pathClassName}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.2917 26.1667C29.2917 26.5118 29.0118 26.7917 28.6667 26.7917L15.3333 26.7917C14.9882 26.7917 14.7083 26.5118 14.7083 26.1667C14.7083 25.8215 14.9882 25.5417 15.3333 25.5417L28.6667 25.5417C29.0118 25.5417 29.2917 25.8215 29.2917 26.1667Z"
        className={pathClassName}
      />
    </svg>
  );
};

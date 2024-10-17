import { IconProps } from "../../types";

export const ArrowIcon = ({ pathClassName, ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.6921 7.09325C3.91674 6.83117 4.3113 6.80082 4.57338 7.02546L9.99997 11.6768L15.4266 7.02546C15.6886 6.80082 16.0832 6.83117 16.3078 7.09325C16.5325 7.35533 16.5021 7.74989 16.24 7.97453L10.4067 12.9745C10.1727 13.1752 9.82728 13.1752 9.59323 12.9745L3.75989 7.97453C3.49781 7.74989 3.46746 7.35533 3.6921 7.09325Z"
        className={pathClassName}
      />
    </svg>
  );
};

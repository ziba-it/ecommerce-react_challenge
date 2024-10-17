import { IconProps } from "../../types";

export const CloseIcon = ({ pathClassName, ...props }: IconProps) => {
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
        d="M8.35854 7.47472C8.11447 7.23064 7.71874 7.23064 7.47466 7.47472C7.23058 7.71879 7.23058 8.11452 7.47466 8.3586L9.11606 10L7.47468 11.6414C7.2306 11.8855 7.2306 12.2812 7.47468 12.5253C7.71875 12.7693 8.11448 12.7693 8.35856 12.5253L9.99994 10.8839L11.6413 12.5253C11.8854 12.7693 12.2811 12.7693 12.5252 12.5253C12.7693 12.2812 12.7693 11.8854 12.5252 11.6414L10.8838 10L12.5252 8.35862C12.7693 8.11454 12.7693 7.71881 12.5252 7.47473C12.2811 7.23066 11.8854 7.23066 11.6413 7.47473L9.99994 9.11612L8.35854 7.47472Z"
        className={pathClassName}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.99996 1.04167C5.05241 1.04167 1.04163 5.05245 1.04163 10C1.04163 14.9476 5.05241 18.9583 9.99996 18.9583C14.9475 18.9583 18.9583 14.9476 18.9583 10C18.9583 5.05245 14.9475 1.04167 9.99996 1.04167ZM2.29163 10C2.29163 5.74281 5.74276 2.29167 9.99996 2.29167C14.2572 2.29167 17.7083 5.74281 17.7083 10C17.7083 14.2572 14.2572 17.7083 9.99996 17.7083C5.74276 17.7083 2.29163 14.2572 2.29163 10Z"
        className={pathClassName}
      />
    </svg>
  );
};

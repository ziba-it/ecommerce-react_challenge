import { IconProps } from "../../types";

type HeartIconProps = {
  isFav: boolean;
} & IconProps;

export const HeartIcon = ({
  pathClassName,
  isFav,
  ...props
}: HeartIconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        className={pathClassName}
        fill-rule={isFav ? "" : "evenodd"}
        clip-rule="evenodd"
        d="M4.68695 3.68682C3.30446 4.31876 2.29166 5.82185 2.29166 7.61424C2.29166 9.4454 3.041 10.8569 4.11523 12.0665C5.00059 13.0634 6.07235 13.8897 7.11759 14.6955C7.36585 14.8869 7.61261 15.0771 7.85503 15.2682C8.29339 15.6138 8.68442 15.9171 9.06133 16.1373C9.43844 16.3577 9.74199 16.4583 9.99999 16.4583C10.258 16.4583 10.5615 16.3577 10.9386 16.1373C11.3156 15.9171 11.7066 15.6138 12.145 15.2682C12.3874 15.0771 12.6341 14.8869 12.8824 14.6955C13.9276 13.8897 14.9994 13.0634 15.8848 12.0665C16.959 10.8569 17.7083 9.4454 17.7083 7.61424C17.7083 5.82185 16.6955 4.31876 15.313 3.68682C13.9699 3.07288 12.1653 3.23547 10.4503 5.01727C10.3325 5.13968 10.1699 5.20885 9.99999 5.20885C9.83009 5.20885 9.66751 5.13968 9.54969 5.01727C7.83471 3.23547 6.03005 3.07288 4.68695 3.68682ZM9.99999 3.71567C8.07328 1.99186 5.91579 1.75071 4.16729 2.54995C2.32058 3.39409 1.04166 5.35418 1.04166 7.61424C1.04166 9.83551 1.96707 11.53 3.18059 12.8965C4.15238 13.9908 5.34184 14.9066 6.39234 15.7155C6.63048 15.8988 6.86147 16.0767 7.08117 16.2499C7.50804 16.5864 7.96628 16.9452 8.43068 17.2166C8.89487 17.4878 9.42466 17.7083 9.99999 17.7083C10.5753 17.7083 11.1051 17.4878 11.5693 17.2166C12.0337 16.9452 12.4919 16.5864 12.9188 16.2499C13.1385 16.0767 13.3695 15.8988 13.6076 15.7155C14.6581 14.9066 15.8476 13.9908 16.8194 12.8965C18.0329 11.53 18.9583 9.83551 18.9583 7.61424C18.9583 5.35418 17.6794 3.39409 15.8327 2.54995C14.0842 1.75071 11.9267 1.99186 9.99999 3.71567Z"
      />
    </svg>
  );
};

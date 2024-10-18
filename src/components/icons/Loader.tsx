import { IconProps } from "../../types";

export const Loader = ({
  circleClassName,
  pathClassName,
  rectClassName,
  ...props
}: IconProps) => {
  return (
    <svg
      viewBox="0 0 168 168"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_220_23711)">
        <circle
          cx="84.1917"
          cy="83.6918"
          r="60.7485"
          transform="rotate(-15 84.1917 83.6918)"
          className={circleClassName}
          stroke-width="14.9207"
        />
        <path
          d="M68.5267 25.2294C67.4284 21.1302 69.8599 16.8708 74.0566 16.2402C83.8934 14.7621 93.9671 15.4492 103.564 18.2919C115.625 21.8646 126.464 28.7031 134.881 38.0512C143.298 47.3994 148.966 58.8932 151.258 71.2618C153.082 81.1033 152.713 91.1936 150.214 100.822C149.149 104.93 144.658 106.903 140.696 105.382C136.734 103.861 134.815 99.4203 135.746 95.2798C137.308 88.333 137.455 81.1152 136.148 74.0624C134.372 64.4806 129.981 55.5765 123.46 48.3345C116.939 41.0926 108.543 35.7949 99.1993 33.0272C92.3217 30.9899 85.1281 30.3818 78.0561 31.2086C73.841 31.7013 69.6251 29.3286 68.5267 25.2294Z"
          className={pathClassName}
        />
      </g>
      <defs>
        <clipPath id="clip0_220_23711">
          <rect
            width="167.077"
            height="167.077"
            className={rectClassName}
            transform="translate(0.65332 0.153458)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

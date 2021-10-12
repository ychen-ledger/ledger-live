import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function StarLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.64018 21.816L12.0002 17.16L18.3602 21.816L15.9122 14.256L22.3202 9.55196H14.3762L12.0002 2.18396L9.62418 9.55196H1.68018L8.06418 14.256L5.64018 21.816ZM4.96818 10.632H10.4162L12.0002 5.71196L13.5842 10.632H19.0322L14.6402 13.848L16.2962 18.984L12.0002 15.816L7.68018 18.984L9.33618 13.848L4.96818 10.632Z"
        fill={color}
      />
    </svg>
  );
}

export default StarLight;
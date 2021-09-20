import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function NanoXRegular({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.6642 22.3201L22.3202 17.6641L6.31218 1.68005L1.68018 6.33605L17.6642 22.3201ZM3.62418 6.33605L6.31218 3.62405L12.7682 10.0561C12.0962 10.1041 11.4482 10.4161 10.8962 10.9201C10.3922 11.4241 10.1042 12.0961 10.0562 12.7441L3.62418 6.33605ZM5.32818 6.36005C5.32818 6.91205 5.78418 7.36805 6.33618 7.36805C6.91218 7.36805 7.39218 6.91205 7.39218 6.36005C7.39218 5.78405 6.91218 5.30405 6.33618 5.30405C5.78418 5.30405 5.32818 5.78405 5.32818 6.36005ZM11.8322 14.5441C11.1362 13.8241 11.1602 12.6241 11.8802 11.8801C12.6482 11.1601 13.8242 11.1601 14.5202 11.8321L20.3762 17.6641L17.6642 20.3761L11.8322 14.5441ZM12.3122 13.3441C12.3122 13.8961 12.7682 14.3761 13.3442 14.3761C13.8962 14.3761 14.3762 13.8961 14.3762 13.3441C14.3762 12.7681 13.8962 12.3121 13.3442 12.3121C12.7682 12.3121 12.3122 12.7681 12.3122 13.3441Z"
        fill={color}
      />
    </svg>
  );
}

export default NanoXRegular;
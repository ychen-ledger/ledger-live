import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function FiltersRegular({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.04791 21.36V17.112H8.27991V15.552H2.15991V17.112H4.39191V21.36H6.04791ZM4.39191 13.632H6.04791V2.64001H4.39191V13.632ZM8.95191 8.40002H15.0719V6.84001H12.8159V2.64001H11.1839V6.84001H8.95191V8.40002ZM11.1839 21.36H12.8159V10.32H11.1839V21.36ZM15.7199 17.112H17.9519V21.36H19.6079V17.112H21.8399V15.552H15.7199V17.112ZM17.9519 13.632H19.6079V2.64001H17.9519V13.632Z"
        fill={color}
      />
    </svg>
  );
}

export default FiltersRegular;
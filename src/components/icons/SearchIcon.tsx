type SearchIconProps = {
  styleSvg?: string;
  stylePath?: string;
};

const SearchIcon = ({ styleSvg = "", stylePath = "" }: SearchIconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Search Icon"
      className={styleSvg}
    >
      <path
        d="m14 14-2.99-2.996L14 14zm-1.333-7A5.667 5.667 0 1 1 1.333 7a5.667 5.667 0 0 1 11.334 0v0z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={stylePath}
      />
    </svg>
  );
};

export default SearchIcon;

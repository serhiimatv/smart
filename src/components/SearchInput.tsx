import { ChangeEvent, FC, memo } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { filtersSelector, inputFilter } from "../store/usersReducers";
import { filtersKeysType } from "../models/types";

interface IProps {
  filter: filtersKeysType;
}

const SearchInput: FC<IProps> = ({ filter }) => {
  const dispatch = useAppDispatch();

  const filters = useAppSelector(filtersSelector);

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(inputFilter({ filter, value: e.target.value }));
  };

  return (
    <>
      <div className="flex items-center relative">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-[10px]"
        >
          <path
            d="m14 14-2.99-2.996L14 14zm-1.333-7A5.667 5.667 0 1 1 1.333 7a5.667 5.667 0 0 1 11.334 0v0z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-grayBorder dark:stroke-white"
          />
        </svg>
        <input
          type="text"
          className="border-grayBorder border-solid border-[1px] rounded-lg h-8 w-[218px] pl-[33px]
                     placeholder:text-grayBorder placeholder:text-[12px]
                    dark:border-white dark:bg-violet dark:placeholder:text-white"
          placeholder="Filtering..."
          value={filters[filter]}
          onChange={inputHandler}
        />
      </div>
    </>
  );
};

export default memo(SearchInput);

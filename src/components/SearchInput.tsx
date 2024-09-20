import { ChangeEvent, memo } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { filtersSelector, inputFilter } from "../store/usersSlice";
import { FiltersKeysType } from "../models/userSliceTypes";
import SearchIcon from "./icons/SearchIcon";

type SearchInputProps = {
  filter: FiltersKeysType;
};

const SearchInput = ({ filter }: SearchInputProps) => {
  const dispatch = useAppDispatch();

  const filters = useAppSelector(filtersSelector);

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(inputFilter({ filter, value: e.target.value }));
  };

  return (
    <div className="flex items-center relative">
      <SearchIcon
        styleSvg="absolute left-[10px]"
        stylePath="stroke-grayBorder dark:stroke-white"
      />
      <input
        type="text"
        className="border-grayBorder border-solid border-[1px] rounded-lg h-8 w-[218px] pl-[33px]
                     placeholder:text-grayBorder placeholder:text-[12px]
                    dark:border-white dark:bg-violet dark:placeholder:text-white"
        placeholder="Filtering..."
        aria-label={`Search by ${filter}`}
        value={filters[filter]}
        onChange={inputHandler}
      />
    </div>
  );
};

export default memo(SearchInput);

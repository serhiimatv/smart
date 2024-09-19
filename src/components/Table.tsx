import SearchInput from "./SearchInput";
import ThemeSwitcher from "./ThemeSwitcher";
import TableHeadItem from "./TableHeadItem";
import TableBodyRow from "./TableBodyRow";
import { useAppSelector } from "../hooks/reduxHooks";
import { filtersSelector } from "../store/usersSlice";
import { FiltersKeysType } from "../models/userSliceTypes";

const Table = () => {
  const filters = useAppSelector(filtersSelector);
  return (
    <>
      <div className="flex items-center p-4 gap-3">
        <span className="text-[12px] font-medium dark:text-white">
          Show users
        </span>
        <ThemeSwitcher />
      </div>
      <div>
        <table className="w-full flex-col">
          <thead>
            <tr className="grid grid-cols-4 px-4 h-16">
              <TableHeadItem>Name</TableHeadItem>
              <TableHeadItem>Username</TableHeadItem>
              <TableHeadItem>E-mail</TableHeadItem>
              <TableHeadItem>Phone</TableHeadItem>
            </tr>
          </thead>
          <tbody>
            <tr className="grid grid-cols-4 px-4 h-16">
              {Object.keys(filters).map((key) => (
                <td className="flex justify-center" key={key}>
                  <SearchInput filter={key as FiltersKeysType} />
                </td>
              ))}
            </tr>
            <TableBodyRow />
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;

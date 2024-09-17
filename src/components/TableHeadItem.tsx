import { memo, ReactNode } from "react";

type TableHeadItem = {
  children?: ReactNode;
};

const TableHeadItem = ({ children }: TableHeadItem) => {
  return (
    <th className="flex justify-center items-center cursor-pointer">
      {children}
    </th>
  );
};

export default memo(TableHeadItem);

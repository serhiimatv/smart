import { FC, memo, ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

const TableHeadItem: FC<IProps> = ({ children }) => {
  return (
    <>
      <th className="flex justify-center items-center cursor-pointer">
        {children}
      </th>
    </>
  );
};

export default memo(TableHeadItem);

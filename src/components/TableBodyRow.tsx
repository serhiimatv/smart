import { useEffect } from "react";
import {
  errorSelector,
  fetchUsers,
  loadingSelector,
} from "../store/usersSlice";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { filteredUserSelector } from "../store/complexSelectors";

const TableBodyRow = () => {
  const dispatch = useAppDispatch();

  const filteredUsers = useAppSelector(filteredUserSelector);
  const loading = useAppSelector(loadingSelector);
  const error = useAppSelector(errorSelector);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (error) {
    return (
      <tr className="text-3xl flex justify-center mt-8">
        <td>Happened something error</td>
      </tr>
    );
  }

  if (loading) {
    return (
      <tr className="text-3xl flex justify-center mt-8">
        <td>Loading...</td>
      </tr>
    );
  }

  if (filteredUsers.length === 0) {
    return (
      <tr className="text-3xl flex justify-center mt-8">
        <td>Not found users</td>
      </tr>
    );
  }

  return (
    <>
      {filteredUsers.map((user) => (
        <tr
          className="px-4 grid grid-cols-4 h-16 bg-lightViolet even:bg-white
                       dark:bg-semiDarkViolet even:dark:bg-violet"
          key={user.id}
        >
          <td className="flex justify-center items-center">{user.name}</td>
          <td className="flex justify-center items-center">{user.username}</td>
          <td className="flex justify-center items-center">{user.email}</td>
          <td className="flex justify-center items-center">{user.phone}</td>
        </tr>
      ))}
    </>
  );
};

export default TableBodyRow;

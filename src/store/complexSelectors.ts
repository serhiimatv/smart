import { createSelector } from "@reduxjs/toolkit";
import { FiltersType, FiltersKeysType } from "../models/userSliceTypes";
import { IUser } from "../models/user";
import { filtersSelector, usersSelector } from "./usersSlice";

export const filterUsers = (users: IUser[], filter: FiltersType): IUser[] => {
  return users.filter((user) => {
    return Object.entries(filter).every(([key, value]) => {
      return user[key as FiltersKeysType]
        .toLocaleLowerCase()
        .includes(value.toLocaleLowerCase().trim());
    });
  });
};

export const filteredUserSelector = createSelector(
  usersSelector,
  filtersSelector,
  filterUsers
);

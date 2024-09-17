import { createSelector } from "@reduxjs/toolkit";
import { filters, filtersKeysType, filterUser } from "../models/types";
import { type User } from "../models/user";
import { filtersSelector, usersSelector } from "./usersSlice";

export const filterUsers = (
  users: User[],
  filter: filterUser<filters>
): User[] => {
  return users.filter((user) => {
    return Object.entries(filter).every(([key, value]) => {
      return user[key as filtersKeysType]
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

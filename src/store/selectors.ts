import { filtersKeysType } from "../models/types";
import { User } from "../models/user";

type filterUser<Type> = {
  [Property in keyof Type]: string;
};

type filters = {
  name: string;
  username: string;
  email: string;
  phone: string;
};

export const filterUser = (users: User[], filters: filterUser<filters>) => {
  const filtersEntries = Object.entries(filters);
  let filteredUser: User[] = [...users];

  const filterUserByEntries = (users: User[], filter: string[]) => {
    filteredUser = users.filter((user) =>
      user[filter[0] as filtersKeysType]
        .toLocaleLowerCase()
        .includes(filter[1].toLocaleLowerCase().trim())
    );
  };

  for (let i = 0; i < filtersEntries.length; i++) {
    filterUserByEntries(filteredUser, filtersEntries[i]);
  }
  return filteredUser;
};

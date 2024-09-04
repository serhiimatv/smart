import { User } from "./user";

export type filtersKeysType = keyof {
  name: "";
  username: "";
  email: "";
  phone: "";
};

export interface UserState {
  users: User[];
  filters: {
    name: string;
    username: string;
    email: string;
    phone: string;
  };
  loading: boolean;
  errors: boolean;
}

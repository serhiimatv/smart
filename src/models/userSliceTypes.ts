import { IUser } from "./user";

export type UserFiltersType = {
  name: string;
  username: string;
  email: string;
  phone: string;
};
export interface IUserSliceState {
  users: IUser[];
  filters: UserFiltersType;
  loading: boolean;
  errors: boolean;
}

export type FiltersKeysType = keyof UserFiltersType;

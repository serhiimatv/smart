import { IUser } from "./user";

export type FiltersType = {
  name: string;
  username: string;
  email: string;
  phone: string;
};
export interface IUserSliceState {
  users: IUser[];
  filters: FiltersType;
  loading: boolean;
  errors: boolean;
}

export type FiltersKeysType = keyof FiltersType;

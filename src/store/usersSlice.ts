import {
  asyncThunkCreator,
  buildCreateSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";
import { IUser } from "../models/user";
import {
  FiltersKeysType,
  IUserSliceState,
  UserFiltersType,
} from "../models/userSliceTypes";

const USERS_API_URL = "https://jsonplaceholder.typicode.com/users";

const createSliceWithThunks = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

const initialState = {
  users: [],
  filters: { name: "", username: "", email: "", phone: "" },
  loading: false,
  errors: false,
} as IUserSliceState;

const usersSlice = createSliceWithThunks({
  name: "user",
  initialState,
  selectors: {
    usersSelector: (state: IUserSliceState): IUser[] => state.users,
    filtersSelector: (state: IUserSliceState): UserFiltersType => state.filters,
    loadingSelector: (state: IUserSliceState): boolean => state.loading,
    errorSelector: (state: IUserSliceState): boolean => state.errors,
  },
  reducers: (create) => ({
    fetchUsers: create.asyncThunk(
      async () => {
        const response = await axios.get(USERS_API_URL);

        return response.data;
      },
      {
        pending: (state: IUserSliceState): void => {
          state.loading = true;
          state.errors = false;
        },
        rejected: (state: IUserSliceState): void => {
          state.errors = true;
        },
        fulfilled: (
          state: IUserSliceState,
          actions: PayloadAction<IUser[]>
        ): void => {
          state.users = actions.payload;
        },
        settled: (state: IUserSliceState): void => {
          state.loading = false;
        },
      }
    ),
    inputFilter: create.reducer(
      (
        state: IUserSliceState,
        actions: PayloadAction<{ filter: FiltersKeysType; value: string }>
      ): void => {
        state.filters[actions.payload.filter] = actions.payload.value;
      }
    ),
  }),
});

export const { fetchUsers, inputFilter } = usersSlice.actions;

export const {
  usersSelector,
  filtersSelector,
  loadingSelector,
  errorSelector,
} = usersSlice.selectors;

export default usersSlice.reducer;

import {
  asyncThunkCreator,
  buildCreateSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";
import { type User } from "../models/user";
import { type filtersKeysType, type UserState } from "../models/types";
import { filterUser } from "./selectors";

const createSliceWithThunks = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

const initialState = {
  users: [],
  filters: { name: "", username: "", email: "", phone: "" },
  loading: false,
  errors: false,
} satisfies UserState as UserState;

const usersSlice = createSliceWithThunks({
  name: "user",
  initialState,
  selectors: {
    usersSelector: (state) => state.users,
    filtersSelector: (state) => state.filters,
    loadingSelector: (state) => state.loading,
    errorSelector: (state) => state.errors,
    filteredUsersSelector: (state) => filterUser(state.users, state.filters),
  },
  reducers: (create) => ({
    fetchUsers: create.asyncThunk(
      async () => {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        return response.data;
      },
      {
        pending: (state) => {
          state.loading = true;
          state.errors = false;
        },
        rejected: (state) => {
          state.errors = true;
        },
        fulfilled: (state, actions: PayloadAction<User[]>) => {
          state.users = actions.payload;
        },
        settled: (state) => {
          state.loading = false;
        },
      }
    ),
    inputFilter: create.reducer(
      (
        state,
        actions: PayloadAction<{ filter: filtersKeysType; value: string }>
      ) => {
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
  filteredUsersSelector,
} = usersSlice.selectors;

export default usersSlice.reducer;

import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  email: string;
  name: string;
}

const initialState: UserState = {
  email: "",
  name: "",
} as const;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.email>
    ) => {
      state.email = action.payload;
    },
    setName: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.name>
    ) => {
      state.name = action.payload;
    },
  },
});

export const getUser = (state: { user: UserState }) => state.user;

export const { setEmail, setName } = userSlice.actions;

export default userSlice.reducer;

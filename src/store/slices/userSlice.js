import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  id: null,
  email: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      const { token, email, id } = action.payload;
      state.token = token;
      state.email = email;
      state.id = id;
    },
    removeUser(state) {
      state.token = null;
      state.email = null;
      state.id = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;

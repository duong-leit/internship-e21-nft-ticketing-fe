import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUserState {
  name?: string | null;
  avatarUrl?: string | null;
  email?: string | null;
  isLogin?: boolean;
}

const initialState: IUserState = {
  name: null,
  avatarUrl: null,
  email: null,
  isLogin: false,
};

const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: initialState,
  reducers: {
    login: (state, action: PayloadAction<IUserState>) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.avatarUrl = action.payload.avatarUrl;
      state.isLogin = true;
    },
    logout: (state) => {
      state.email = null;
      state.name = null;
      state.avatarUrl = null;
      state.isLogin = false;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, LoginState } from "./LoginTypes";
import axios from "axios";

const initialState: LoginState = {
  isLoggedIn: false,
  user: {
    access: "",
    refresh: "",
  },
  loading: false,
  error: null,
};

// Async thunk for login
export const loginUser = createAsyncThunk(
  "login/loginUser",
  async (
    credentials: { username: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}api/token/`,
        credentials
      );

      return response.data as User;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Invalid login credentials"
      );
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      (state.user = {
        access: "",
        refresh: "",
      }),
        (state.loading = false);
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.isLoggedIn = true;
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const {
  // loginStart, loginSuccess, loginFailure,
  logout,
} = loginSlice.actions;

export default loginSlice.reducer;
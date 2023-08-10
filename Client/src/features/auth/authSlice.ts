import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";
import { authSliceState } from "../../types/authTypes";
import { UserType } from "../../types/userType";

const initState: authSliceState = {
  user: null,
  error: false,
  success: false,
  loading: false,
  message: "",
};

export const signUp = createAsyncThunk(
  "auth/register",
  async (user: UserType, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (user: UserType, thunkAPI) => {
    try {
      return await authService.login(user);
    } catch (error) {
      const msg =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(msg);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: initState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.success = false;
      state.error = false;
      state.message = "";
    },
    resetUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.user = action.payload;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = getPayloadAsString(action.payload);
        state.user = null;
      })
      //   .addCase(logout.fulfilled, (state) => {
      //     state.user = null;
      //   })
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = true;

        state.message = getPayloadAsString(action.payload);

        state.user = null;
      });
  },
});

function getPayloadAsString(payload: unknown): string | null {
  if (typeof payload === "string") {
    return payload;
  }
  return "";
}

export const { reset, resetUser } = authSlice.actions;
export default authSlice.reducer;

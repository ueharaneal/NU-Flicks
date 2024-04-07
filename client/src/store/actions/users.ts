import { createAsyncThunk, AsyncThunkAction } from "@reduxjs/toolkit";

import axios from "axios";

import { AppDispatch } from "../index";
import { UserData } from "../reducers/users";
import { getAuthHeader, removeTokenCookie } from "@/utils/tools";
type ThunkAction = AsyncThunkAction<{ data: any; auth: boolean }, void, {}>;

interface RegisterUserArgs {
  email: string;
  password: string;
  firstname: string | null;
  lastname: string | null;
}

interface SignInArgs {
  email: string;
  password: string;
}

export const registerUser = createAsyncThunk<
  { data: UserData; auth: boolean },
  RegisterUserArgs,
  { dispatch: AppDispatch }
>(
  "users/registerUser",
  async ({ email, password, firstname, lastname }, { dispatch }) => {
    try {
      const request = await axios.post("/api/auth/register", {
        email: email,
        password: password,
        firstname: firstname,
        lastname: lastname,
      });
      //show a message
      return { data: request.data.user, auth: true };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const signInUser = createAsyncThunk<
  { data: UserData; auth: boolean },
  SignInArgs,
  { dispatch: AppDispatch }
>("users/signInUser", async ({ email, password }, { dispatch }) => {
  try {
    const request = await axios.post("/api/auth/signin", {
      email,
      password,
    });
    //show a message
    console.log("itworked");
    console.log(request);
    return { data: request.data.user, auth: true };
  } catch (error) {
    console.error(error);
    throw error;
  }
});

export const isAuth = createAsyncThunk<{ data: any; auth: boolean }, void>(
  "users/isAuth",
  async () => {
    try {
      const request = await axios.get("/api/auth/isauth", getAuthHeader());
      return { data: request.data, auth: true };
    } catch (error) {
      return { data: {}, auth: false };
    }
  }
);

export const signOut = createAsyncThunk<{ data: any; auth: boolean }, void>(
  "users/signout",
  async () => {
    removeTokenCookie();
    return { data: null, auth: false };
  }
);

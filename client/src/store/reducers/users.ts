import { createSlice } from "@reduxjs/toolkit";
import { registerUser, signInUser, isAuth, signOut } from "../actions/users";
export interface UserData {
  id: string | null;
  email: string | null;
  firstname: string | null;
  lastname: string | null;
  age: number | null;
  role: string | null;
  verified: boolean | null;
}

export interface UserState {
  loading: boolean;
  data: UserData;
  auth: boolean | null | string;
}

let DEFAULT_USER_STATE: UserState = {
  loading: false,
  data: {
    id: null,
    email: null,
    firstname: null,
    lastname: null,
    age: null,
    role: null,
    verified: null,
  },
  auth: null,
};

// export const userSlice = createSlice({
//   name: "users",
//   initialState: DEFAULT_USER_STATE,
//   reducers: {},
// });'

export const userSlice = createSlice({
  name: "users",
  initialState: DEFAULT_USER_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //register
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        (state.loading = false),
          (state.data = action.payload.data),
          (state.auth = action.payload.auth);
      })
      .addCase(registerUser.rejected, (state) => {})
      //signin user
      .addCase(signInUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        (state.data = action.payload.data),
          (state.loading = false),
          (state.auth = true);
      })
      .addCase(signInUser.rejected, (state) => {state.loading = false})
      //isAuth? 
      .addCase(isAuth.pending, (state) => {
        state.loading = true;
      })
      .addCase(isAuth.fulfilled, (state, action) => {
        (state.data = {...state.data, ...action.payload.data}),
          (state.loading = false),
          (state.auth = action.payload.auth);
      })
      .addCase(isAuth.rejected, (state) => {state.loading = false})
      //signout 
      .addCase(signOut.fulfilled, (state)=>{
        state.data = DEFAULT_USER_STATE.data,
        state.auth = false
      })
  },
});

//actions..
export default userSlice.reducer;

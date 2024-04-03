import { createSlice } from "@reduxjs/toolkit";

interface UserData {
  id: string | null;
  email: string | null;
  firstname: string | null;
  lastname: string | null;
  age: number | null;
  role: string | null;
  verified: boolean | null;
}


interface UserState {
  loading: boolean;
  data: UserData;
  auth: string | null | boolean;
}


let DEFAULT_USER_STATE: UserState= {
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

export const userSlice = createSlice({
  name: "users",
  initialState: DEFAULT_USER_STATE,
  reducers: {},
});

//actions..
export default userSlice.reducer;

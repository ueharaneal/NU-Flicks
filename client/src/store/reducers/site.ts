import { createSlice } from "@reduxjs/toolkit";

const siteSlice = createSlice({
  name: "site",
  initialState: {
    layout: ''
  },
  reducers: {
    setLayout: (state,action)=>{
      console.log("setlayoutcalled")
      state.layout = action.payload
    }
  },
});

export const {setLayout} = siteSlice.actions;
export default siteSlice.reducer;

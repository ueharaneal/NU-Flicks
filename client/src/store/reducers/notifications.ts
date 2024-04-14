import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NotificationState {
  global: {
    error?: boolean;
    msg?: string;
  };
}

const initialState: NotificationState = {
  global: {},
};

const notificationsSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    errorGlobal: (state, action: PayloadAction<string>) => {
      state.global.error = true;
      state.global.msg = action.payload;
    },
    successGlobal: (state, action: PayloadAction<string>) => {
      state.global.error = true;
      state.global.msg = action.payload;
    },
    clearNotifications: (state) => {
      state.global = {};
    },
  },
});

export const { errorGlobal, successGlobal, clearNotifications } = notificationsSlice.actions;
export default notificationsSlice.reducer;

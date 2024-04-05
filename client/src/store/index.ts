import { configureStore } from "@reduxjs/toolkit";

import UserReducer from "./reducers/users";
import SiteReducer from "./reducers/site";
import NotificationsReducer from "./reducers/notifications";
import ArticlesReducer from "./reducers/articles";
import { TypedUseSelectorHook, useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    users: UserReducer,
    site: SiteReducer,
    aritcles: ArticlesReducer,
    notifications: NotificationsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch
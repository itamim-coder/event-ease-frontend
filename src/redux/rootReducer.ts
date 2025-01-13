import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./features/auth/authSlice";
import notificationReducer from "./features/notification/notification.slice";
import { baseApi } from "./api/baseApi";

const persistConfig = {
  key: "auth",
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);
export const reducer = {
  auth: persistedAuthReducer,
  notification: notificationReducer,
  [baseApi.reducerPath]: baseApi.reducer,
};

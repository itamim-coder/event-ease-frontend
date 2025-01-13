import { persistReducer } from "redux-persist";
import { baseApi } from "./api/baseApi";
import storage from "redux-persist/lib/storage";
import authReducer from "./features/auth/authSlice";
import notificationReducer from "./features/notification/notification.slice";

const persistConfig = {
  key: "auth",
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);
export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  auth: persistedAuthReducer,
  notification: notificationReducer,
};

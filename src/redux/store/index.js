import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import profileFetchReducer from "../reducer/profileFetchReducer";
import loginReducer from "../reducer/loginReducer";
import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import postReducer from "../reducer/postReducer";

const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: "my-sup3rD3cr37-K3Y!",
    }),
  ],
};

const rootReducer = combineReducers({
  profileSelect: profileFetchReducer,
  user: loginReducer,
  posts: postReducer,
});

const persisterReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persisterReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);

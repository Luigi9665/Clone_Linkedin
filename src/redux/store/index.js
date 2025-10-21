import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileFetchReducer from "../reducer/profileFetchReducer";
import loginReducer from "../reducer/loginReducer";

const rootReducer = combineReducers({
  profileSelect: profileFetchReducer,
  user: loginReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

import { combineReducers } from "redux";
import auth from "./auth";
import language, { languageReducer } from "./language";

export const rootReducer = combineReducers({
  auth,
  language: languageReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

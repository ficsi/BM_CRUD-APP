import { combineReducers } from "redux";
import initReducers from "../reducers/initReducers";

export default combineReducers({
  initialData: initReducers
});

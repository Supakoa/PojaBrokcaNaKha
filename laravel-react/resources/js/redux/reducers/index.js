import counterReducer from "./counter";
import loggerReducer from "./isLogged";
import userReducer from "./user";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggerReducer,
    userState: userReducer,
});

export default allReducers;

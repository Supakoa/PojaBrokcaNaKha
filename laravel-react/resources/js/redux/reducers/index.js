import counterReducer from "./counter";
import loggerReducer from "./isLogged";
import userReducer from "./user";
import redirectReducer from './isRedirect';
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggerReducer,
    userState: userReducer,
    redirectState: redirectReducer
});

export default allReducers;

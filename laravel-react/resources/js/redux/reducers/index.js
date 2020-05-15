import counterReducer from "./counter";
import loggerReducer from "./isLogged";
import userReducer from "./user";
import postLoginReducer from './postLogin';
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggerReducer,
    userState: userReducer,
    postLogin: postLoginReducer
});

export default allReducers;

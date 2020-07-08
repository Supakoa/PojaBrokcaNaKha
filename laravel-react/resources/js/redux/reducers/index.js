import counterReducer from "./counter";
import loggerReducer from "./isLogged";
import userReducer from "./user";
import redirectReducer from "./isRedirect";
import newsReducer from "./news";
import studentProfileReducer from "./studentProfileReducer";
import { combineReducers } from "redux";
import formReducer from "./form";

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggerReducer,
    userState: userReducer,
    redirectState: redirectReducer,
    newsState: newsReducer,
    form: formReducer,
    studentProfile: studentProfileReducer
});

export default allReducers;

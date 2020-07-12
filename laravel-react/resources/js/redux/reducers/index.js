import counterReducer from "./counter";
import loggerReducer from "./isLogged";
import userReducer from "./user";
import redirectReducer from "./isRedirect";
import newsReducer from "./news";
import studentProfileReducer from "./studentProfileReducer";
import newsFormReducer from "./newsForm";
import pathRoleUserReducer from "./pathRoleUser";

import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggerReducer,
    userState: userReducer,
    redirectState: redirectReducer,
    newsState: newsReducer,
    newsForm: newsFormReducer,
    studentProfile: studentProfileReducer,
    pathRoleUser : pathRoleUserReducer
});

export default allReducers;

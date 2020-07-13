import counterReducer from "./counter";
import loggerReducer from "./isLogged";
import userReducer from "./user";
import redirectReducer from "./isRedirect";
import newsReducer from "./news";
import studentProfileReducer from "./studentProfileReducer";
import newsFormReducer from "./newsForm";
import userFormReducer from "./userForm";
import selectFacultyReducer from "./selectFaculty";

import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggerReducer,
    userState: userReducer,
    redirectState: redirectReducer,
    newsState: newsReducer,
    newsForm: newsFormReducer,
    studentProfile: studentProfileReducer,
    formUser: userFormReducer,
    selectFaculty: selectFacultyReducer
});

export default allReducers;

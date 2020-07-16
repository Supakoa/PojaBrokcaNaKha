import loggerReducer from "./isLogged";
import userReducer from "./user";
import redirectReducer from "./isRedirect";
import newsReducer from "./news";
import userDocumentReducer from "./userDocument";
import newsFormReducer from "./newsForm";
import userFormReducer from "./userForm";
import selectFacultyReducer from "./selectFaculty";
import pathRoleUserReducer from "./pathRoleUser";

import { combineReducers } from "redux";
import selectMajorReducer from "./selectMajor";

const allReducers = combineReducers({
    isLogged: loggerReducer,
    userState: userReducer,
    redirectState: redirectReducer,
    newsState: newsReducer,
    newsForm: newsFormReducer,
    formUser: userFormReducer,
    selectFaculty: selectFacultyReducer,
    pathRoleUser : pathRoleUserReducer,
    selectMajor: selectMajorReducer,
    userDocument: userDocumentReducer
});

export default allReducers;

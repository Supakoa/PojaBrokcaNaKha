import loggerReducer from "./isLogged";
import userReducer from "./user";
import redirectReducer from "./isRedirect";
import newsReducer from "./news";
import userDocumentReducer from "./userDocument";
import newsFormReducer from "./newsForm";
import userFormReducer from "./userForm";
import selectFacultyReducer from "./selectFaculty";
import pathRoleUserReducer from "./pathRoleUser";
<<<<<<< HEAD
import selectMajorReducer from "./selectMajor";
import showUsersReducer from "./showUsers";
=======
import documentsTemplateReducer from "./doumentsTemplate";
>>>>>>> 5b24dc6dde82d8acad857b33cee3453b99d8ec23

import { combineReducers } from "redux";

const allReducers = combineReducers({
    isLogged: loggerReducer,
    userState: userReducer,
    redirectState: redirectReducer,
    newsState: newsReducer,
    newsForm: newsFormReducer,
    formUser: userFormReducer,
    selectFaculty: selectFacultyReducer,
    pathRoleUser: pathRoleUserReducer,
    selectMajor: selectMajorReducer,
    userDocument: userDocumentReducer,
<<<<<<< HEAD
    showUsers: showUsersReducer
=======
    documentsTemplate: documentsTemplateReducer
>>>>>>> 5b24dc6dde82d8acad857b33cee3453b99d8ec23
});

export default allReducers;

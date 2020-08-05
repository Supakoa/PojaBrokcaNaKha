import loggerReducer from "./isLogged";
import userReducer from "./user";
import redirectReducer from "./isRedirect";
import newsReducer from "./news";
import userDocumentReducer from "./userDocument";
import newsFormReducer from "./newsForm";
import userFormReducer from "./userForm";
import selectFacultyReducer from "./selectFaculty";
import pathRoleUserReducer from "./pathRoleUser";
import selectMajorReducer from "./selectMajor";
import showUsersReducer from "./showUsers";
import documentsTemplateReducer from "./doumentsTemplate";
import inputTempsReducer from "./inputTemps";
import subjectsDocumentsReducer from "./subjectsDocumnet";

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
    showUsers: showUsersReducer,
    documentsTemplate: documentsTemplateReducer,
    inputTemps: inputTempsReducer,
    subjectsDocuments: subjectsDocumentsReducer
});

export default allReducers;

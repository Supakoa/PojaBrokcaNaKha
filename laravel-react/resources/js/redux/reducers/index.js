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
import showNewsReducer from "./showNews";
import chipGroupReducer from "./chipGroup";
import showGroupReducer from "./showGroup";
import showApproversReducer from "./showApprovers";
import showFacultyReducer from "./showFaculty";

import { combineReducers } from "redux";
import showSubjectsReducer from "./showSubjects";
import allUsersReducer from "./allUsres";
import showFormsReducer from "./showForms";

const rootReducer = (state, action) => {
    if (action.type === "DESTROY") {
        state = undefined;
    }

    return allReducers(state, action);
};

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
    subjectsDocument: subjectsDocumentsReducer,
    showNews: showNewsReducer,
    chipGroup: chipGroupReducer,
    showGroup: showGroupReducer,
    showApprovers: showApproversReducer,
    showSubjects: showSubjectsReducer,
    allUsers: allUsersReducer,
    showForm: showFormsReducer,
    showFaculty: showFacultyReducer
});

export default rootReducer;

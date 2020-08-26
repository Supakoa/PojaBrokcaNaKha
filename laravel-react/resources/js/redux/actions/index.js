export const user = obj => {
    return {
        type: "USER",
        payload: obj
    };
};

export const isAuththen = boolean => {
    return {
        type: "IS_AUTHEN",
        boolean: boolean
    };
};

export const newsUpload = obj => {
    return {
        type: "NEWS_UPLOAD",
        image: {
            name: obj.image,
            url: obj.url
        }
    };
};

export const initNewsForm = data => {
    return {
        type: "INIT_NEWS_FORM",
        file: data.file,
        ref: data.ref
    };
};

export const updateFile = file => {
    return {
        type: "UPDATE_FILE_FORM_NEWS",
        file: file
    };
};

export const updateRef = ref => {
    return {
        type: "UPDATE_REF_FORM_NEWS",
        ref: ref
    };
};

export const destroyForm = () => {
    return {
        type: "DESTROY_FORM"
    };
};

export const initUserForm = form => {
    return {
        type: "INIT_USER_FORM",
        email: form.email,
        title: form.title,
        firstName: form.first_name,
        lastName: form.last_name,
        phoneNumber: form.telephone,
        majorId: form.major_id,
        role: form.role_id
    };
};

export const selectFacultyId = id => {
    return {
        type: "SELECT_FACULTY",
        id: id
    };
};

export const clearSelectFaculty = () => {
    return {
        type: "CLEAR_SELECT_FACULTY"
    };
};

export const pathRoleUser = _path => {
    return {
        type: "SET_PATH",
        data: _path
    };
};

export const selectMajorId = id => {
    return {
        type: "SELECT_MAJOR",
        id: id
    };
};

export const userDocument = _doc => {
    return {
        type: "USER_DOCUMENTS",
        payload: _doc
    };
};

export const updateFormEditUserBySingleData = (name, data) => {
    return {
        type: "UPDATE_EDIT_FORM_USER_BY_SINGLE_DATA",
        name: name,
        data: data
    };
};

export const initShowUsers = data => {
    return {
        type: "INIT_SHOW_USERS",
        data: data
    };
};

export const updateShowUsers = data => {
    return {
        type: "UPDATE_SHOW_USERS",
        data: data
    };
};

export const documentsTemplate = _doc => {
    return {
        type: "DOCUMENT",
        payload: _doc
    };
};

export const inputTemps = _inputs => {
    return {
        type: _inputs.type,
        payload: _inputs.payload
    };
};

export const subjectsForDocument = _sub => {
    return {
        type: "SUBJECTS_DOCUMENT",
        payload: _sub
    };
};

export const newsActions = (action, news) => {
    return {
        type: action,
        data: news
    };
};

export const chipGroupAction = (action, data) => {
    return {
        type: action,
        data: data
    };
};

export const showGroupAction = (action, data) => {
    return {
        type: action,
        data: data
    };
};

export const showApproversAction = (action, data) => {
    return {
        type: action,
        data: data
    };
};

export const showSubjectsAction = (action, data) => {
    return {
        type: action,
        data: data
    };
};

export const allUsers = _users => {
    return {
        type: _users.type,
        payload: _users.payload
    };
};

export const showFormsAction = (action, data) => {
    return {
        type: action,
        data: data
    }
}

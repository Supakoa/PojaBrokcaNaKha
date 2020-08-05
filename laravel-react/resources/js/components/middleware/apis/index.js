const _www = "http://127.0.0.1:8000";

export const _urlUsers = () => {
    return `${_www}/api/users`;
};

export const _urlUser = () => {
    return `${_www}/api/user`;
};

export const _urlGetUserDocuments = _id => {
    return `${_www}/api/users/${_id}/documents`;
};

export const _urlDocuments = () => {
    return `${_www}/api/forms`;
};

export const _urlFaculties = () => {
    return `${_www}/api/faculties`;
};

export const _urlMajors = _id => {
    return `${_www}/api/faculties/${_id}/majors`;
};

export const _urlUploads = () => {
    return `${_www}/api/uploads`;
};

export const _urlPostDocument = () => {
    return `${_www}`;
};

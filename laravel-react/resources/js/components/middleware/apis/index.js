const _www = "http://127.0.0.1:8000";

export const _urlUsers = () => {
    return `${_www}/api/users`;
};

export const _urlUser = () => {
    return `${_www}/api/user`;
};

export const _urlDocuments = () => {
    return `${_www}/api/forms`;
};

export const _urlFaculties = () => {
    return `${_www}/api/faculties`;
};

export const _urlUploads = () => {
    return `${_www}/api/uploads`;
};

export const _urlPostDocuments = () => {
    return `${_www}/api/documents`;
};

export const _urlSubjects = () => {
    return `${_www}/api/subjects`;
};

export const _urlMajors = id => {
    return `${_www}/api/faculties/${id}/majors`;
};

export const _urlGetUserDocuments = id => {
    return `${_www}/api/users/${id}/documents`;
};

export const _urlCancelDocument = id => {
    return `${_www}/api/documents/${id}/cancel`;
};

export const _urlPostApprove = id => {
    return `${_www}/api/documents/${id}/approve`;
};

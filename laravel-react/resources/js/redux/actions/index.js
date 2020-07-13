export const increment = number => {
    return {
        type: "INCREMENT",
        payload: number
    };
};

export const decrement = number => {
    return {
        type: "DECREMENT",
        payload: number
    };
};

export const user = obj => {
    return {
        type: "USER",
        user: obj
    };
};

export const isAuththen = boolean => {
    return {
        type: "REDIRECT",
        boolean: boolean
    };
};

export const newsUpload = obj => {
    return {
        type: "UPLOAD",
        image: {
            name: obj.image,
            url: obj.url
        }
    };
};

export const initNewsForm = (data) => {
    return {
        type: "INITNEWSFORM",
        file: data.file,
        ref: data.ref
    }
}

export const updateFile = file => {
    return {
        type: "UPDATEFILE",
        file: file
    }
}

export const updateRef = ref => {
    return {
        type: "UPDATEREF",
        ref: ref
    }
}

export const destroyForm = () => {
    return {
        type: "DESTROYFORM",
    }
}

export const studentProfile = _std => {
    return {
        type: "student",
        payload: _std
    };
};

export const initUserForm = form => {
    return {
        type: "INITUSERFORM",
        email: form.email,
        title: form.title,
        firstName: form.first_name,
        lastName: form.last_name,
        phoneNumber: form.telephone,
        majorId: form.major_id,
        role: form.role_id
    }
}

export const selectFacultyId = id => {
    return {
        type: "SELECTFACULTY",
        id: id
    }
}

export const clearSelectFaculty = () => {
    return {
        type: "CLEARSELECTFACULTY"
    }
}
export const pathRoleUser = _path => {
    return {
        type : "SETPATH",
        data : _path
    };
};

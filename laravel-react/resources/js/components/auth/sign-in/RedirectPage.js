const redirectPage = roleId => {
    let role_name = "";
    switch (roleId) {
        case 1:
            //addmin
            role_name = "/admin";
            return role_name;
        case 2:
            //staff
            role_name = "/checkers";
            return role_name;

        case 3:
            //student
            role_name = "/student";
            return role_name;

        default:
            return false;
    }
};

export default redirectPage;

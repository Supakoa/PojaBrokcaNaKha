const findingSender = (userId, users) => {
    const _user = users.find(item => {
        return item.id === userId;
    });
    if (_user) return _user;
};

export default findingSender;

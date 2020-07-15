const headerConfig = (_authToken, _port) => {
    return {
        headers: {
            Authorization: `Bearer ${_authToken}`,
            "Content-Type": "application/json",
            "Retry-After": _port
        }
    };
};

export default headerConfig;

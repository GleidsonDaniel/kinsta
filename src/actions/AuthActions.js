export const checkLogin = () => {
    return {
        type: 'changeStatus',
        payload: {
            status: 0
        }
    }
};

export const changeName = (name) => {
    return {
        type: 'changeName_AuthReducer',
        payload: name
    }
}

export const changePassword = (password) => {
    return {
        type: 'changePassword_AuthReducer',
        payload: password
    }
}

export const changeEmail = (email) => {
    return {
        type: 'changeEmail_AuthReducer',
        payload: email
    }
}


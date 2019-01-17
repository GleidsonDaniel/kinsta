const initialState = {
    name: '',
    email: '',
    password: '',
    status: 0
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'changeStatus':
            return { ...state, status: action.payload.status }
        case 'changeName_AuthReducer':
            return { ...state, name: action.payload }
        case 'changeEmail_AuthReducer':
            return { ...state, email: action.payload }
        case 'changePassword_AuthReducer':
            return { ...state, password: action.payload }
        default:
            return state
    }
}

export default AuthReducer;
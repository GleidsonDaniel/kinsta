const initialState = {
    email: '',
    password: '',
    status: 0
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, email: action.payload }
        default:
            return state
    }
}

export default AuthReducer;
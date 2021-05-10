import UsersActionTypes from './users.types';

const INITIAL_STATE = {
    users: [
        {
            id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
            name: 'John Doe',
            email: 'johndoe@mail.com'
        }
    ],
    selectedUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case UsersActionTypes.GET_USERS: 
            return {
                ...state,
                users: state.users
            }
        case UsersActionTypes.GET_USER: 
            return {
                ...state,
                selectedUser: state.users.find(user => user.id === action.payload)
            }
        case UsersActionTypes.CREATE_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        case UsersActionTypes.EDIT_USER: 
            return {
                ...state,
                users: state.users.map(user => user.id === action.payload.id ? action.payload : user)
            }
        case UsersActionTypes.DELETE_USER: 
            return {
                ...state, 
                users: state.users.filter(user => user.id !== action.payload)
            }
        default: 
            return state
    }
}

export default userReducer;
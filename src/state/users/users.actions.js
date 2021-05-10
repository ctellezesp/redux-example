import UsersActionTypes from './users.types';

export const createUser = (user) => ({
    type: UsersActionTypes.CREATE_USER,
    payload: user
});

export const editUser = (user) => ({
    type: UsersActionTypes.EDIT_USER,
    payload: user
});

export const getUser = (id) => ({
    type: UsersActionTypes.GET_USER,
    payload: id
});

export const getUsers = () => ({
    type: UsersActionTypes.GET_USERS
});

export const deleteUser = (id) => ({
    type: UsersActionTypes.DELETE_USER,
    payload: id
});
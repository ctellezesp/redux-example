import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { createUser } from '../state/users/users.actions';
import { v4 as uuidv4 } from 'uuid';

const CreateUser = () => {

    const history = useHistory();

    const dispatch = useDispatch();

    const receiveData = (event) => {
        event.preventDefault();
        const {email, name} = event.target.elements;
        const newUser = {
            id: uuidv4(),
            name: name.value,
            email: email.value
        }
        dispatch(createUser(newUser));
        history.push('/');
    }

    return(
        <form onSubmit={receiveData}>
            <label htmlFor='name'>Fullname:</label>
            <br/>
            <input type='text' name='name' />
            <br/>
            <label htmlFor='email'>Email:</label>
            <br/>
            <input type='text' name='email' />
            <br/>
            <button type='submit'>Create</button>
        </form>
    );
}

export default CreateUser;
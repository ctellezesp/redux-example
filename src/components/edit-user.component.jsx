import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { editUser } from '../state/users/users.actions';

const EditUser = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const userSelected = useSelector(store => store.users.selectedUser);
    console.log('user selected: ', userSelected);

    const editData = (event) => {
        event.preventDefault();
        const {name, email} = event.target.elements;
        const toSave = {
            id: userSelected.id,
            name: name.value,
            email: email.value
        }
        dispatch(editUser(toSave));
        alert('Data edited');
        history.push('/');
    }

    
    return(
        <div>
            <h1>Hola</h1>
            <form onSubmit={editData}>
                <label htmlFor='name'>Fullname</label>
                <input type='text' name='name' defaultValue={userSelected.name} />
                <br/>
                <label htmlFor='email'>Email</label>
                <input type='mail' name='email' defaultValue={userSelected.email} />
                <br/>
                <button type='submit'>Save</button>
            </form>
        </div>
    );
}

export default EditUser;
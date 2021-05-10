import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { deleteUser, getUser } from '../state/users/users.actions';

const UsersList = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const usersStore = useSelector(store => store.users.users);
    console.log(usersStore);

    const deleteOneUser = (id) => {
        dispatch(deleteUser(id));
        alert('User deleted');
    }

    const editOneUser = (id) => {
        dispatch(getUser(id));
        history.push(`/edit/${id}`);
    }

    return(
        <div>
            <Link to='/create'>
                <button>Create User</button>
            </Link>
            <table>
                <thead>
                    <tr>
                        <th>Fullname</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {usersStore.map((user, index) => {
                        return(
                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <span className='material-icons' onClick={() => editOneUser(user.id)}>edit</span>
                                    <span className='material-icons' onClick={() => deleteOneUser(user.id)}>delete</span>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default UsersList;
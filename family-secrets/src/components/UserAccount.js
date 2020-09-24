import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const UserAccount = (props) => {
    /* CRUD -
    create - will be in the registration form
    read will be here, in the form of showing the user his account details
    update will be here in the form of allowing the user to edit his account details
    delete will be here in the form of allowing the user to delete his account */

    const [user, setUser] = useState({
        email: '',
        username: '',
    });

    // let id = ''

    // if (localStorage.getItem('user')) {
    const userID = JSON.parse(localStorage.getItem('user'));
    const id = userID.id;
    // }

    useEffect(() => {
        axiosWithAuth()
            .get(`https://family-secret.herokuapp.com/api/users/${id}`)
            .then(res => {
                console.log(res);
                setUser(res.data);
            })
            .catch(err => console.log(err));
    }, [id]);

    const changeHandler = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        Axios
            .put(`https://family-secret.herokuapp.com/api/users/${id}`, user)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    const deleteHandler = () => {
        Axios
        .delete(`https://family-secret.herokuapp.com/api/users/${id}`, user)
        .then(res => console.log(res))
        .catch(err => console.log(err))

        props.history.push('/');
        localStorage.removeItem('user');
    }

    return(
        <>
            <form onSubmit={submitHandler}>
                <label htmlFor='username'>
                    User Name: 
                    <input name='username' type='text' value={user.username} onChange={changeHandler} />
                </label>
                <label htmlFor='email'>
                    Email: 
                    <input name='email' type='email' value={user.email} onChange={changeHandler} />
                </label>

                <button type='submit'>Submit</button>
            </form>

            <div onClick={deleteHandler}>
                <button>Delete Account</button>
            </div>
        </>
    )
}

export default UserAccount;
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
=======
import { useParams } from 'react-router-dom';
>>>>>>> 59cc2950e5e6c93c536b89468f00f595c6b790a0
import { axiosWithAuth } from '../utils/axiosWithAuth';

const UserAccount = () => {
    /* CRUD -
    create - will be in the registration form
    read will be here, in the form of showing the user his account details
    update will be here in the form of allowing the user to edit his account details
    delete will be here in the form of allowing the user to delete his account */

    const [user, setUser] = useState({
        email: '',
        first_name: '',
        last_name: '',
        id: '',
    });

<<<<<<< HEAD
    const id = 1;
=======
    const {id} = useParams();
>>>>>>> 59cc2950e5e6c93c536b89468f00f595c6b790a0

    useEffect(() => {
        axiosWithAuth()
            .get(`https://family-secret.herokuapp.com/api/users/${id}`)
            .then(res => {
<<<<<<< HEAD
                console.log(res);
=======
                console.log(res)
>>>>>>> 59cc2950e5e6c93c536b89468f00f595c6b790a0
                // setUser(res.data.data);
            })
            .catch(err => console.log(err));
    }, []);

    const changeHandler = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        Axios
            .put(`https://reqres.in/api/users/${user.id}`, user)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    const deleteHandler = () => {
        Axios
        .delete(`https://reqres.in/api/users/${user.id}`, user)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    return(
        <>
            <form onSubmit={submitHandler}>
                <label htmlFor='first_name'>
                    First Name: 
                    <input name='first_name' type='text' value={user.first_name} onChange={changeHandler} />
                </label>
                <label htmlFor='last_name'>
                    Last Name: 
                    <input name='last_name' type='text' value={user.last_name} onChange={changeHandler} />
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
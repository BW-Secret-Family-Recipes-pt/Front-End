import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import axios from 'axios';

const passwordRegex = RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/
);

// setup formSchema
const formSchema = Yup.object().shape({
    username: Yup.string()
        .required('Username is required'),
    password: Yup.string()
        .required('Password is required'),
});

function Signup(props) {
    // setup state
    // form state
    const defaultState = {
        username: '',
        password: '',
    }
    
    const [formState, setFormState] = useState(defaultState);


    // button state
    const [buttonDisabled, setButtonDisabled] = useState(defaultState);
    useEffect (() => {
        formSchema.isValid(formState).then(valid => {
            setButtonDisabled(!valid);
        });
    }, [formState]);

    // error state
    const [errorState, setErrorState] = useState ({
        username: '',
        password: '',
        
    });

    // setup validation
    const validate = e => {
        // determine if checkbox 
        let value = e.target.value;
        // yup validation
        Yup
            .reach(formSchema, e.target.name)
            .validate(value)
            .then(valid => {
                setErrorState({
                    ...errorState,
                    [e.target.name]: ""
                });
            })
            .catch (err => {
                setErrorState({
                    ...errorState,
                    [e.target.name]: err.errors[0]
                });
            });
        };

    // setup onchange function
    const inputChange = e => {
        e.persist();
        validate(e);
        // determine if checkbox 
        let value =
            e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormState({ ...formState, [e.target.name]: value });
    };

    // submit handler replaced with actual API 
    // we need user that logged on
    // we need to get token back
    // Liz probably does this?


    // setup submit function with temp API
    const formSubmit = e => {
        e.preventDefault();
        axios  
            .post("https://family-secret.herokuapp.com/api/login", formState)
            .then(response => {
                console.log(response.data);

                const user = {
                    token: response.data.token,
                    id: response.data.user_id,
                }

                localStorage.setItem('user', JSON.stringify(user))

                props.history.push('/');
            })
            .catch(err => console.log(err));
    };

    return (
        <form onSubmit={formSubmit}>
        <label htmlFor="username">
          Username
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your username here"
            value={formState.username}
            onChange={inputChange}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password here"
            value={formState.password}
            onChange={inputChange}
          />
          {errorState.password.length > 0 ? (
            <p className="error">{errorState.password}</p>
          ) : null}
        </label>
        
        <button disabled={buttonDisabled}>Submit</button>
        <p>New to Secret Family Recipes? <Link to='/signup'>Create an account</Link></p>
      </form>
    )




};



export default Signup;

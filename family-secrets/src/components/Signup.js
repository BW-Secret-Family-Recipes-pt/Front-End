import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const passwordRegex = RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/
);

// setup formSchema
const formSchema = Yup.object().shape({
    username: Yup.string()
        .min(6, "Username must include at least 6 characters")
        .required('Username must include at least 6 characters'),
    email: Yup.string()
        .required('You must provide an email address')
        .email('This is not a valid email adress'),
    password: Yup.string()
        .matches(passwordRegex, 'At least one uppercase letter, one number, and 8 characters'),
    confirm: Yup.string()
        .required('Make sure the passwords match'),
    terms: Yup.boolean()
        .oneOf([true], "You must agree to the terms of use")
});

function Signup() {
    // setup state
    // form state
    const defaultState = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        terms: false
    }
    const [formState, setFormState] = useState(defaultState);


    // button state
    const [buttonDisabled, setButtonDisabled] = useState(true);
    useEffect (() => {
        formSchema.isValid(formState).then(valid => {
            setButtonDisabled(!valid);
        });
    }, [formState]);

    // error state
    const [errorState, setErrorState] = useState ({
        username: '',
        email: '',
        password: '',
        confirm: '',
        terms: false
    });

    // setup validation
    const validate = e => {
        // determine if checkbox 
        let value =
            e.target.type === "checkbox" ? e.target.checked : e.target.value;
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

    // setup submit function with temp API
    const formSubmit = e => {
        e.preventDefault();
        axios  
            .post("http://reqres.in/api/users", formState)
            .then(response => console.log(response))
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
            value={formState.username}
            onChange={inputChange}
          />
          {errorState.username.length > 5 ? (
            <p className="error">{errorState.username}</p>
          ) : null}
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            id="email"
            value={formState.email}
            onChange={inputChange}
          />
          {errorState.email.length > 0 ? (
            <p className="error">{errorState.email}</p>
          ) : null}
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            id="password"
            value={formState.password}
            onChange={inputChange}
          />
          {errorState.password.length > 0 ? (
            <p className="error">{errorState.password}</p>
          ) : null}
        </label>
        <label htmlFor="confirm">
          Confirm password
          <input
            type="password"
            name="confirm"
            id="confirm"
            value={formState.confirm}
            onChange={inputChange}
          />
          {errorState.confirm.length > 0 ? (
            <p className="error">{errorState.confirm}</p>
          ) : null}
        </label>

        
        <label htmlFor="terms">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            checked={formState.terms}
            onChange={inputChange}
          />
          I agree to the Terms and Conditions
          {errorState.terms.length > 0 ? (
            <p className="error">{errorState.terms}</p>
          ) : null}
        </label>
        <button disabled={buttonDisabled}>Submit</button>
      </form>
    )




};



export default Signup;

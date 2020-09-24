import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import styled from 'styled-components';

import image from '../images/woodback.jpg';


// setup formSchema
const formSchema = Yup.object().shape({
    title: Yup.string()
           .required('You must give this recipe a title'),
    source: Yup.string()
           .required('Enter where you got the recipe from'),
    ingredients: Yup.string()
           .required('What goes into the recipe?'),
    instructions: Yup.string()
           .required('How do you make this? What are the steps?'),
    category: Yup.string()
            .required('You must have a category')
   
});

function AddRecipe(props) {
    // setup state
    // form state
    const defaultState = {
       title: '',
       source: '',
       ingredients: '',
       instructions: '',
       category:'',
       user_id: 1
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
    //need to change the checkboxes to a radio setup for the database
    const [errorState, setErrorState] = useState ({
        title: '',
        source: '',
        ingredients: '',
        instructions: '',
        category:'',
        user_id: false
    });

    // setup validation
    const validate = e => {
        
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
        console.log("This is the onInputChange", e.target.name, e.target.value)
        // determine if checkbox 
        //let value =
          //  e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    // setup submit function with temp API
    const formSubmit = e => {
        console.log('this is what is trying to be placed on server',formState)
        e.preventDefault();
        axiosWithAuth()  
            .post("api/recipes", formState)
            .then(response => {
                console.log("this is the API response to the post request", response)
                props.history.push('/dashboard')
            })
            .catch(err => console.log(err));
    };
    const goBack = e =>{
        e.preventDefault();
        props.history.push('/dashboard')
    }
    return (
        <AddDiv style={{backgroundImage:"url(" + image + ")"}}>
            <h2><span>Add A Recipe</span></h2>
            <form onSubmit={formSubmit}>
                <label htmlFor="title">
                Recipe Name: </label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Give the recipe a name"
                    value={formState.title}
                    onChange={inputChange}
                />
                {errorState.title.length > 0 ? (
                    <p className="error">{errorState.title}</p>
                ) : null}
                
                <label htmlFor="source">
                Who/where is the recipe from?</label>
                <input
                    type="text"
                    name="source"
                    id="source"
                    placeholder="e.g. Grandma"
                    value={formState.source}
                    onChange={inputChange}
                />
                {errorState.source.length > 0 ? (
                    <p className="error">{errorState.source}</p>
                ) : null}
                
                <label htmlFor="instructions">
                Ingredients needed</label>
                <textarea
                    name="ingredients"
                    id="ingredients"
                    placeholder="1/2 cup butter, 4 eggs, etc."
                    value={formState.ingredients}
                    onChange={inputChange}
                />
                {errorState.ingredients.length > 0 ? (
                    <p className="error">{errorState.ingredients}</p>
                    ) : null}
                
                
            
                <label htmlFor="instructions">
                Enter the steps to make this recipe </label>
                <textarea
                    name="instructions"
                    id="instructions"
                    placeholder="Step 1: melt butter, Step 2: beat eggs, etc."
                    value={formState.instructions}
                    onChange={inputChange}
                />
                {errorState.instructions.length > 0 ? (
                    <p className="error">{errorState.instructions}</p>
                    ) : null}
                
           
            <label htmlFor="category">
                Category:</label>
                <input
                type="text"
                id="category"
                name="category"
                value={formState.category}
                onChange={inputChange}
                />
                
                {errorState.category.length > 0 ? (
                    <p className="error">{errorState.category}</p>
                    ) : null}

                
                <div className="buttonContainer">
                    <button onClick={goBack}>Go Back to Dashboard</button>
                    <button disabled={buttonDisabled}>Submit</button>
                    
                </div>
             </form>
        </AddDiv>
    )




};

const AddDiv = styled.div`
    text-align:center;
    position:relative;
    margin-top:-45px;
    height:80vh;
    background-position:0% 35%;
    background-size:cover;
    z-index:3;

    h2{
    font-family: 'Satisfy', serif;
      font-size:3rem;
      font-weight:bolder;
      color:#4a3f35;
      opacity:0.8;
      padding-top:6%;
      font-weight:lighter;

      span{
        background-color:white;
        padding:2%;
        border-radius:50% 50% 50% 50% / 49% 49% 51% 51%  ;
        box-shadow:0px 15px 15px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      }
    }
    form{
      white-space:normal;
      background-color:white;
      opacity:0.9;
      border-radius:2px;
      margin:3%;
      padding:2%;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      display:flex;
      flex-direction:column;
      text-align:left;

      .buttonContainer{
          display:flex;
          justify-content:space-evenly;
      }
    }
`

export default AddRecipe;

import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';



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
    breakfast: Yup.boolean(),
    lunch: Yup.boolean(),
    dinner: Yup.boolean(),
    dessert: Yup.boolean(),
    vegetarian: Yup.boolean()
});

function Signup() {
    // setup state
    // form state
    const defaultState = {
       title: '',
       source: '',
       ingredients: '',
       instructions: '',
       breakfast: false,
       lunch: false,
       dinner: false,
       dessert: false,
       vegetarian: false,
       id: Date.now()
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
        title: '',
        source: '',
        ingredients: '',
        instructions: '',
        breakfast: false,
        lunch: false,
        dinner: false,
        dessert: false,
        vegetarian: false
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
        <label htmlFor="title">
          Recipe title
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
        </label>
        <label htmlFor="source">
          Who/where is the recipe from?
          <input
            type="text"
            name="source"
            id="source"
            placeholder="Where'd you get the recipe? e.g. Grandma"
            value={formState.source}
            onChange={inputChange}
          />
          {errorState.source.length > 0 ? (
            <p className="error">{errorState.source}</p>
          ) : null}
        </label>
         <label htmlFor="instructions">
        Ingredients needed
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
        
        </label>
      
        <label htmlFor="instructions">
          Enter the steps to make this recipe
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
        
      </label>
      <label htmlFor="breakfast">
        <input
          type="checkbox"
          id="breakfast"
          name="breakfast"
          checked={formState.breakfast}
          onChange={inputChange}
        />
        Breakfast 
    
      </label>
      <label htmlFor="lunch">
        <input
          type="checkbox"
          id="lunch"
          name="lunch"
          checked={formState.lunch}
          onChange={inputChange}
        />
        Lunch
      </label>
      <label htmlFor="dinner">
        <input
          type="checkbox"
          id="dinner"
          name="dinner"
          checked={formState.dinner}
          onChange={inputChange}
        />
        Dinner
      </label>
      <label htmlFor="dessert">
        <input
          type="checkbox"
          id="dessert"
          name="dessert"
          checked={formState.dessert}
          onChange={inputChange}
        />
        Dessert
      </label>
      <label htmlFor="vegetarian">
        <input
          type="checkbox"
          id="vegetarian"
          name="vegetarian"
          checked={formState.vegetarian}
          onChange={inputChange}
        />
        Vegetarian
      </label>

        
       
        <button disabled={buttonDisabled}>Submit</button>
      </form>
    )




};



export default Signup;

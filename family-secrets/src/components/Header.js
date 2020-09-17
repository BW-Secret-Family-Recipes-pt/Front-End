import React from 'react';
import styled from 'styled-components';


function Header () {

    return(
        <HeaderDiv>
            <div className="logo">Secret Family Recipe Cookbook</div>
            <div className="nav">
                <div className="navbutton">Add Article</div>
                <div className="navbutton">Profile</div>
            </div>
        </HeaderDiv>
    )
};
const HeaderDiv = styled.div`
    display:flex;
    justify-content:space-evenly;
    background-color: #fa7d09;
    color:white;
    padding-bottom:1%;
    
    .logo{
       font-size:1.8rem;
       font-family:'Pacifico', cursive; 
    }
    .nav{
        display:flex;
        
       
        .navbutton{
            border: 1px solid black;
            margin:2%;
            border-radius: 5px;
            color:black;
            font-weight:bold;
            padding:3%;
            background-color: #fa7d09;
        }
    }
    
`

export default Header;
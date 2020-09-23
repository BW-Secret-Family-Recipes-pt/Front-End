import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { id } from '../utils/ParseLocalStorage';


function Header () {
    
    // let id = ''

    // if (localStorage.getItem('user')) {
    // const userID = JSON.parse(localStorage.getItem('user'));
    // id = userID.id;
    // }

    return(
        <HeaderDiv>
            <div className="logo">Secret Family Recipe Cookbook</div>
            <div className="nav">
                <div className="navbutton"><Link to="/recipe" className="headerLinks">Add Article</Link></div>
                <div className="navbutton"><Link to={`/user/${id}`} className="headerLinks">Profile</Link></div>
            </div>
        </HeaderDiv>
    )
};
const HeaderDiv = styled.div`
    display:flex;
    justify-content:space-evenly;
    background-color: #fa7d09;
    color:white;
    padding-bottom:2%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      
    
    .logo{
       font-size:1.2rem;
       font-family:'Playfair Display', serif; 
       margin-top:1%;
       margin-left:3%;
       text-shadow: 1px 1px 2px #000000;
       flex-grow:2; 
    }
    .nav{
        display:flex;
        
       
        .navbutton{
            width:10vw;
            margin-top:6%;
            background-color: #fa7d09;
            
            .headerLinks{ 
                margin-top:1%;
                text-decoration:none;
                color:white;
                font-size:1rem;
                font-family:"Playfair Display", serif;
                text-shadow: 1px 1px 1px #000000;
                &:hover{
                    text-decoration:underline;
                }
            }
        }
    }
    
`

export default Header;
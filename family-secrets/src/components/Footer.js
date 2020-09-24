import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Footer () {

    return(
        <FooterDiv>
            <Link to="/" className="LinkBottom"><span className="logoBottom">Secret Family Secrets Cookbook</span></Link>
            <div className="links">
                <Link to="/">Login</Link>
                <Link to="/dashboard">Current Recipes</Link>
                <Link to="/addrecipe">Add A Recipe</Link>
                <a href="https://htmlpreview.github.io/?https://github.com/BW-Secret-Family-Recipes-pt/Marketing-Page/blob/marketing/aboutblog/about.html" alt="About">About</a>
                <a href="https://htmlpreview.github.io/?https://github.com/BW-Secret-Family-Recipes-pt/Marketing-Page/blob/marketing/aboutblog/blog.html" alt="Check out our blog!">Blog</a>
            </div>
            <br/>
            <br />
            <br/>
            <div className="copy">&copy; 2020 Secret Family Recipe Cookbook</div>
            
        </FooterDiv>
    )
};
const FooterDiv = styled.div`
    background-color:#4a3f35;
    height:15vh;
    color:white;
    font-size:0.5rem;
    text-align:center;
    padding:4%;
    margin-bottom:-5px;
    box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2), 6px 6px 40px 0 rgba(0, 0, 0, 0.19);
      

    .links{
                       
        display:flex;
        text-align:center;
        justify-content:center;
        
        a{
            text-decoration:none;
            color:white;
            margin-right:1%;
        }
    
    }
    .LinkBottom{
        text-decoration:none;
        color:white;

        &:hover{
            color:orange;
        }
        
        .logoBottom{
            font-family: 'Satisfy', cursive;
            font-size:1.5rem;
            font-weight:lighter;

            

        }

    }
    
`
export default Footer;
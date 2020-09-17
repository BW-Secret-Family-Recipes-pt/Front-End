import React from 'react';
import styled from 'styled-components';

function Footer () {

    return(
        <FooterDiv>
            <div className="footerlogo">&copy; Secret Family Recipe Cookbook</div>
           
        </FooterDiv>
    )
};
const FooterDiv = styled.div`
    background-color:#4a3f35;
    height:15vh;
    color:white;
    font-size:1.0rem;
    text-align:center;
    padding:4%;
`
export default Footer;
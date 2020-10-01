import React from 'react'
import styled from 'styled-components';
import 'normalize.css';

import Nav from './Nav';
import Footer from './Footer';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

const StyledBorder = styled.div`
    max-width: 1000px;
    margin: 12rem auto 4rem auto;
    margin-top: clamp(2rem, 10vw, 12rem);
    /* background: white; */
    padding: 5px;
    padding: clamp(5px, 1vw, 25px);
    /* box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.14); */
    /* @media(max-width: 1100px) {
        margin-left: 1.5rem;d
        margin-right: 1.5rem;
    } */
    
`

const StyledContent = styled.div`
        max-width:1000px;
        /* margin: 6rem auto 1rem auto; */
`;

const Layout = ({ children }) => {
   return ( 
   <>
        <GlobalStyles />
        <Typography />
        <StyledBorder>
        <StyledContent>
            <Nav />
            { children }
            <Footer />
        </StyledContent>
        </StyledBorder>
   </>)
}

export default Layout;
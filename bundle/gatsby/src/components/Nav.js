import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from './Logo';
import border from '../assets/images/borders/border_transparent_plum.svg';

const StyledNav = styled.nav`

    /* background: white; */
    /* box-shadow: 0 0 3px 5px rgba(0,0,0,0.044); */
    margin-bottom: 3rem;
    border: 50px solid transparent;
    border-image: url(${border}) 25% 30% 10% 20% repeat;
    border-image-slice: 65;

    ul {
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: 1fr 1fr auto 1fr 1fr;
        text-align: center;
        list-style-type: none;
        grid-gap: 2rem;
        align-items: center;
        /* margin-top: -6rem; */
    }
    li {
        order: 1;
        max-height:8em;
    }
    a {
        font-size: 3rem;
        text-decoration: none;
        &:hover {
            color: var(--plum);
        }
        &[aria-current="page"] {
            color: var(--plum);
        }
    }
    
`

const Nav = () => {
    return (
    <StyledNav className="border">
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li className="logo-item">
                <Link to="/">
                    <Logo />
                </Link>
            </li>
            <li>
                <Link to="/merch">Merch</Link>
            </li>
            <li>
                <Link to="/foos">Foos</Link>
            </li>
        </ul>
    </StyledNav>
    )
}

export default Nav;
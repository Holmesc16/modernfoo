import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components'
import Logo from './Logo'

const StyledNav = styled.nav`
    background:white;
    box-shadow: 0 0 3px 5px rgba(0, 0, 0, 0.044);
    margin-bottom: 3rem;
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
    <StyledNav>
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
import React from 'react';
import styled from 'styled-components';
import stripes from '../assets/images/stripes.svg';
import LogoImage from '../assets/images/Logo.svg'; //foo_1.png

const StyledLogo = styled.div`
    font-size:6px;
    font-size: clamp(1px, 0.65vw, 8px);
    width: 30rem;
    height: 30rem;
    box-shadow: 0 0 10px rgba(var(--plum));
    margin: 0;
    --borderSize:1em;
    /* background: white url(${stripes}) */
    /* background-size: 150em; */
    /* border: var(--borderSize) solid white; */
    display: flex;
    .inner {
        margin: var(--borderSize);
        flex: 1;
        /* background: var(--plum); */
        display: grid;
        grid-template-rows: 20% 1fr 1fr;
        align-content: center;
    }
    .est {
        font-size: 1.5em;
        align-self: center;
    }
    h1 {
        display: grid;
        grid-template-rows: 8fr 2fr;
        align-items: center;
        margin: 0;
        grid-row: 2 / span 2;
        grid-gap: 2em;
        transform: translateY(0.7em);
    }
`

const Logo = () => {
    return (
        <StyledLogo className="logo">
            <div className="inner">
                <img className="logo-img" src={LogoImage} />
            </div>
        </StyledLogo>
    )
}

export default Logo;

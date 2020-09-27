import { createGlobalStyle } from 'styled-components';
import bg from '../assets/images/cosas.png' //'../assets/images/bg.svg';
import stripes from '../assets/images/stripes.svg';

const GlobalStyles = createGlobalStyle`
    :root {
        --black: #2E2E2E;
        --gray: #999;
        --lightgray: #ddd;
        --white: #fff;
        --plum: #734b5E;
        --fooblue: #071882; 
    }

    html {
        background-image: url(${bg});
        background-size: 950px;
        background-attachment: fixed;
        font-size: 10px;
    }

    body {
        font-size: 2rem;
    }

    fieldset {
        border-color: rgba(0, 0, 0, 0.1);
        border-width: 1px;
    }

    button {
        background: var(--black);
        color: white;
        border: 0;
        padding: 0.6rem 1rem;
        border-radius: 2px;
        cursor: pointer;
        --cast: 2px;
        box-shadow: var(--cast) var(--cast) 0 var(--plum);
        text-shadow: 0.5px 0.5px 0 rgba(0, 0, 0, 0.2);
        transition: all 0.2s;
        &:hover {
            --cast: 4px;
        }
    }

    /* .gatsby-image-wrapper img[src*=base64\\] {
        image-rendering: -moz-crisp-edges;
        image-rendering: pixelated;
    } */

    /* scrollbar styles */
    body::-webkit-scrollbar {
        width: 12px;
    }
    html {
        scrollbar-width: 12px;
        scrollbar-color: var(--plum) var(--white);
    }
    body::-webkit-scrollbar-track {
        background: var(--white);
    }
    body::-webkit-scrollbar-thumb {
        background-color: var(--plum);
        border-radius: 6px;
        border: 3px solid var(--lightgray)
    }

    hr {
        border: 0;
        height: 8px;
        background-image: url()(${stripes});
        background-size: 1500px;
    }

    img {
        max-width: 100%;
    }
`;

export default GlobalStyles;

import { createGlobalStyle } from 'styled-components';
import bg from '../assets/images/bg.svg';
import stripes from '../assets/images/stripes.svg';

const GlobalStyles = createGlobalStyle`
    :root {
        --black: #2E2E2E;
        --gray: #999;
        --lightgray: #ddd;
        --white: #fff;

        --fooblue: #071882; 
    }

    html {
        background-image: url(${bg});
        background-size: 450px;
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
        box-shadow: var(--cast) var(--cast) 0 var(--lightgray);
        text-shadow: 0.5px 0.5px 0 rgba(0, 0, 0, 0.2);
        transition: all 0.2s;
        &:hover {
            --cast: 4px;
        }
    }
`;

export default GlobalStyles;

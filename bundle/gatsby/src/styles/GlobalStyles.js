import { createGlobalStyle } from 'styled-components';
import bg from '../assets/images/cosas.png';
import stripes from '../assets/images/stripes.svg';
import border from '../assets/images/borders/border_transparent_plum.svg';

const GlobalStyles = createGlobalStyle`
    :root {
        --black: #2E2E2E;
        --gray: #999;
        --lightgray: #ddd;
        --white: #fff;
        --plum: #734b5E;
        --fooblue: #071882;
        --charcoal: #4c4c4c;
    }

    html {
        background-image: url(${bg});
        background-size: 950px;
        background-attachment: fixed;
        font-size: 10px;
        border-image: url(${border}) 25% 30% 10% 20% repeat;
    }

    body {
        font-size: 2rem;
        /* background: white; */
        /* box-shadow: 0 0 3px 5px rgba(0,0,0,0.044); */
        margin-bottom: 3rem;
        border: 50px solid transparent;
        border-image: url(${border}) 25% 30% 10% 20% repeat;
        border-image-slice: 65;
        min-height: 100vh;
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
        // font-family: 'Fenwick';
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
    .tags {
    display: flex;
    padding-left:12px;
    li {
      display: inline-block;
      height: 24px;
      line-height: 24px;
      position: relative;
      margin: 0 16px 8px 0;
      padding: 0 10px 0 12px;
      background: var(--charcoal);
      -webkit-border-bottom-right-radius: 3px;
      border-bottom-right-radius: 3px;
      -webkit-border-top-right-radius: 3px;
      border-top-right-radius: 3px;
      -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
      color: #fff;
      text-decoration: none;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
      font-weight: bold;
    }
    li:before {
      content: '';
      position: absolute;
      top: 0;
      left: -12px;
      width: 0;
      height: 0;
      border-color: transparent var(--charcoal) transparent transparent;
      border-style: solid;
      border-width: 12px 12px 12px 0;
    }

    li:after {
      content: '';
      position: absolute;
      top: 10px;
      left: 1px;
      float: left;
      width: 5px;
      height: 5px;
      -webkit-border-radius: 50%;
      border-radius: 50%;
      background: #fff;
      -webkit-box-shadow: -1px -1px 2px rgba(0, 0, 0, 0.4);
      box-shadow: -1px -1px 2px rgba(0, 0, 0, 0.4);
    }
  }
`;

export default GlobalStyles;

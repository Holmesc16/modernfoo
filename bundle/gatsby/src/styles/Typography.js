import { createGlobalStyle } from 'styled-components';

// Old English Display Font
import fenwick from '../assets/fonts/display/fenwick.woff'
import chivoItalic from '../assets/fonts/text/chivoitalic.woff'

const Typography = createGlobalStyle`
    @font-face {
        font-family: Fenwick;
        src: url(${fenwick});
    }
    @font-face {
        font-family: ChivoItalic;
        src: url(${chivoItalic});
    }

    html {
        font-family: ChivoItalic, -apple--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: var(--black);
    }
    h1 {
        font-family: Fenwick, display, cursive, 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-weight: normal;
        margin:0;
        letter-spacing: 0.5px;
    }
    a {
        color: var(--black);
        text-decoration-color: var(--plum);
        text-decoration-skip-ink: none;
    }
    mark, .mark {
        background: var(--plum);
        padding: 0 4px 4px 4px;
        margin: 0;
        display: inline;
        line-height: 1;
        color:white;
    }

    .center {
        text-align: center;
    }
`

export default Typography;
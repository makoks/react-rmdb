import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --maxWidth: 1280px;
        --white: #fff;
        --lightGrey: #eee;
        --medGrey: #353535;
        --darkGrey: #1c1c1c;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
    }

    * {
        box-sizing: border-box;
        font-family: Abel, sans-serif;
    }

    body {
        margin: 0;
        padding: 0;

        #root {
            padding-bottom: 50px;
        }

        h1 {
            font-size: 2rem;
            font-weight: 600;
            color: var(--white);
            margin-top: 0.67rem;
            margin-bottom: 0.67rem;
        }

        h3 {
            font-size: 1.1rem;
            font-weight: 600;
            margin-top: 1rem;
            margin-bottom: 1rem;
        }

        p {
            font-size: 1rem;
            color: var(--white);
            margin-top: 1rem;
            margin-bottom: 1rem;
        }
    }
`

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --black: #29292E;
    /* --shadow: #050206; */
    --purple: #835AFD;
    /* --danger: #E73F5D; */

    --gray-dark: #737380;
    /* --gray-medium: #A8A5B3; */
    --gray-light: #DBDCDD;

    --white-background: #F8F8F8;
    --white-details: #FEFEFE;

    --pink-dark: #E559F9;
    /* --pink-light: #D67EE2; */

    /* --hover-purple: #6F4BD8; */
    /* --hover-danger: #D73754; */
    /* --hover-grayMedium: #7E7E86; */
    /* --hover-grayLight: #CECECE; */
  }

  body {
    background: var(--white-background);
    color: var(--black);
  }

  body, input, button, textarea {
    font: 400 16px 'Roboto', sans-serif;
  }
`;
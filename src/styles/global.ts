import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    /* --black: #29292E;

    /* --color_50: #737380; */
    /* --gray-medium: #A8A5B3; */
    /* --color_80: #DBDCDD; */

    /* --background: #F8F8F8;
    --white-details: #FEFEFE; */

    --black: black;
    --white: white;
    --gray: lightgray;
    --shadow: #050206CC;
    --danger: #E73F5D; 
    --hover-danger: #D73754;

    --background: ${props => props.theme.colors.background};
    --white-details:  ${props => props.theme.colors.details};;

    --primary: #835AFD;
    --primary-hover: #6F4BD8;
    --primary_transparent: #835AFD40; 
/*     
    100% — FF
    95% — F2
    90% — E6
    85% — D9
    80% — CC
    75% — BF
    70% — B3
    65% — A6
    60% — 99
    55% — 8C
    50% — 80
    45% — 73
    40% — 66
    35% — 59
    30% — 4D
    25% — 40
    20% — 33
    15% — 26
    10% — 1A
    5% — 0D
    0% — 00 */


    --color: ${props => props.theme.colors.color};
    --color_15: ${props => props.theme.colors.color_15};
    --color_50: ${props => props.theme.colors.color_50};
    --color_80: ${props => props.theme.colors.color_80};


    /* --pink-dark: #E559F9; */
    /* --pink-light: #D67EE2; */

    /* --primary-hover: #6F4BD8; */
    /* --hover-grayMedium: #7E7E86; */
    /* --hover-grayLight: #CECECE; */
  }

  body {
    background: var(--background);
    color: var(--color_80);
  }

  body, input, button, textarea {
    font: 400 16px 'Roboto', sans-serif;
  }
`;
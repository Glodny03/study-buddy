import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
/* @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Poppins:wght@400;500;600&display=swap'); */

html {
    box-sizing: border-box;
}

*, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

body {
    font-family: "Montserrat", sans-serif;
}

a, button {
    font-family: 'Montserrat', sans-serif;
}
`;

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  -webkit-tap-highlight-color: transparent;
}

:focus {
  outline: none;
}

:root {
  --color-primary: ${props => props.theme.colors.primary};
  --color-secondary: ${props => props.theme.colors.secondary};
  --color-black: ${props => props.theme.colors.black};
  --color-white: ${props => props.theme.colors.white};
  --color-text: ${props => props.theme.colors.text};
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body {
  font-family: 'Robot', sans-serif;
  box-sizing: inherit;
  font-weight: 400;
  line-height: 1.6rem;
}

a, 
input, 
button {
  cursor: pointer;
  outline: none;
  text-decoration: none;
  font-family: inherit;
}`;

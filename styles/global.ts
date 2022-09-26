import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    border: 0;
    margin: 0;
    user-select: none;
    text-decoration: none;
    outline: none;
  }

  body {
    min-width: 310px;
    font-family: 'Poppins', sans-serif;
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.background};
  }

  a, input {
    font-family: 'Poppins', sans-serif;
    color: ${props => props.theme.colors.text};
  }
`

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  a {
    color: #111111;
    font-weight: bold;
    text-decoration: none;
    &:hover {
      color: #9D9899;
    }
  }
`

export default GlobalStyle

import React from 'react'
import { StylesProvider } from '@material-ui/core/styles'
import AppContainer from './blocks/AppContainer/AppContainer'
import Header from './elements/Header'
import styled from 'styled-components'

const Link = styled.a`
  &:link {
    color: inherit;
    cursor: pointer;
  }
  &:visited {
    text-decoration: inherit;
    color: inherit;
    cursor: auto;
  }
`
const App = () => {
  return (
    <>
      <StylesProvider injectFirst>
        <Header position="static">
          <Link
            rel="noreferrer noopener"
            href="https://github.com/vaibhavmande/sugar-log"
            target="_blank"
          >
            Sugar log
          </Link>
        </Header>
        <AppContainer />
      </StylesProvider>
    </>
  )
}

export default App

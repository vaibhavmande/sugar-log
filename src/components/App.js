import React from 'react'
import { StylesProvider } from '@material-ui/core/styles'
import AppContainer from './blocks/AppContainer/AppContainer'
import Header from './elements/Header'

const App = () => {
  return (
    <>
      <StylesProvider injectFirst>
        <Header position="static">Sugar log</Header>
        <AppContainer />
      </StylesProvider>
    </>
  )
}

export default App

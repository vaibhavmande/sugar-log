import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      "'Segoe UI'",
      "'Roboto'",
      "'Oxygen'",
      "'Ubuntu'",
      "'Cantarell'",
      "'Fira Sans'",
      "'Droid Sans'",
      "'Helvetica Neue'",
      'sans-serif',
    ].join(','),
  },
})

export default theme

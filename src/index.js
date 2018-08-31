import React from 'react'
import App from './App'
import ReactDOM from 'react-dom'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider'
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00C7B1', // brand primary
      dark: '#009484', // brand primary dark
      contrastText: 'rgb(253, 253, 253)',
    },
    secondary: {
      main: '#FDFDFD', // brand white
      // dark: '#898989', // brand grey dark
      dark: '#F2F2F2', // brand grey medium
      contrastText: 'rgb(0, 199, 177)', // primary
    },
  },
  textPrimary: {
  
  },
  typography: {
    // Tell Material-UI what's the font-size on the html element is.
    htmlFontSize: 14,
  },
})

function Root() {
  return (
    <MuiThemeProvider theme={theme} >
      <MuiPickersUtilsProvider utils={DateFnsUtils} >
        <App />
      </MuiPickersUtilsProvider>
    </MuiThemeProvider>
  )
}
ReactDOM.render(<Root />, document.querySelector('#root'));

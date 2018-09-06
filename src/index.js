import React from 'react'
import App from './App'
import ReactDOM from 'react-dom'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider'
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils'
import './index.css'

const theme = createMuiTheme({
  palette: {
    common: {
      black: '#4F4F4F',
      white: '#FDFDFD',
    },
    type: 'light',
    primary: {
      main: '#00C7B1', // brand primary
      dark: '#009484', // brand primary dark
      ligth: '#FDFDFD',
      contrastText: 'rgb(253, 253, 253)',
    },
    secondary: {
      main: '#E6E6E6',
      // light: '#898989', // brand grey dark
      dark: '#BFBFBF', // brand grey medium
      contrastText: 'rgb(79, 79, 79)', // primary
    },
    error: {
      main: '#F45353',
      light: '#F5C4C4',
    },
    grey: {
      50: '#F2F2F2',
      100: '#E6E6E6',
      200: '#BFBFBF',
      300: '#898989',
    },
    text: {
      primary: '#4F4F4F',
      secondary: '#898989',
      disbaled: '#BFBFBF',
      hint: '#00C7B1',
    },
    background: {
      paper: '#FDFDFD',
      default: '#FDFDFD',
    },
    // action: {
    //   active:
    //   hover:
    //   hoverOpacity:
    //   selected:
    //   disbaled:
    //   disbaledBackhground:
    // }
  },
  typography: {
    htmlFontSize: 14,
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    display1: { //h1
      fontSize: '45px',
      lineHeight: '58px',
      fontWeight: 700,
    },
    display2: { // h2
      fontSize: '35px',
      lineHeight: '45px',
      fontWeight: 700,
    },
    display3: { // h3
      fontSize: '25px',
      lineHeight: '32px',
      fontWeight: 700,
    },
    title: { // h4
      fontSize: '19px',
      lineHeight: '24px',
      fontWeight: 700,
    },
    headline: { // h5
      fontSize: '16px',
      lineHeight: '20px',
      fontWeight: 700,
    },
    subheading: { // h6
      fontSize: '14px',
      lineHeight: '18px',
      fontWeight: 700,
    },
    body1: {
      fontSize: '14px',
      color: '#4F4F4F',
      lineHeight: '23px',
      margin: 0,
    },
    body2: {
      fontSize: '16px',
      color: '#4F4F4F',
      lineHeight: '27px',
    }, 
    caption: {
      fontSize: '12px',
      color: '#4F4F4F',
      lineHeight: '20px',
    },
    button: {
      fontSize: '16px',
      lineHeight: '18px',
    }
  },
  shape: {
    borderRadius: 4,
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

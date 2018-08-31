import React, { Component } from 'react'
import NavBar from './Theme-Components/NavBar'
import Paper from '@material-ui/core/Paper';
import Date from './Components/Date'
import CarDetails from './Components/CarDetails'
import DamageReport from './Components/DamageReport'

const style = {
  divider: {
    margin: '30px 0'
  }
}

class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <Paper style={{ padding: '40px 30px', backgroundColor: '#fdfdfd'}}> 
          <Date />
          <div style={style.divider} />
          <CarDetails />
          <div style={style.divider} />
          <DamageReport />
        </Paper>
     </div>
    );
  }
}

export default App

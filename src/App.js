import React, { Component } from 'react'
import NavBar from './Theme-Components/NavBar'
import Date from './Components/Date'
import CarDetails from './Components/CarDetails'
import DamageReport from './Components/DamageReport'
import { Grid, Divider } from '../node_modules/@material-ui/core';
import Header from './Components/Header';

const style = {
  divider: {
    margin: '30px 0'
  },
  grid: {
    alignItems: 'center',
    flexDirection: 'column',
    padding: 0,
    marginTop: 24,
  },
}

class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <Divider />
        <Grid container style={style.grid} >
          <Grid item xs={6}>
            <Header />
            <div style={style.divider} />
            <CarDetails />
            {/* <Date /> */}
            {/* <DamageReport /> */}
          </Grid>
        </Grid>
     </div>
    );
  }
}

export default App

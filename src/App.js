import React, { Component } from 'react'
import NavBar from './Theme-Components/NavBar'
import DamageReport from './Components/DamageReport'
import { Grid, Divider } from '../node_modules/@material-ui/core'
import Header from './Components/Header'

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
        <Grid 
          container 
          spacing={24}
          justify="center"
          style={style.grid} >
          <Grid item lg={6} md={8} sm={10} xs={10}>
            <Header />
            <div style={style.divider} />
            <DamageReport />
            <div style={style.divider} />
          </Grid>
        </Grid>
     </div>
    );
  }
}

export default App

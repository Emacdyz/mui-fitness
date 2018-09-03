import React, { Component } from 'react'
import NavBar from './Theme-Components/NavBar'
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
        <div style={{ margin: 20 }}>
          <Date />
          <div style={style.divider} />
          <CarDetails />
          <div style={style.divider} />
          <DamageReport />
        </div>
     </div>
    );
  }
}

export default App

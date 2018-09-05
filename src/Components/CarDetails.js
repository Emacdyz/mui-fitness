import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Date from './Date'
import { IconButton } from '../../node_modules/@material-ui/core'
import Slide from '@material-ui/core/Slide'
import DamageReport from './DamageReport'

const style = {
  divider: {
    margin: '30px 0'
  },
}

class CarDetails extends Component {
  state = {
    checked: false,
  }

  handleClick = () => {
    this.setState(state => ({ checked: !state.checked }));
  }

  render() {
    const { checked } = this.state
    return (
      <div>
        <Typography variant="display3" color="primary">
          Car details
        </Typography>
        <Typography variant="body1" >
          What is your license plate?
        </Typography>
        <TextField 
          id="license-plate"
          label="NL -"
          placeholder="01GBB1"
          style={{ width: '20%', margin: '20px 5px' }}
        />
        <IconButton onClick={this.handleClick} color="primary">
          <img src="./search.svg" height='40px' alt="search" />
        </IconButton>
        <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
          <Date />
        </Slide> 
        <div style={style.divider} />    
        <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
          <DamageReport />
        </Slide>     
     </div>
    );
  }
}

export default CarDetails
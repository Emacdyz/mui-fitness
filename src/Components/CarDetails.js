import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

class CarDetails extends Component {

  render() {
    
    return (
      <div>
        <Typography variant="title" color="primary">
          Car details
        </Typography>
        <Typography variant="body1" color="secondary-dark" style={{marginTop: 10}}>
          What is your license plate?
        </Typography>
        <TextField 
          id="license-plate"
          label="NL -"
          placeholder="01GBB1"
          style={{ width: '30%', margin: '20px 5px' }}
        />
     </div>
    );
  }
}

export default CarDetails
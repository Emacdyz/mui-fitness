import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'

class Header extends Component {

  render() {
    return (
      <div>
        <Typography variant="display3" color="primary">
          Report your car damage online
        </Typography>
        <Typography variant="body1" >
          Please report your car damage using the easy to fill in form below.
          After reviewing the submitted damage report, we will be in contact with you regarding the next steps of the damage handling process.
        </Typography>
     </div>
    );
  }
}

export default Header
import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import TextField from '@material-ui/core/TextField'

class Description extends Component {

  render() {
    return (
      <div>
        <Typography variant="display3" color="primary">
          Describe you damage
        </Typography>
        <Typography variant="body1" >
          A clear description of the damage helps us to assess your car damage properly.
        </Typography>
        <ExpansionPanel style={{ margin: '10px 0'}}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subheading">What should be in the description? </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{ display: 'block' }}>
            <Typography variant="body1">
              • The location of the damage(s) and the damaged panels (e.g. left front door, left side skirt etc…)
            </Typography>
            <Typography variant="body1">
              • The type of damage (e.g. dent, scratch, broken part etc…)
            </Typography>
            <Typography variant="body1">
              • The size of the damage (e.g. 5 cm)
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <TextField
          id="multiline-flexible"
          label="Description"
          multiline
          rowsMax="8"
          placeholder="Scratch on the left door"
          margin="normal"
          fullWidth
        />
     </div>
    )
  }
}

export default Description
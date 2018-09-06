import React, { Component } from 'react'
import { InlineDatePicker } from 'material-ui-pickers/DatePicker'
import Typography from '@material-ui/core/Typography';

class DatePicker extends Component {
  state = {
    selectedDate: '2018-01-01T00:00:00.000Z',
  }

  handleDateChange = (date) => {
    this.setState({ selectedDate: date })
  }

  render() {
    const { selectedDate } = this.state
    return (
      <div>
        <Typography variant="display3" color="primary">
          Report your car damage online
        </Typography>
        <Typography variant="body1" >
          Please report your car damage using the easy to fill in form below.
          After reviewing the submitted damage report, we will be in contact with you regarding the next steps of the damage handling process.
        </Typography>
        <InlineDatePicker
          keyboard
          label="Date of the occurrence of the damage"
          value={selectedDate}
          onChange={this.handleDateChange}
          style={{ width: '308px', paddingBottom: '10px', margin: '20px 5px' }}
        />
     </div>
    )
  }
}

export default DatePicker
import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import { damagePicture, damageText, damageTitle } from '../data'
import Input from '@material-ui/core/Input'

class Pictures extends Component {

  render() {
    return (
      <div>
        <Typography variant="display3" color="primary">
          Damage Report
        </Typography>
        <Typography variant="body1" style={{ marginTop: 12 }} >
          Add at least 3 clear photos of your damage as described in the box below.
        </Typography>
        <Grid
          container
          direction="row"
          justify="center"
          spacing={24}
          style={{ marginTop: 12 }}
        >
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <Card style={{ minHeight: '100%' }}>
              <CardMedia
                component="img"
                height="140"
                image={damagePicture[1]}
              />
              <CardContent>
                <Typography variant="subheading"> {damageTitle[1]} </Typography>
                <Typography variant="body1"> {damageText[1]} </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <Card style={{ minHeight: '100%' }}>
              <CardMedia
                component="img"
                height="140"
                image={damagePicture[2]}
              />
              <CardContent>
                <Typography variant="subheading"> {damageTitle[2]} </Typography>
                <Typography variant="body1"> {damageText[2]} </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <Card style={{ minHeight: '100%' }}>
              <CardMedia
                component="img"
                height="140"
                image={damagePicture[3]}
              />
              <CardContent>
                <Typography variant="subheading"> {damageTitle[3]} </Typography>
                <Typography variant="body1"> {damageText[3]} </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <div style={{ display: 'inline-flex', margin: '40px 10px 20px 10px', alignItems: 'center'}}> 
          <Button variant="fab" color="primary">
            <Input type="file" name="myInput" id="myInput" margin="dense" style={{ opacity: 0, position: 'absolute', marginLeft: 134 }}/>
            <AddIcon />
          </Button>
          <Typography variant="body2" style={{ paddingLeft: 10 }}> Add your pictures </Typography>
        </div>
      </div>
    )
  }
}

export default Pictures
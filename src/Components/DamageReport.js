import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import { damage, damagePicture, damageText, damageTitle } from '../data'

const styles = {
  card: {
    width: '20%',
  },
  cardDisplay: {
    display: 'flex',
    justifyContente: 'space-between',
    width: '100%',
  }
};

class DamageReport extends Component {

  render() {
    console.log(damage)
    return (
      <div>
        <Typography variant="title" color="primary">
          Damage Report
        </Typography>
        <Typography variant="subheading" color="primary" style={{marginTop: 10}}>
          Add at least 3 clear photos of your damage as described in the box below.
        </Typography>
        <div style={styles.cardDisplay}>
        <Card style={styles.card}>
        <CardMedia
          component="img"
          height="140"
          image={damagePicture[1]}
        />
        <CardContent>
          <Typography variant="body1" component="p"> {damageTitle[1]} </Typography>
          <Typography component="p"> {damageText[1]} </Typography>
        </CardContent>
      </Card>
      <Card style={styles.card}>
        <CardMedia
          component="img"
          height="140"
          image={damagePicture[2]}
        />
        <CardContent>
          <Typography variant="body1" component="h2"> {damageTitle[2]} </Typography>
          <Typography component="p"> {damageText[2]} </Typography>
        </CardContent>
      </Card>
      <Card style={styles.card}>
        <CardMedia
          component="img"
          height="140"
          image={damagePicture[3]}
        />
        <CardContent>
          <Typography variant="body1" component="h2"> {damageTitle[3]} </Typography>
          <Typography component="p"> {damageText[3]} </Typography>
        </CardContent>
      </Card>
        </div>
     </div>
    );
  }
}

export default DamageReport
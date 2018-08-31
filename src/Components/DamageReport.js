import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import { damage } from '../data'

const styles = {
  card: {
    width: '25%',
  },
  cardDisplay: {
    display: 'flex',
    justifyContente: 'space-between',
  }
};

class DamageReport extends Component {

  renderCard = (damage) => {
    console.log(damage) 
    return (
      <Card className={styles.card}>
        <CardMedia
          component="img"
          // className={classes.media}
          height="140"
          // image={damage}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {/* {damageTitle} */}
          </Typography>
          <Typography component="p">
            {/* {damageText} */}
          </Typography>
        </CardContent>
      </Card>
    )
  }

  render() {
    console.log(damage.map(dam => this.renderCard(dam)))
    return (
      <div>
        <Typography variant="title" color="primary">
          Damage Report
        </Typography>
        <Typography variant="subheading" color="primary" style={{marginTop: 10}}>
          Add at least 3 clear photos of your damage as described in the box below.
        </Typography>
        <div style={styles.cardDisplay}>
          {/* {damage.map(dam => this.renderCard(dam))} */}
        </div>
     </div>
    );
  }
}

export default DamageReport
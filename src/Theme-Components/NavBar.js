import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'

const styles = {
  root: {
    flexGrow: 1,
  },
  bar: {
    display: 'inline-flex',
    width: '100%',
    justifyContent: 'space-around',
  },
  menuButton: {
    marginLeft: 20,
  },
}

const NavBar = props => {
  const { classes } = props
  return (
    <div className={classes.root}>
      <AppBar position="sticky" color="secondary" style={{ boxShadow: 'none' }}>
        <Toolbar style={styles.bar }>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <img src="./fixico-logo.svg" height='40px' alt="logo" />
            {/* <img src="./aon-logo.svg" height='40px' alt="logo" /> */}
          </IconButton>
          <Button color="inherit">EN | NL</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(NavBar);
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
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
      <AppBar position="static" color="inherit" style={{ boxShadow: 'none' }}>
        <Toolbar style={styles.bar }>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <img src="./fixico-logo.svg" height='40px' alt="logo" />
            {/* <img src="./aon-logo.svg" height='40px' alt="logo" /> */}
          </IconButton>
          <div>
            <Button
              color="inherit"
              // href="https://aon.business.fixico-staging.nl/?lang=en"
              style={{ padding: 6, minWidth: 0 }}>EN</Button>
            <Button
              color="inherit"
              style={{ padding: 6, minWidth: 0 }}>FR</Button>
            <Button
              color="inherit"
              style={{ padding: 6, minWidth: 0 }}>NL</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(NavBar);
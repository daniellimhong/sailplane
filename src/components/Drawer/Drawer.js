
import React from 'react'
import Divider from '@material-ui/core/Divider'
import MuiDrawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import { makeStyles, useTheme } from '@material-ui/core/styles'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  }
}))

function Drawer (props) {
  const classes = useStyles()
  const theme = useTheme()
  const { mobileOpen, toggleMobileOpen } = props

  const drawer = (
    <div>
      <div className={classes.toolbar}>
        {/* top of nav list */}
      </div>
      <Divider />
      {/* nav list */}
    </div>
  )

  return (
    <>
      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation='css'>
          <MuiDrawer
            variant='temporary'
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={toggleMobileOpen}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </MuiDrawer>
        </Hidden>
        <Hidden xsDown implementation='css'>
          <MuiDrawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant='permanent'
            open
          >
            {drawer}
          </MuiDrawer>
        </Hidden>
      </nav>
    </>
  )
}

export default Drawer

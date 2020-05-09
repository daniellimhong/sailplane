
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '../Drawer'
import Bar from '../Bar'
import Content from '../Content'

import { Provider } from 'react-redux'
import state from '../../state'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '100%',
    overflow: 'auto'
  },
  content: {
    flexGrow: 1,
    height: '100%'
  }
}))

function SailplaneApp () {
  const classes = useStyles()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const toggleMobileOpen = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <div className={classes.root}>
      <Provider store={state}>
        <Bar toggleMobileOpen={toggleMobileOpen} />
        <Drawer mobileOpen={mobileOpen} toggleMobileOpen={toggleMobileOpen} />
        <main className={classes.content}>
          <Content />
        </main>
      </Provider>
    </div>
  )
}

export default SailplaneApp

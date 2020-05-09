
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FileExplorer from '../FileExplorer'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  toolbar: theme.mixins.toolbar,
  contentWrap: {
    flexGrow: 1,
    overflow: 'auto'
    // backgroundColor: theme.palette.background.default
  }
}))

function Content () {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.toolbar} />
      <div className={classes.contentWrap}>
        <FileExplorer />
      </div>
    </div>
  )
}

export default Content

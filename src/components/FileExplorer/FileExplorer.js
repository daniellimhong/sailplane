
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { connect } from 'react-redux'
import { reposSelectors } from '../../state'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  toolbar: theme.mixins.toolbar,
  contentWrap: {
    flexGrow: 1,
    overflow: 'auto'
    // backgroundColor: theme.palette.background.default
  }
}))

function FileExplorer (props) {
  const classes = useStyles()

  console.log(props)

  return (
    <div className={classes.root}>
      {/* FileExplorer UI goes here */}
    </div>
  )
}

const mapStateToProps = s => {
  return {
    fs: reposSelectors.fs(s)
  }
}

export default connect(
  mapStateToProps
)(FileExplorer)

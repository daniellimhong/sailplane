
import { combineReducers } from 'redux'

import reposReducer from './repos/reducer'

const reducer = combineReducers({
  repos: reposReducer
})

export default reducer

import { combineReducers } from 'redux'
import repositoryReducer from './repository'
import issueReducer from './issue'

export default combineReducers({
  repositoryReducer,
  issueReducer,
})

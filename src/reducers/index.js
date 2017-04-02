import { combineReducers } from 'redux'
import {
  REQUEST_DATA, RECEIVE_DATA
} from '../actions'

const dataItems = (state = {
  isFetching: false,
  items: []
}, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_DATA:
      return {
        ...state,
        isFetching: false,
        items: action.dataItems,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}

const playData = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_DATA:
    case REQUEST_DATA:          
      return {
        ...state,
        'data': dataItems(state.data, action)
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  playData
})

export default rootReducer

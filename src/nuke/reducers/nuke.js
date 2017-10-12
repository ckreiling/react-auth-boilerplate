  import * as actionType from '../actions/types'

export const nuke = (state, action) => {
  switch (action.type) {
    case actionType.REQUEST_NUKE:
      return {
        ...state,
        isFetching: true
      }
    case actionType.RECEIVE_NUKE:
      return {
        ...state,
        nuke: action.nuke,
        isFetching: false,
        dateReceived: Date.now()
      }
    case actionType.RECEIVE_ERROR:
      return {
        ...state,
        error: action.error,
        nuke: false,
        isFetching: false,
        dateReceived: Date.now()
      }
    default:
      return state
  }
}
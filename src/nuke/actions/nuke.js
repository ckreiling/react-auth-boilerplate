import * as actionType from './types'
import {NUKE, URL, apiClient} from '../../ApiClient'

const requestNuke = () => {
  return {
    type: actionType.REQUEST_NUKE
  }
}

const receiveNuke = (nuke) => {
  return {
    type: actionType.RECEIVE_NUKE,
    nuke
  }
}

const receiveError = (error) => {
  return {
    type: actionType.RECEIVE_ERROR,
    error
  }
}

export const fetchNuke = () => (dispatch) => {
  dispatch(requestNuke()) // Requesting the nuke

  return apiClient.post(URL + NUKE)
    .then(function(response) {
      const nuke = response.data.nuke
      dispatch(receiveNuke(nuke)) // Successful request
    })
    .catch(function(error) {
      dispatch(receiveError(error.toString())) // Unsuccessful request
    })
}
import React from 'react'
import {connect} from 'react-redux'
import {fetchNuke} from '../actions/nuke'

const _Nuke = props => <input type="button" onClick={props.nuke}>NUKE THE GROUPME</input>

const mapDispatchToProps = dispatch => {
  return {
    nuke: () => {
      dispatch(fetchNuke())
    }
  }
}

const Nuke = connect(mapDispatchToProps)(_Nuke)

export default Nuke


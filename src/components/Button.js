import React from 'react'
import { connect } from 'react-redux'
import { getUserRepos } from '../actions'
const Button = ({ getUserRepos }) => (
  <button onClick={getUserRepos}>FETCH USER INFO</button>
)
const mapDispatchToProps = {
  getUserRepos,
}

export default connect(
  null,
  mapDispatchToProps,
)(Button)

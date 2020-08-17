import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import Switch from '@material-ui/core/Switch';

const SignedInLinks = (props) => {
  const { darkMode, handleChange } = props;
  return (
    <div>
      <ul className="right">
        <li><a onClick={props.signOut}>Log Out</a></li>
        <li><NavLink to='/' className="btn btn-floating pink lighten-1">
          {props.profile.initials}
        </NavLink></li>
        <li>        <Switch checked={darkMode} onChange={handleChange}/></li>
      </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
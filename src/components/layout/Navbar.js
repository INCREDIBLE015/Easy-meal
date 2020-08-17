import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const Navbar = (props) => {
  const { auth, profile, darkMode, handleChange } = props;
  // console.log(auth);
  const links = auth.uid ? <SignedInLinks profile={profile} darkMode={darkMode} handleChange={handleChange} /> : <SignedOutLinks />;

  return (
    <nav className="#0d47a1 blue darken-4">
      <div className="container">
        <Link to='/' className="brand-logo">E A S Y M E A L</Link>
        {links}
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  // console.log(state);
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)
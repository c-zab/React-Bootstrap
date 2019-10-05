import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Navbar extends Component {

  render() {
    const {brand,color} = this.props;
    const classColor = (color === 'dark') ? 'navbar-dark bg-dark' : 'navbar-light bg-light'
    return (
      <nav className={`navbar navbar-expand-sm ${classColor}`}>
        <a className="navbar-brand" href="#">{brand}</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">About</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

Navbar.propTypes = {
  brand: PropTypes.string,
  color: PropTypes.string,
}

Navbar.defaultProps = {
  brand: 'Default Brand',
  color: 'light',
}

export default Navbar

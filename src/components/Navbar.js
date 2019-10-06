import React from 'react'
import PropTypes from 'prop-types'

function Navbar({brand,color, onNavbarClick, page}) {

  const isActive = (activePage) => (page === activePage) ? 'nav-item active' : 'nav-item';
  const classColor = (color === 'dark') ? 'navbar-dark bg-dark' : 'navbar-light bg-light'

  return (
    <nav className={`navbar navbar-expand-sm ${classColor}`}>
      <a className="navbar-brand" href="#">{brand}</a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className={isActive('home')} onClick={() => onNavbarClick('home')}>
            <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
          </li>
          <li className={isActive('about')} onClick={() => onNavbarClick('about')}>
            <a className="nav-link" href="#">About</a>
          </li>
        </ul>
      </div>
    </nav>
  )
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

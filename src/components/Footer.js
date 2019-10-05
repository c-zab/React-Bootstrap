import React from 'react'

Footer = ({website, year}) => {
  return (
    <footer className="container px-0">
      <hr />
      <p>{website} - {year}</p>
    </footer>
  )
}

Footer.propTypes = {
  website: PropTypes.string,
  year: PropTypes.number,
}

Footer.defaultProps = {
  website: '© My Website',
  year: 2019
}

export default Footer;

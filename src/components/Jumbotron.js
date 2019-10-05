import React from 'react'
import { fdatasync } from 'fs';

export default function Jumbotron() {
  const {heading, text, link} = this.props;
  return (
    <div className="jumbotron">
      <div className="container px-0">
        <h1 className="display-3">{heading}</h1>
        <p>{text}</p>
        <p><a className="btn btn-primary btn-lg" href={link} role="button">Go to >></a></p>
      </div>
    </div>
  )
}

Jumbotron.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string,
}
Jumbotron.defaultProps = {
  heading: 'Welcome!',
  text: 'Perferendis saepe odit voluptas itaque excepturi unde. Perferendis saepe odit voluptas itaque excepturi unde.',
  link: 'http://www.google.com'
}


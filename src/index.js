import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar'
import {Jumbotron} from './components/Jumbotron'
import PageHome from './components/PageHome'
import PageAbout from './components/PageAbout'
import PageError from './components/PageError'
import Footer from './components/Footer'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home'
    }
  }

  onNavbarClick = (newPage) => (
    this.setState({page: newPage})
  )

  render() {
    const { page } = this.state;
    if(page === 'home') {
      var activePage =
        <React.Fragment>
          <Jumbotron />
          <PageHome />
        </React.Fragment>
    } else if (page === 'about') {
      var activePage = <PageAbout />
    } else {
      var activePage = <PageError />
    }
    return (
      <React.Fragment>
        <Navbar
          brand='Website'
          color='dark'
          page={page}
          onNavbarClick={this.onNavbarClick}
        />
        { activePage }
        <Footer />
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

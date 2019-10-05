import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home'
    }
  }
  onHomeClick = () => (
    console.log('clicked')
  )

  render() {
    return (
      <React.Fragment>
        <Navbar
          brand='Website'
          color='dark'
          onHomeClick={this.onHomeClick}
        />
        {/* <Jumbotron /> */}
        {/* <PageHome /> */}
        {/* <Footer /> */}
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

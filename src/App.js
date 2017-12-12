import React, { Component } from 'react';
import './App.css';
import DisplayContainer from './components/DisplayContainer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <center>
          <div >
            <header >
              <h1>Please enter your candidate ID to search for your communication and coding score percentiles.</h1>
              <h2>(compared to others with the same position, at similar companies)</h2>
            </header>
            <br></br>
            <br></br>
            <DisplayContainer />
          </div>
        </center>
      </MuiThemeProvider >

    );
  }
}

export default App;

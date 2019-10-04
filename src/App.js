import React, { Component } from 'react';
import * as math from 'mathjs';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from './components/KeyPadComponent';
import { Provider } from 'react-redux';
import store from './store';
class App extends Component {
  render() {
    const alignCalculator = {
      height: '100vh',
      widht: '250px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    };
    return (
      <Provider store={store}>
        {console.log(store)}
        <div id='container' style={alignCalculator}>
          <ResultComponent />
          <KeyPadComponent />
        </div>
      </Provider>
    );
  }
}

export default App;

import React, { Component } from 'react';
import * as math from 'mathjs';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from './components/KeyPadComponent';

class App extends Component {
  state = { value: '' };
  inputValue = event => {
    this.setState({ value: this.state.value + event.target.value });
  };
  result = () => {
    
    this.setState({ value: math.eval(this.state.value) });
  };
  clearValue = () => {
    this.setState({ value: '' });
  };
  render() {
    const alignCalculator = {
      height: '100vh',
      widht: '250px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    };
    return (
      <div id='container' style={alignCalculator}>
        <ResultComponent value={this.state.value} />
        <KeyPadComponent
          inputValue={this.inputValue}
          result={this.result}
          clearValue={this.clearValue}
        />
      </div>
    );
  }
}

export default App;

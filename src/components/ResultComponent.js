import React, { Component } from 'react';
class ResultComponent extends Component {
  render() {
    const inputStyle = {
      height: '50px',
      width: '250px',
      padding: '2px',
      margin: '2px',
      outline: '1px solid black'
    };

    return <h1 style={inputStyle}>{this.props.value}</h1>;
  }
}

export default ResultComponent;

import React, { Component } from 'react';
import { connect } from 'react-redux';
class ResultComponent extends Component {
  render() {
    const inputStyle = {
      height: '50px',
      width: '250px',
      padding: '2px',
      margin: '2px',
      outline: '1px solid black'
    };

    return <h1 style={inputStyle}>{this.props.inputValue}</h1>;
  }
}
const mapStateToProps = state => {
  return {
    inputValue: state.inputValue
  };
};
const mapDispatchToProps = dispatch => {
  return {
    inputChanged: event => {
      const action = {
        type: 'INPUT',
        payload: { inputValue: event.target.value }
      };
      dispatch(action);
    },
    result: () => {
      const action = {
        type: 'RESULT'
      };
      dispatch(action);
    },
    clear: () => {
      const action = {
        type: 'CLEAR'
      };
      dispatch(action);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultComponent);

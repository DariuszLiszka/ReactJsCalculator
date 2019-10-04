import React, { Component } from 'react';
import { connect } from 'react-redux';
class KeyPadComponent extends Component {
  render() {
    const rowStyle = {
      display: 'flex',
      width: '250px',
      margin: '0px'
    };
    const box = {
      display: 'flex',
      height: '62.5px',
      width: '25%',
      textAlign: 'right'
    };
    const { inputValue, clearValue, result } = this.props;
    return (
      <div>
        <p style={rowStyle}>
          <button
            style={box}
            type='button'
            value='('
            onClick={this.props.inputChanged}
          >
            (
          </button>
          <button
            style={box}
            type='button'
            value=')'
            onClick={this.props.inputChanged}
          >
            )
          </button>
          <button
            style={box}
            type='button'
            value='%'
            onClick={this.props.inputChanged}
          >
            %
          </button>
          <button style={box} type='button' onClick={this.props.clear}>
            cl
          </button>
        </p>
        <p style={rowStyle}>
          <button
            style={box}
            type='button'
            value='1'
            onClick={this.props.inputChanged}
          >
            1
          </button>
          <button
            style={box}
            type='button'
            value='2'
            onClick={this.props.inputChanged}
          >
            2
          </button>
          <button
            style={box}
            type='button'
            value='3'
            onClick={this.props.inputChanged}
          >
            3
          </button>
          <button
            style={box}
            type='button'
            value='/'
            onClick={this.props.inputChanged}
          >
            /
          </button>
        </p>
        <p style={rowStyle}>
          <button
            style={box}
            type='button'
            value='4'
            onClick={this.props.inputChanged}
          >
            4
          </button>
          <button
            style={box}
            type='button'
            value='5'
            onClick={this.props.inputChanged}
          >
            5
          </button>
          <button
            style={box}
            type='button'
            value='6'
            onClick={this.props.inputChanged}
          >
            6
          </button>
          <button
            style={box}
            type='button'
            value='*'
            onClick={this.props.inputChanged}
          >
            *
          </button>
        </p>
        <p style={rowStyle}>
          <button
            style={box}
            type='button'
            value='7'
            onClick={this.props.inputChanged}
          >
            7
          </button>
          <button
            style={box}
            type='button'
            value='8'
            onClick={this.props.inputChanged}
          >
            8
          </button>
          <button
            style={box}
            type='button'
            value='9'
            onClick={this.props.inputChanged}
          >
            9
          </button>
          <button
            style={box}
            type='button'
            value='+'
            onClick={this.props.inputChanged}
          >
            +
          </button>
        </p>
        <p style={rowStyle}>
          <button
            style={box}
            type='button'
            value='0'
            onClick={this.props.inputChanged}
          >
            0
          </button>
          <button
            style={box}
            type='button'
            value='.'
            onClick={this.props.inputChanged}
          >
            .
          </button>
          <button
            style={box}
            type='button'
            value='-'
            onClick={this.props.inputChanged}
          >
            -
          </button>
          <button style={box} type='button' value='=' onClick={result}>
            =
          </button>
        </p>
        <p />
      </div>
    );
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
)(KeyPadComponent);

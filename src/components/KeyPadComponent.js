import React, { Component } from 'react';
class KeyPadComponent extends Component {
  render() {

    // use scss 
    // use scss (css) modules

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
          <button style={box} type='button' value='(' onClick={inputValue}>
            (
          </button>
          <button style={box} type='button' value=')' onClick={inputValue}>
            )
          </button>
          <button style={box} type='button' value='%' onClick={inputValue}>
            %
          </button>
          <button style={box} type='button' onClick={clearValue}>
            cl
          </button>
        </p>
        <p style={rowStyle}>
          <button style={box} type='button' value='1' onClick={inputValue}>
            1
          </button>
          <button style={box} type='button' value='2' onClick={inputValue}>
            2
          </button>
          <button style={box} type='button' value='3' onClick={inputValue}>
            3
          </button>
          <button style={box} type='button' value='/' onClick={inputValue}>
            /
          </button>
        </p>
        <p style={rowStyle}>
          <button style={box} type='button' value='4' onClick={inputValue}>
            4
          </button>
          <button style={box} type='button' value='5' onClick={inputValue}>
            5
          </button>
          <button style={box} type='button' value='6' onClick={inputValue}>
            6
          </button>
          <button style={box} type='button' value='*' onClick={inputValue}>
            *
          </button>
        </p>
        <p style={rowStyle}>
          <button style={box} type='button' value='7' onClick={inputValue}>
            7
          </button>
          <button style={box} type='button' value='8' onClick={inputValue}>
            8
          </button>
          <button style={box} type='button' value='9' onClick={inputValue}>
            9
          </button>
          <button style={box} type='button' value='+' onClick={inputValue}>
            +
          </button>
        </p>
        <p style={rowStyle}>
          <button style={box} type='button' value='0' onClick={inputValue}>
            0
          </button>
          <button style={box} type='button' value='.' onClick={inputValue}>
            .
          </button>
          <button style={box} type='button' value='-' onClick={inputValue}>
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

export default KeyPadComponent;

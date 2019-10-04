import math from 'mathjs';
const initialState = {
  inputValue: ''
};
const calcValueReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INPUT':
      return Object.assign({}, state, {
        inputValue: state.inputValue + action.payload.inputValue
      });

    case 'CLEAR':
      console.log('cl');
      return Object.assign({}, state, {
        inputValue: ''
      });

    case 'RESULT':
      return Object.assign({}, state, {
        inputValue: math.eval(state.inputValue)
      });
    default:
      return state;
  }
};

export default calcValueReducer;

import { createStore } from 'redux';
import calcValueReducer from '../reducers/calcValue';

const store = createStore(calcValueReducer);

export default store;

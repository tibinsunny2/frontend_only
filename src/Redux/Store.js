// src/redux/store.js

import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import cartReducer from './reducer';

const store = createStore(cartReducer, composeWithDevTools());

export default store;

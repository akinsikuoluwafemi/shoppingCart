import { applyMiddleware, createStore } from 'redux';
import thunk from "redux-thunk";

import reducers from './reducers';

// the redux store of the app
export const store = createStore(reducers, {}, applyMiddleware(thunk));


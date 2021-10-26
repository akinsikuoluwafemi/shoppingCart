import { combineReducers } from 'redux';
import productReducer from './productReducer';


// root reducer
const reducers = combineReducers({
  products: productReducer
})

export default reducers;

// exporting the rootstate
export type RootState = ReturnType<typeof reducers>
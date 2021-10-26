import { useDispatch} from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

// an useHook action that returns all the action creators
//  on the fly and binds them together so you dont
//  have to call dispatch every where in your codebase
export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCreators,dispatch)
}
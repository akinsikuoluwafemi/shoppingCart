import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../state/reducers';

// this allows typescript be aware of the initial state in the store
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

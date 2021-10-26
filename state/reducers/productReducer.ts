import {initialBalance, initialItems, Item} from '../../src/mock-backend/data';
import {ActionType} from '../action-types';
import {Action} from '../actions';

export interface ProductState {
  initialBalance: number;
  initialItems: Item[] | any;
  loading: boolean;
}

const initialState: ProductState = {
  initialBalance,
  initialItems,
  loading: false
}

const reducer = (state: ProductState = initialState, action: Action): ProductState => {
  switch(action.type){
    
    
    case ActionType.BUYING_ITEM:
      return { ...state, loading: true }
    
    case ActionType.BUYING_ITEM_SUCCESS:
       // create a temporary variable to hold initialItems
      let temItems = [...state.initialItems];

      // find the currentItem
      let selectedItem = temItems.find(item => item.id === action.payload.id)

      // find its index
      let index = temItems.indexOf(selectedItem);

      // get the item from the temporary array
      let decProductInventory = temItems[index];

      // subtract one from the inventory, everytime we make purchase
      decProductInventory.inventory = decProductInventory.inventory - 1

      // reduce the price from the initialBalance, everytime we make purchase
      const newBalance = state.initialBalance - decProductInventory.price
      
      // return corresponding states
      return {
        ...state,
        initialItems: temItems,
        initialBalance: newBalance,
        loading: false
      }
      
      default:
      return state;
  }
}

export default reducer;
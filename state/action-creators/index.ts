import { Item } from '../../src/mock-backend/data';
import { ActionType} from '../action-types';
import {  BuyingItemAction, BuyingItemSuccess} from '../actions';
import { Dispatch} from 'redux';
import { sleep } from '../../src/mock-backend/utils';


  // action creator that tells the app that a purhase has started
 const buyingItem = (): BuyingItemAction => {
  return {
    type: ActionType.BUYING_ITEM
  }
}

// action creator that tells the app a purchase is successful
 const buyingItemSuccess = (item: Item): BuyingItemSuccess => {
  return {
    type: ActionType.BUYING_ITEM_SUCCESS,
    payload: item
  }
}

// action creator that actually purchase the item
// i am dispatching the two actions here and calling the sleep function
// ----> I call teh action that starts the purchase, the sleep function is called, after it resolves
// then the actual purchse now takes place, in that order
export const buyingItemAsync = (item: Item) => {
  return async (dispatch: Dispatch) => {
    
    dispatch(buyingItem());
    await sleep(2000);
    dispatch(buyingItemSuccess(item));
  }
}
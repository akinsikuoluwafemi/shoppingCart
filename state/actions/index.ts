import { Item } from '../../src/mock-backend/data';
import {ActionType} from '../action-types';



// action interface representing buying item start
export interface BuyingItemAction {
  type: ActionType.BUYING_ITEM
}

// action interfaces representing buying success
export interface BuyingItemSuccess {
  type: ActionType.BUYING_ITEM_SUCCESS,
  payload: Item
}



export type Action = BuyingItemAction | BuyingItemSuccess;
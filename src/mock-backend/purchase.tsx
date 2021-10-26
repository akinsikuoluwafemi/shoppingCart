import { initialBalance, Item } from "./data";
import { useActions } from '../../hooks/use-actions'

type UserAndItemState = {
  balance: number;
  items: Item[] | any;
};

/**
 * Modifies `state`, given an `itemId` to purchase
 * @returns {UserAndItemState} the updated state if a purchase should succeed
 */
export const executePurchase = async (itemId: Item["id"],state: UserAndItemState): Promise<UserAndItemState> => {
  // NOTE: the following line intentionally pauses execution in this
  // function and MUST remain in tact for the assignment to replicate a
  // network request.

  // @TODO: Not implemented





  return state
  
};
import { NextPage } from 'next';
import { Item } from '../src/mock-backend/data';
import { useActions } from '../hooks/use-actions';
import { useTypedSelector } from '../hooks/use-typed-selector';
import {sleep } from '../src/mock-backend/utils';
import { Card, Button, message } from 'antd';





export type ProductItemProps = {
  product: Item
}



const ProductItem: NextPage<ProductItemProps> = ({product}) => {

  // gettting properties from states
  const {initialBalance, loading} = useTypedSelector(({products}) => products)


  

  const {  buyingItemAsync } = useActions();

  const BuyProduct =  () => {
    if (initialBalance < product.price) {
      // simulated backend alert if initial balance is less than the price
      message.error('Balance is to Low, cannot make purchase',1)
    } else {
      // loading for two seconds after the sleep function sets loading to true
      message.loading('Buying Item', 2);
      // actually making purchase
      buyingItemAsync(product);

    }
  }

  
  return (
    <div style={{ margin: '2rem' }}>
      <Card  hoverable={true} title={product.name} >
        <p>Price: {product.price}</p>
        <p>Stock: {product.inventory}</p>

        {product.inventory === 0 && (
            <small style={{color: 'red', marginLeft: '1rem'}}>Out of Stock</small>
        )}
        
        <br />
        {/* setting the buy button to disabled so user doesnt press the button multiple times or press another button before sleep function finishes
          so the current balance is intact.

          I also set the button to disabled if the stock count is 0
        */}
         <Button  disabled={product.inventory === 0 || loading} onClick={BuyProduct}  type="primary" block shape="round">
          Buy
        </Button>
        

        </Card>

      
    </div>
  )
}

export default ProductItem
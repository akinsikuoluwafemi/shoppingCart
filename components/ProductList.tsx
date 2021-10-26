import { NextPage } from 'next';
import ProductItem from './ProductItem';
import { Item } from '../src/mock-backend/data';
import { Row} from 'antd';

// props of productlist
type ProductListProps = {
  products: Item[]
}

const ProductList: NextPage<ProductListProps> = ({products}) => {
  
  return (
      <Row  gutter={16}>

      {
        // mapping the sorted function, so that items which are out of stock go down the list
          products.sort((a,b) => b.inventory - a.inventory).map(product => <ProductItem key={product.id} product={ product}/>)
      }
      </Row>
  )
}

export default ProductList;
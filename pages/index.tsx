import { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ProductList from '../components/ProductList';
import { useTypedSelector } from '../hooks/use-typed-selector';


const Index: NextPage = () => {

  // getting states from store so you can use it on the fly
  const {initialBalance, initialItems} = useTypedSelector(({products}) => products)

  


  return (
    <div className={styles.container}>
      <h1 className={styles.balance}>Current Balance: {initialBalance.toFixed(2)}</h1>
      <Head>
        <title>Shopping Cart</title>
        <meta name="description" content="A create inc shopping app" />
      </Head>

      {/* passing the initialItems to the productlist on the fly */}
      <ProductList products={initialItems}/>
    </div>
  )
}

export default Index

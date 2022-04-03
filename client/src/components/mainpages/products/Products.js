import React, { useContext } from 'react'
import {GlobalState} from '../../../GlobalState'
import ProducItem from '../utils/productItem/producItem'
import Loading from '../utils/loading/Loading'
function Products() {
  // const state = useContext(GlobalState)
  // const [products] = state.productsAPI.products  
  


  return (
    <>
    <div /*className='products'*/>
    <ProducItem/>
      {/* {
        
        products.map(products => {
          return <ProducItem key={products._id}/>
        })
      } */}
    </div>
    {Products.length === 0 && <Loading/>}
    </>
  )
}

export default Products

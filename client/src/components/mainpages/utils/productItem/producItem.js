import React from 'react'
import BtnRender from './BtnRender'
import {Link} from 'react-router-dom'

function producItem() {
  return (
    <div className='product_card'>
      {/* <img src={product.images.url}/>

      <div className='product_box'>
        <h2 title={product.title}>{product.title}</h2>
        <span>${product.price}</span>
        <p>${product.description}</p>
      </div> */}
      <img src='https://bizweb.dktcdn.net/100/112/815/products/iphone-8-red-ebd029df-f01f-4e5f-8591-8dc606f4350e.png?v=1612254253777' alt=''/>
      <div className='row_btn'>
            <Link id='btn_buy' to="#!">
                Mua
            </Link>

            <Link id='btn_view' to={'detail/${product._id}'}>
                Xem
            </Link>
      </div>
        {/* <BtnRender product={product}/> */}
    </div>
  )
}

export default producItem

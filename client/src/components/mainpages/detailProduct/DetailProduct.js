
import React, { useContext, useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { GlobalState } from '../../../GlobalState'
import Products from '../products/Products'
import producItem from '../utils/productItem/producItem'
function DetailProduct() {
  // const params = useParams()
  // const state = useContext(GlobalState)
  // const [product] = state.productsAPI.products
  // const [detailProduct, setDetailProduct] = useContext([])

  //     useEffect(()=>{
  //         if(params.id){
    
  //             Products.forEach(product =>{
  //                 if(product._id === params.id) setDetailProduct(product)
  //             })
  //         }
  //     },[params.id, products])

  // if(detailProduct.length === 0) return null;
  return (
    <>
      <div className='detail'>
        <img src='https://cdn.tgdd.vn/Products/Images/42/114110/iphone-8-plus-64gb-h1.jpg' alt="" />
        <h2>iPhone 8 Plus có sự thay đổi trong thiết kế, từ nguyên khối hoàn toàn đến 2 mặt kính cường lực và khung sườn kim loại.
          Cũng nhờ vậy mà thế hệ iPhone mới đã loại bỏ được các đường anten "xấu xí". Máy vẫn có chuẩn chống nước IP67 tăng độ an toàn khi sử dụng.</h2>
        {/* <div className='detail'>
            <img src={detailProduct.images.url} alt=""/>
      </div>
      <div className='row'>
            <h2>{detailProduct.title}</h2>
            <h6>#id: {detailProduct.product_id}</h6>
      </div>
      <span>${detailProduct.price}</span>
      <p>{detailProduct.description}</p>
      <p>{detailProduct.content}</p>
      <p>Sold: {detailProduct.sold}</p> */}
        <Link to="/cart" className='cart'>Mua ngay</Link>
      </div>
      <div>
            <h2>Sản phẩm liên quan</h2>
            {/* <div className='products'>
            {
                products.map(product => {
                  return product.category === detailProduct.category
                  ?<producItem key={product._id} product={product}/> :null
                })
              }
            </div> */}
      </div>
    </>
  )
}

export default DetailProduct

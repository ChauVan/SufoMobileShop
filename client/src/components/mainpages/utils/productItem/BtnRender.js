import React from 'react'
import{Link} from 'react-router-dom'

function BtnRender({product}) {
  return (
    <div className='row_btn'>
        <Link id='btn_buy' to='#!'>
                Mua
        </Link>
        <Link id='btn_view' to={'/detail/${produc._id}'}>
                Xem chi tiết
        </Link>
      
    </div>
  )
}

export default BtnRender

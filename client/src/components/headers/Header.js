import React, { useState, useContext } from 'react';
import { GlobalState } from '../../GlobalState'
import Menu from './icon/menu.svg'
import Close from './icon/close.svg'
import Cart from './icon/cart.svg'
import { Link } from 'react-router-dom'
function Header() {
    const state = useContext(GlobalState)
    const [isLogged, setIsLogged] = state.userAPI.isLogged
    const [isAdmin, setIsAdmin] = state.userAPI.isAdmin

    // const adminRouter = () =>{
    //     return(
    //         <>
    //             <li><Link to="/create_product">Tạo sản phẩm</Link></li>
    //             <li><Link to="/category">Loại sản phẩm</Link></li>
    //         </>
    //     )
    // }
    //     const loggedRouter = () =>{
    //         return(
    //             <>
    //                 <li><Link to="/history">Lịch sử</Link></li>
    //                 <li><Link to="/">Đăng xuất</Link></li>
    //             </>
    //         )
    //         }
    return (
        <header>
            <div className='menu'>
                <img src={Menu} alt="" width="30" />
            </div>
            <div className='logo'>
                <h1>
                    <Link to="/">
                    {/* {isAdmin ? 'Admin' :'Sufo Moblie Shop'} */}
                    Sufo Moblie Shop
                    </Link>
                </h1>
            </div>

            <ul>
                <li><Link to="/">
                Sản phẩm
                </Link></li>
                <li><Link to="/login">
                Đăng nhập</Link></li>

                <li>
                    <img src={Close} alt="" width="30" className='menu' />
                </li>
            </ul>

            <div className="cart-icon">
                <span>0</span>
                <Link to="/cart">
                    <img src={Cart} alt="" width="30" />
                </Link>
            </div>

        </header>
    )


}
export default Header
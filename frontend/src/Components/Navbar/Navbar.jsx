import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/nav_dropdown.png'
//import useOnlineStatus from '../useOnlineStatus'
import useOnlineStatus from '../useOnlineStatus'



const Navbar = () => {

  let [menu,setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);

  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  const onlineStatus =useOnlineStatus();
  return (
    <div className='nav'>
      <Link to='/' onClick={()=>{setMenu("shop")}} style={{ textDecoration: 'none' }} className="nav-logo">
        <img src={logo} alt="logo" />
        <p>RoDeez Cart</p>
      </Link>
      <img onClick={dropdown_toggle} className='nav-dropdown' src={nav_dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
      
        <li onClick={()=>{setMenu("shop")}}><Link to='/' style={{ textDecoration: 'none' }}><b>Shop</b></Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mobiles")}}><Link to='/mobiles' style={{ textDecoration: 'none' }}><b>Mobiles</b></Link>{menu==="mobiles"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("laptops")}}><Link to='/laptops' style={{ textDecoration: 'none' }}><b>Laptops</b></Link>{menu==="laptops"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("televisions")}}><Link to='/televisions' style={{ textDecoration: 'none' }}><b>Televisions</b></Link>{menu==="televisions"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("gadgets")}}><Link to='/gadgets' style={{ textDecoration: 'none' }}><b>Gadgets</b></Link>{menu==="gadgets"?<hr/>:<></>}</li>
        <li className="online-status">
          {onlineStatus ? '🟢' : '🔴'}
        </li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace("/");}}>Logout</button>
        :<Link to='/login' style={{ textDecoration: 'none' }}><button>Login</button></Link>}
        <Link to="/cart"><img src={cart_icon} alt="cart"/></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar;

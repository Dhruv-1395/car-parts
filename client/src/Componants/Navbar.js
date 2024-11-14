import React from 'react'
import Logo from '../assets/logo.webp'
import '../Css/Navbar.css'
import { FaShoppingBag } from "react-icons/fa";
import { Tooltip } from 'antd';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar navbar-light ">
  <div className="container">
    <a className="navbar-brand" href="/">
      <img src={Logo} alt="logo" />
    </a>
    <ul className="nav justify-content-center">
  <li className="nav-item">
    <Link className="nav-link active" aria-current="page" to="/">
     Home
    </Link>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/">
      About
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/">
      Shop
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/">
      Blog
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/">
      Gallery
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/">
      Pages
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/">
      Contact
    </a>
  </li>
</ul>
<div className="rigt-part d-flex align-items-center">
<ul className="nav justify-content-end">
  <li className="nav-item">
    <a className="nav-link login" href="/">
      Login
    </a>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/register">
      register
    </Link>
  </li>
</ul>
    <div className="cart">
            
    <Tooltip title="Cart" placement="bottomLeft">
    <FaShoppingBag />
  </Tooltip>
   

    </div>
</div>
  </div>
</nav>

  )
}

export default Navbar
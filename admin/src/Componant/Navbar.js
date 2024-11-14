import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">
        Navbar
      </a>
      <ul className="nav justify-content-end">
  <li className="nav-item">
    <Link className="nav-link active" aria-current="page" to="/">
      All Product
    </Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/add-product">
      Add Product
    </Link>
  </li>
  {/* <li className="nav-item">
    <a className="nav-link" href="/update">
      Link
    </a>
  </li> */}
  
</ul>

    </div>
  </nav>
  
  )
}

export default Navbar
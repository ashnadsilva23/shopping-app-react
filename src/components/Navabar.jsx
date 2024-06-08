import React from 'react'
import { Link } from 'react-router-dom'

const Navabar = () => {
  return (
    <div>
          <nav className="navbar navbar-expand-lg bg-primary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">Product App</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Add Product</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/search">Search Product</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/delete">Delete Product</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/view">View All</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/viewproduct">View Product</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navabar
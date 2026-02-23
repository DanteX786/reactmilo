import React from 'react'
import {NavLink} from "react-router-dom";

export const Header = () => {
  return (

<header className='bg-black text-white py-3'>


<div className="container d-flex align-items-center">

<NavLink to='/' className="text-white text-decoration-none fw-semibold"><h5>🛒 Carrito de compras Camilo's</h5></NavLink>  
      
      <div className='ms-auto me-5 d-flex gap-4' > 
      <NavLink className="nav-link" to="/Props">Props</NavLink>
      <NavLink className="nav-link text-white" to="/Article">Articulos</NavLink>
      </div>
        

<div className="d-flex">
    <input className="form-control form-control-sm me-2" type="text" placeholder="Buscar..."/>
    <button className="btn btn-outline-light btn-sm">Buscar</button>
  </div>
</div>
</header> 
  )
}

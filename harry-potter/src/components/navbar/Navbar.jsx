import React from 'react'

const Navbar = ({onAdd}) => {
  return (
    <>
<nav className="navbar">
  <div className="container-fluid">
    <a className="navbar-brand" href='/'></a>
    {/* <form className="d-flex" role="search"> */}
    <div className="d-flex">
      {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
      <button className="btn btn-outline-success" type="submit">Favoritos <i class="fa-solid fa-bookmark"></i></button>
      <button className="btn btn-outline-success" onClick={onAdd}>Agregar <i class="fa-solid fa-user-plus"></i></button>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
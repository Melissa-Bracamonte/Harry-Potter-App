import React from 'react'
import "../../styles/stylesComponents/navbar.scss"

const Navbar = ({onAdd}) => {
  return (
    <>
<nav className="navbar">
  <div className="container-fluid">
    {/* <a className="navbar-brand" href='/'></a> */}
    <div className="d-flex btnFavourites">
      <button className="btn" type="submit"> <span>Favoritos</span> <i class="fa-solid fa-bookmark"></i></button>
      <button className="btn" onClick={onAdd}><span>Agregar</span> <i class="fa-solid fa-user-plus"></i></button>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
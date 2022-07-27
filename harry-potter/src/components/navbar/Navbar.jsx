import React, { useState } from "react";
import "../../styles/stylesComponents/navbar.scss";
import BtnFavourite from "./BtnFavourite";

const Navbar = ({ onAdd }) => {
  const [favouriteCharacter, setFavouriteCharacter] = useState(false);

  const dropdown = () => {
    setFavouriteCharacter(!favouriteCharacter);
  };

  return (
    <>
      <nav className="navbar">
        <div className="container-fluid">
          <div className="d-flex btnFavourites">
            <button className="btn" type="submit" onClick={dropdown}>
              {" "}
              <span>Favoritos</span> <i className="fa-solid fa-bookmark"></i>
            </button>
            <button className="btn" onClick={onAdd}>
              <span>Agregar</span> <i className="fa-solid fa-user-plus"></i>
            </button>
          </div>
          <BtnFavourite favouriteCharacter={favouriteCharacter} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;

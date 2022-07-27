import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

const BtnFavourite = ({ favouriteCharacter }) => {
  const [favourite, setFavourite] = useState([]);

  const getAllFavourite = () => {
    fetch(
      "https://62e10d90fa8ed271c48d67a0.mockapi.io/api/characters/favouriteCharacter"
    )
      .then((response) => response.json())
      .then((characters) => {
        setFavourite(characters);
      });
  };

  useEffect(() => {
    getAllFavourite();
  }, []);

  const deleteCharacter = (character) => {
    fetch(
      `https://62e10d90fa8ed271c48d67a0.mockapi.io/api/characters/favouriteCharacter/${character.id}`,
      {
        method: "DELETE",
      }
    )
      .then((response) => response.json())
      .then((deletedCharacter) => {
        console.log(deletedCharacter);
        getAllFavourite();
      });
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Quitado de tus favoritos",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <>
      <div className="containerFavorite">
        {favouriteCharacter ? (
          <nav className="listActive">
            {favourite.map((character) => {
              return (
                <ul key={character.id}>
                  <li>
                    <div>
                      <img
                        className="imgCharacter"
                        src={character.image}
                        alt=""
                      />
                      <span>{character.name}</span>
                      <i
                        className="fa-solid fa-trash-can"
                        onClick={() => deleteCharacter(character)}
                      ></i>
                    </div>
                  </li>
                </ul>
              );
            })}
          </nav>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default BtnFavourite;

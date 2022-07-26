import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import Characters from "../characters/Characters";
import FilterCharacters from "../filterCharacters/FilterCharacters";
import { Modal } from "../modal/Modal";
import harryPotter from "../../img/harryPotter.png";

function Home() {
  const [characters, setCharacters] = useState([]);
  const [filterCharacter, setFilterCharacter] = useState([]);
  const [students, setStudents] = useState([]);
  const [staff, setStaff] = useState([]);
  const [objPopup, setPopup] = useState({ visibility: false });

  //   const initialUrl = "http://localhost:3004/characters";

  const getAllCharacters = () => {
    fetch("http://localhost:3004/characters")
      .then((response) => response.json())
      .then((characters) => {
        setCharacters(characters);
        setFilterCharacter(characters);
      });
  };

  useEffect(() => {
    getAllCharacters();
  }, []);

  //   const fetchApi = (url) => {
  //     fetch(url)
  //       .then((response) => response.json())
  //       .then((characters) => {
  //         setCharacters(characters);
  //         setFilterCharacter(characters);
  //       })
  //       .catch((error) => console.log(error));
  //   };

  //   useEffect(() => {
  //     fetchApi(initialUrl);
  //   }, []);

//   console.log(characters);

const onAdd = () => {
    let popupProduct = {};
    setPopup({ visibility: true, popupProduct });
  };

  const onClickHide = () => {
    getAllCharacters();
    setPopup({ visibility: false });
  };

  const hogwartsStudents = () => {
    let student = filterCharacter.filter(
      (character) => character.hogwartsStudent === true
    );
    setStudents(student);
    setCharacters([]);
  };

  const hogwartsStaff = () => {
    let staff = filterCharacter.filter(
      (character) => character.hogwartsStaff === true
    );
    setStaff(staff);
    setCharacters([]);
  };

  return (
    <>
      <Modal
        onClickCloseModal={onClickHide}
        visible={objPopup.visibility}
        attrProduct={objPopup.popupProduct}
      />
      <Navbar onAdd={onAdd} />
      <img
        src={harryPotter}
        className="img-fluid rounded-start"
        alt="harryPotter"
      />
      <section className="container mt-5">
        <FilterCharacters
          students={students}
          staff={staff}
          setStaff={setStaff}
          setStudents={setStudents}
          hogwartsStudents={hogwartsStudents}
          hogwartsStaff={hogwartsStaff}
        />
        <Characters characters={characters} />
      </section>
    </>
  );
}

export default Home;

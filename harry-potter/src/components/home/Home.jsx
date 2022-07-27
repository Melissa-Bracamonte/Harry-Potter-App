import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import Characters from "../characters/Characters";
import FilterCharacters from "../filterCharacters/FilterCharacters";
import { Modal } from "../modal/Modal";
import harryPotter from "../../img/harryPotter.png";
import "../../styles/stylesComponents/characters.scss";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [filterCharacter, setFilterCharacter] = useState([]);
  const [students, setStudents] = useState([]);
  const [staff, setStaff] = useState([]);
  const [objPopup, setPopup] = useState({ visibility: false });

  const getAllCharacters = () => {
    fetch(
      "https://62e10d90fa8ed271c48d67a0.mockapi.io/api/characters/characters"
    )
      .then((response) => response.json())
      .then((characters) => {
        setCharacters(characters);
        setFilterCharacter(characters);
      });
  };

  useEffect(() => {
    getAllCharacters();
  }, []);

  const onAdd = () => {
    let popupCharacter = {};
    setPopup({ visibility: true, popupCharacter });
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
        attrProduct={objPopup.popupCharacter}
      ></Modal>

      <Navbar onAdd={onAdd} />

      <section className="sectionHeader">
        <img
          src={harryPotter}
          className="img-fluid rounded-start"
          alt="harryPotter"
        />
        <span>Selecciona tu filtro</span>

        <section className="studentAndStaff">
          <button
            className="btn"
            onClick={() => hogwartsStudents(setStaff([]))}
          >
            <p>ESTUDIANTES</p>
          </button>{" "}
          <button
            className="btn"
            onClick={() => hogwartsStaff(setStudents([]))}
          >
            <p>STAFF</p>
          </button>
        </section>
      </section>
      <section className="container mt-5">
        <Characters characters={characters} />
        <FilterCharacters students={students} staff={staff} />
      </section>
    </>
  );
};

export default Home;

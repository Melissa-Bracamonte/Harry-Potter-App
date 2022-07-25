import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import Characters from "../characters/Characters";
import FilterCharacters from "../filterCharacters/FilterCharacters";

function Home() {
  const [characters, setCharacters] = useState([]);
  const [filterCharacter, setFilterCharacter] = useState([]);
  const [students, setStudents] = useState([]);
  const [staff, setStaff] = useState([]);

  const initialUrl = "http://localhost:3004/characters";

  const fetchApi = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((characters) => {
        setCharacters(characters);
        setFilterCharacter(characters);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchApi(initialUrl);
  }, []);

  console.log(characters);

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
      <Navbar brand="Harry Potter" />
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

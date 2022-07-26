import React from "react";
import Houses from "../characters/Houses";
import AliveOrFinado from "../characters/AliveOrFinado";
import "../../styles/stylesComponents/characters.scss";

const FilterCharacters = ({
  students,
  staff,
  setStaff,
  setStudents,
  hogwartsStudents,
  hogwartsStaff,
}) => {
  return (
    <>
      <button onClick={() => hogwartsStudents(setStaff([]))}>
        ESTUDIANTES
      </button>{" "}
      <button onClick={() => hogwartsStaff(setStudents([]))}>STAFF</button>
      <section className="row">
        {students.map((item, index) => (
          <section key={index} className="col mb-4">
            <section className="card allCard" id="allCards">
              <Houses item={item} />
              <AliveOrFinado item={item} />
            </section>
          </section>
        ))}
      </section>
      <section className="row">
        {staff.map((item, index) => (
          <section key={index} className="col mb-4">
            <section className="card allCard" id="allCards">
              <Houses item={item} />
              <AliveOrFinado item={item} />
            </section>
          </section>
        ))}
      </section>
    </>
  );
};

export default FilterCharacters;

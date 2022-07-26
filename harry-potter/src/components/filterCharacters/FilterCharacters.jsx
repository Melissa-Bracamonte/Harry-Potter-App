import React from "react";
import Houses from "../characters/Houses";
import AliveOrFinado from "../characters/AliveOrFinado";

const FilterCharacters = ({ students, staff }) => {
  return (
    <>
      <section className="row">
        {students.map((item, index) => (
          <section key={index} className="col mb-4 cardContainer">
            <section className="card allCards">
              <Houses item={item} />
              <AliveOrFinado item={item} />
            </section>
          </section>
        ))}
      </section>
      <section className="row">
        {staff.map((item, index) => (
          <section key={index} className="col mb-4 cardContainer">
            <section className="card allCards">
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

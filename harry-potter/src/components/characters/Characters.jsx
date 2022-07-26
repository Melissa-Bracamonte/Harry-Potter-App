import React from "react";
import Houses from "./Houses";
import AliveOrFinado from "./AliveOrFinado";

const Characters = ({ characters = [] }) => {
  return (
    <>
      <section className="row">
        {characters.map((item, index) => (
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

export default Characters;

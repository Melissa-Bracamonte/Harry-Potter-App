import React from "react";
import "../../styles/stylesComponents/characters.scss";
import Houses from "./Houses";
import AliveOrFinado from "./AliveOrFinado";

const Characters = ({ characters = [] }) => {
  return (
    <>
      <section className="row">
        {characters.map((item, index) => (
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

export default Characters;

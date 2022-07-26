import React from "react";

const gryffindorHouse = {
  background: "linear-gradient(135deg, #ff0000 0%, #fed482 100%)",
};

const slytherinHouse = {
  background: "linear-gradient(135deg, #1C792B 0%, #82E95E 100%)",
};

const ravenclawHouse = {
  background: "linear-gradient(135deg, #0597B7 0%, #66D1FF 100%)",
};

const hufflepuffHouse = {
  background: "linear-gradient(135deg, #FFC700 0%, #FFF388 100%)",
};

const homeless = {
  background: "linear-gradient(135deg, #e30cce 0%, #a4669b 100%)",
};

const Houses = ({ item }) => {
  return (
    <>
      {item.house === "Gryffindor" && (
        <section className="imgContainer" style={gryffindorHouse}>
          <img src={item.image} alt="" />
        </section>
      )}
      {item.house === "Slytherin" && (
        <section className="imgContainer" style={slytherinHouse}>
          <img src={item.image} alt="" />
        </section>
      )}
      {item.house === "Ravenclaw" && (
        <section className="imgContainer" style={ravenclawHouse}>
          <img src={item.image} alt="" />
        </section>
      )}
      {item.house === "Hufflepuff" && (
        <section className="imgContainer" style={hufflepuffHouse}>
          <img src={item.image} alt="" />
        </section>
      )}
      {item.house === "" && (
        <section className="imgContainer" style={homeless}>
          <img src={item.image} alt="" />
        </section>
      )}
    </>
  );
};

export default Houses;

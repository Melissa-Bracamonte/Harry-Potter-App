import React from "react";
import btnFavourite from "../../img/btnFavourite.png";

const aliveCharacter = {
  background: "#ffffff",
};

const finadoCharacter = {
  background: "#CCCCCC",
};

const AliveOrFinado = ({ item }) => {
  return (
    <>
      {item.alive === true ? (
        <section className="card-body" style={aliveCharacter}>
          <section className="status">
            {item.alive === true ? (
              <p
                className="card-text statusCharacter"
                style={{ fontSize: "14px", lineHeight: "19.07px" }}
              >
                <small className="text-muted">VIVO</small>
              </p>
            ) : (
              <p className="card-text statusCharacter">
                <small className="text-muted">FINADO</small>
              </p>
            )}
            <span className="input-group-addon statusCharacter"> / </span>
            {item.hogwartsStudent === true ? (
              <p className="card-text statusCharacter">
                <small className="text-muted">ESTUDIANTE</small>
              </p>
            ) : (
              <p className="card-text statusCharacter">
                <small className="text-muted">STAFF</small>
              </p>
            )}

            <button className="btnFavourite">
              <img src={btnFavourite} alt="btnFavourite" />
            </button>
          </section>
          <section className="title">
            <h5 className="card-title">{item.name}</h5>
          </section>
          <hr />
          <section className="characterInformation">
            <p className="card-text">
              <strong>Cumpleaños:</strong> {item.dateOfBirth}
            </p>
            <p className="card-text">
              <strong>Género:</strong> {item.gender}
            </p>
            <p className="card-text">
              <strong>Color de ojos:</strong> {item.eyeColour}
            </p>
            <p className="card-text">
              <strong>Color de pelo:</strong> {item.hairColour}
            </p>
          </section>
        </section>
      ) : (
        <section className="card-body" style={finadoCharacter}>
          <section className="status">
            {item.alive === true ? (
              <p
                className="card-text statusCharacter"
                style={{ fontSize: "14px", lineHeight: "19.07px" }}
              >
                <small className="text-muted">VIVO</small>
              </p>
            ) : (
              <p className="card-text statusCharacter">
                <small className="text-muted">FINADO</small>
              </p>
            )}
            <span className="input-group-addon statusCharacter"> / </span>
            {item.hogwartsStudent === true ? (
              <p className="card-text statusCharacter">
                <small className="text-muted">ESTUDIANTE</small>
              </p>
            ) : (
              <p className="card-text statusCharacter">
                <small className="text-muted">STAFF</small>
              </p>
            )}

            <button className="btnFavourite">
              <img src={btnFavourite} alt="btnFavourite" />
            </button>
          </section>
          <section className="title">
            <h5 className="card-title">{item.name}</h5>
          </section>
          <hr />
          <section className="characterInformation">
            <p className="card-text">
              <strong>Cumpleaños:</strong> {item.dateOfBirth}
            </p>
            <p className="card-text">
              <strong>Género:</strong> {item.gender}
            </p>
            <p className="card-text">
              <strong>Color de ojos:</strong> {item.eyeColour}
            </p>
            <p className="card-text">
              <strong>Color de pelo:</strong> {item.hairColour}
            </p>
          </section>
        </section>
      )}
    </>
  );
};

export default AliveOrFinado;

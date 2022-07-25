import React from "react";

const Characters = ({ characters = [] }) => {
  return (
    <>
      <div className="card mb-3">
        {characters.map((item, index) => (
          <div key={index} className="row g-0">
              <div className="col-md-4">
                <img
                  src={item.image}
                  className="img-fluid rounded-start"
                  alt=""
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <div className="input-group">
                    {item.alive === true ? (
                      <p className="card-text">
                        <small className="text-muted">VIVO</small>
                      </p>
                    ) : (
                      <p className="card-text">
                        <small className="text-muted">FINADO</small>
                      </p>
                    )}
                    <span className="input-group-addon"> / </span>
                    {item.hogwartsStudent === true ? (
                      <p className="card-text">
                        <small className="text-muted">ESTUDIANTE</small>
                      </p>
                    ) : (
                      <p className="card-text">
                        <small className="text-muted">STAFF</small>
                      </p>
                    )}
                  </div>
                  <h5 className="card-title">{item.name}</h5>
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
                </div>
              </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Characters;

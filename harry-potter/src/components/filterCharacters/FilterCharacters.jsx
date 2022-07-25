import React from "react";
import harryPotter from "../../img/harryPotter.png";

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
      <img
        src={harryPotter}
        className="img-fluid rounded-start"
        alt="harryPotter"
      />
      <button onClick={() => hogwartsStudents(setStaff([]))}>
        ESTUDIANTES
      </button>{" "}
      <button onClick={() => hogwartsStaff(setStudents([]))}>STAFF</button>
      {/* return ( */}
      <div className="card mb-3">
        {students.map((item, index) => {
          return (
            <div key={index} className="row g-0">
              {/* <section className="card" style={{minWidth: "200px"}}> */}
              <section className="card" style={{ minWidth: "200px" }}>
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
              </section>
            </div>
          );
        })}
      </div>
      <div className="card mb-3">
        {staff.map((item, index) => {
          return (
            <div key={index} className="row g-0">
              {/* <section className="card" style={{minWidth: "200px"}}> */}
              <section className="card" style={{ minWidth: "200px" }}>
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
              </section>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FilterCharacters;

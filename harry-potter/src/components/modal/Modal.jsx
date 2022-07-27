import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import "../../styles/stylesComponents/modal.scss";
import close from "../../img/close.png";
// import Swal from "sweetalert2";

export function Modal({ attrProduct, onClickCloseModal, visible }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setValue("name", attrProduct?.name);
    setValue("dateOfBirth", attrProduct?.dateOfBirth);
    setValue("eyeColour", attrProduct?.eyeColour);
    setValue("hairColour", attrProduct?.hairColour);
    setValue("gender", attrProduct?.gender);
    setValue("hogwartsStudent", attrProduct?.hogwartsStudent);
    setValue("hogwartsStaff", attrProduct?.hogwartsStaff);
    setValue("image", attrProduct?.image);
  }, [attrProduct]);

  const onSubmit = async (data) => {
    saveNewCharacter({
      ...attrProduct,
      name: data.name,
      dateOfBirth: data.dateOfBirth,
      eyeColour: data.eyeColour,
      hairColour: data.hairColour,
      gender: data.gender,
      hogwartsStudent: data.hogwartsStudent,
      hogwartsStaff: data.hogwartsStaff,
      image: data.image,
      house: "",
      alive: true,
    });
  };

  const saveNewCharacter = (character) => {
    fetch("http://localhost:3004/characters", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(character),
    })
      .then((response) => response.json())
      .then((addedCharacter) => {
        console.log(addedCharacter);
        onClickCloseModal();
      });
    // Swal.fire({
    //   position: "center",
    //   icon: "success",
    //   title: "Personaje agregado",
    //   showConfirmButton: false,
    //   timer: 1500,
    // });
  };

  return visible ? (
    <>
      {/* <div id="myModal" className={styles.modal}> */}
      <div id="myModal" className="modal">
        <div className="modalContent">
          {/* <section className='boxClose'> */}
          <span className="close" onClick={onClickCloseModal}>
            {/* &times; */}
            <img
              src={close}
              // className="img-fluid rounded-start"
              alt="close"
            />
          </span>
          {/* </section> */}

          <section className="titleModal">Agrega un personaje</section>
          <form onSubmit={handleSubmit(onSubmit)}>
            <section className="AllInputs">
              <div className="mb-3">
                <label className="col-form-label">
                  NOMBRE
                </label>
                <input
                  type={"text"}
                  className="form-control inputModal"
                  id="name"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Required",
                    },
                  })}
                ></input>
                {errors.name && (
                  <p className="errorMessage">{errors.name.message}</p>
                )}
              </div>
              <div className="mb-3">
                <label className="col-form-label">
                  CUMPLEAÑOS
                </label>
                <input
                  type={"text"}
                  className="form-control inputModal"
                  id="dateOfBirth"
                  {...register("dateOfBirth", {
                    required: {
                      value: true,
                      message: "Required",
                    },
                  })}
                ></input>
                {errors.dateOfBirth && (
                  <p className="errorMessage">{errors.dateOfBirth.message}</p>
                )}
              </div>

              <div className="mb-3">
                <label className="col-form-label">
                  COLOR OJOS
                </label>
                <input
                  type={"text"}
                  className="form-control inputModal"
                  id="eyeColour"
                  {...register("eyeColour", {
                    required: {
                      value: true,
                      message: "Required",
                    },
                  })}
                ></input>
                {errors.eyeColour && (
                  <p className="errorMessage">{errors.eyeColour.message}</p>
                )}
              </div>

              <div className="mb-3">
                <label className="col-form-label">
                  COLOR DE PELO
                </label>
                <input
                  type={"text"}
                  className="form-control inputModal"
                  id="hairColour"
                  {...register("hairColour", {
                    required: {
                      value: true,
                      message: "Required",
                    },
                  })}
                ></input>
                {errors.hairColour && (
                  <p className="errorMessage">{errors.hairColour.message}</p>
                )}
              </div>

              <section className="radio">
                <label className="col-form-label">
                  GÉNERO
                </label>
                <div className="genderAndPosition">
                  <input
                  className="inputRadio"
                    type="radio"
                    name="theme"
                    value="male"
                    {...register("gender")}
                  />
                  Mujer
                  <input
                  className="inputRadio"
                    type="radio"
                    name="theme"
                    value="female"
                    {...register("gender")}
                  />
                  Hombre
                </div>
              </section>

              <section className="radio">
                <label className="col-form-label">
                  POSICIÓN
                </label>
                <div className="genderAndPosition">
                  <input
                  className="inputRadio"
                    type="radio"
                    name="theme"
                    value="true"
                    {...register("hogwartsStudent")}
                  />
                  Estudiante
                  <input
                  className="inputRadio"
                    type="radio"
                    name="theme"
                    value="true"
                    {...register("hogwartsStaff")}
                  />
                  Staff
                </div>
              </section>

              <div className="inputFile">
              <p className="photo">FOTOGRAFIA PNG</p>
              <input type="file"  {...register("image")}/>
              </div>

            </section>
            <section className="areaSaveButton">
              <button type="submit" className="saveButton">
                <p>GUARDAR</p>
              </button>
            </section>
          </form>
        </div>
      </div>
    </>
  ) : null;
}

Modal.propTypes = {
  attrProduct: PropTypes.object,
  onClickCloseModal: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

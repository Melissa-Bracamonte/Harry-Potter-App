import React, { useEffect } from "react";
// import styles from "./modal.module.css";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
// import Swal from "sweetalert2";

Modal.propTypes = {
    attrProduct: PropTypes.object,
    onClickCloseModal: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired,
};

export function Modal({attrProduct, onClickCloseModal, visible}) {

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
    // setValue("gender", attrProduct?.gender);
  }, [attrProduct]);

  const onSubmit = async (data) => {
    console.log(data);    
    saveNewCharacter({
      ...attrProduct,
      name: data.name,
      dateOfBirth: data.dateOfBirth,
      eyeColour: data.eyeColour,
      hairColour: data.hairColour,
    //   gender: data.gender,
    });
  };

  const saveNewCharacter = async (character) => {
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
    //   title: "Product added",
    //   showConfirmButton: false,
    //   timer: 1500,
    // });
  };

  return visible ? (
    <>
    {/* <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"> */}
    <div class="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
      <span onClick={onClickCloseModal}>
            &times;
          </span>
        <h5 class="modal-title" id="exampleModalLabel">Agrega un personaje</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">


        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="mb-3">
          {/* <label for="recipient-name" class="col-form-label">NOMBRE:</label> */}
            <label class="col-form-label">NOMBRE:</label>
            <input type="text" class="form-control" id="recipient-name"
            {...register("name", {
                    defaultValue: attrProduct?.name,
                    required: {
                      value: true,
                      message: "Required",
                    },
                  })}
                ></input>
                {errors.name && (
                  <p>
                    {errors.name.message}
                  </p>
                )}
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Message:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>


      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Send message</button>
      </div>
    </div>
  </div>
</div>
      {/* <div id="myModal" className={styles.modal}>
        <div className={styles.modalContent}>
          <span className={styles.close} onClick={onClickCloseModal}>
            &times;
          </span>
          <section className={styles.titleModal}>Agrega un personaje</section>
          <form onSubmit={handleSubmit(onSubmit)}>
            <section className={styles.AllInputs}>
              <div>
                <input
                  type={"text"}
                  className={styles.inputModal}
                  id="name"
                  placeholder="NOMBRE"
                  {...register("name", {
                    defaultValue: attrProduct?.name,
                    required: {
                      value: true,
                      message: "Required",
                    },
                  })}
                ></input>
                {errors.name && (
                  <p className={styles.errorMessage}>
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  type={"text"}
                  className={styles.inputModal}
                  id="dateOfBirth"
                  placeholder="CUMPLEAÑOS"
                  {...register("dateOfBirth", {
                    required: {
                      value: true,
                      message: "Required",
                    },
                  })}
                ></input>
                {errors.dateOfBirth && (
                  <p className={styles.errorMessage}>{errors.dateOfBirth.message}</p>
                )}
              </div>

                            <div>
                <input
                  type={"text"}
                  className={styles.inputModal}
                  id="eyeColour"
                  placeholder="COLOR DE OJOS"
                  {...register("eyeColour", {
                    required: {
                      value: true,
                      message: "Required",
                    },
                  })}
                ></input>
                {errors.eyeColour && (
                  <p className={styles.errorMessage}>{errors.eyeColour.message}</p>
                )}
              </div>
              <div>
                <input
                  type={"text"}
                  className={styles.inputModal}
                  id="hairColour"
                  placeholder="COLOR DE PELO"
                  {...register("hairColour", {
                    required: {
                      value: true,
                      message: "Required",
                    },
                  })}
                ></input>
                {errors.hairColour && (
                  <p className={styles.errorMessage}>{errors.hairColour.message}</p>
                )}
              </div>

            </section>
            <section className={styles.areaSaveButton}>
              <button type="submit" className={styles.saveEditButton}>
                Save
              </button>
            </section>
          </form>
        </div>
      </div> */}
    </>
  ) : null;
}
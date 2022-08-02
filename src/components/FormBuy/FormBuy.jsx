import { useForm } from "react-hook-form";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import "./FormBuy.css";
import { cartContext } from "../../context/CartProvider";
import { useContext } from "react";

import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const Formulario = () => {
  const { cartProducts, clear } = useContext(cartContext);

  let navigate = useNavigate();
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm({});

  const onSubmit = (data) => {
    const orden = {
      comprador: {
        nombre: data.nombre,
        email: data.email,
        telefono: data.telefono || null,
      },
      cart: cartProducts,
    };
    const db = getFirestore();
    const collectionCompra = collection(db, "ordenesCompra");
    addDoc(collectionCompra, orden).then(() => clear());

    swal("Compra realizada!", "Graciaspor su compra :D", "success").then(
      setTimeout(() => {
        navigate(`/`);
      }, 2000)
    );
  };

  const incluirTelefono = watch("incluirTelefono");

  return (
    <div className="FormContainer">
      <h3>Ingrese sus datos para finalizar la compra :)</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nombre</label>
          <input
            className="inputsForm"
            type="text"
            {...register("nombre", {
              required: true,
              maxLength: 10,
            })}
          />
          {errors.nombre?.type === "required" && (
            <p className="errors">El campo nombre es requerido</p>
          )}
          {errors.nombre?.type === "maxLength" && (
            <p className="errors">
              El campo nombre debe tener menos de 10 caracteres
            </p>
          )}
        </div>
        <div>
          <label>Email</label>
          <input
            className="inputsForm"
            type="text"
            {...register("email", {
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
            })}
          />
          {errors.email?.type === "pattern" && (
            <p className="errors">El formato del email es incorrecto</p>
          )}
        </div>
        <div>
          <label>¿Incluir teléfono?</label>
          <input
            className="checkForm"
            type="checkbox"
            {...register("incluirTelefono")}
          />
        </div>
        {incluirTelefono && (
          <div>
            <label>Teléfono</label>
            <input
              className="inputsForm"
              type="text"
              {...register("telefono")}
            />
          </div>
        )}
        <input className="inputsForm" type="submit" value="Enviar" />{" "}
        <h5>Gracias por su compra!</h5>
      </form>
    </div>
  );
};

export default Formulario;

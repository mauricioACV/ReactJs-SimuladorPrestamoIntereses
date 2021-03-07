import React, { Fragment, useState } from "react";
import {calcularTotal} from '../helpers';

const Formulario = ({ cantidad, guardarCantidad, plazo, guardarPlazo }) => {
  //Definir el state, estado inical en cero (0) ya que en este punto aun no se ingresa un monto para calular el prestamo
  //el state esta comentado porque lo sacamos de aqui para llevarlo al componente padre. Ya que los datos fluyen desde el
  //componente padre hacia los hijos, pero nunca de los hijos hacia el padre.
  // const [cantidad, guardarCantidad] = useState(0);

  // const leerCantidad = (e) => {
  //     guardarCantidad(parseInt(e.target.value));
  // }

  //definir state propio de este componente
  const [error, guardarError] = useState(false);
  //Funcion para submit del formulario
  const calcularPrestamo = (e) => {
    e.preventDefault();
    //validar
    if (cantidad === 0 || plazo === "") {
      guardarError(true);
      return;
    }

    //Eliminar mensaje de error si esta a la vista y se paso la validacion
    guardarError(false);

    //Realizar la cotizacion
    const totalPrestamo = calcularTotal(cantidad, plazo);

    console.log(totalPrestamo);

  };

  return (
    <Fragment>
      <form onSubmit={calcularPrestamo}>
        <div className="row">
          <div>
            <label>Cantidad Prestamo</label>
            <input
              className="u-full-width"
              type="number"
              placeholder="Ejemplo: 3000"
              // onChange={leerCantidad}
              onChange={(e) => guardarCantidad(parseInt(e.target.value))}
            />
          </div>
          <div>
            <label>Plazo para Pagar</label>
            <select
              className="u-full-width"
              onChange={(e) => guardarPlazo(parseInt(e.target.value))}
            >
              <option value="">Seleccionar</option>
              <option value="3">3 meses</option>
              <option value="6">6 meses</option>
              <option value="12">12 meses</option>
              <option value="24">24 meses</option>
            </select>
          </div>
          <div>
            <input
              type="submit"
              value="Calcular"
              className="button-primary u-full-width"
            />
          </div>
        </div>
      </form>
      
      {/* validar si state error esta true mostrar parrafo con mensaje de error, sino, no hacer nada*/}
      {(error) ? <p className="error">Todos los campos son obligatorios</p> : null}
      
    </Fragment>
  );
};

export default Formulario;

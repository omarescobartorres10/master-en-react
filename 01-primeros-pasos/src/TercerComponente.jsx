import PropTypes from "prop-types";

export const TercerComponente = ({ nombre, apellidos="Torres", ficha_Medica }) => {
  return (
    <div>
      <h1>Tercer componente</h1>

      <ol>
        <li>{nombre}</li>
        <li>{apellidos}</li>
        <li>{ficha_Medica.altura}</li>
      </ol>
    </div>
  );
};

TercerComponente.propTypes = {
  nombre: PropTypes.string.isRequired,
  apellidos: PropTypes.string.isRequired,
  ficha_Medica: PropTypes.object,
};
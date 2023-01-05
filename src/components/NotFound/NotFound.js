import "./NotFound.css";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="not-found__title">
        ¡Error! La página solicitada no existe
      </h1>
      <Link to="/">
        <button className="not-found__button">Volver al Inicio</button>
      </Link>
    </div>
  );
};

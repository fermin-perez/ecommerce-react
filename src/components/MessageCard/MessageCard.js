import "./MessageCard.css";
import { Link } from "react-router-dom";

export const MessageCard = ({ icon, title, message }) => {
  return (
    <div className="message-card__container">
      <div className="message-card__message">
        <div className="message-card__image-container">
          <img src={icon} alt="icon" />
        </div>
        <span>{title}</span>
      </div>
      <span className="message-card__invite">{message}</span>
      <Link to={"/"}>
        <button className="message-card__button">Ver Productos</button>
      </Link>
    </div>
  );
};

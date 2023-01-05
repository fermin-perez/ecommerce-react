import "./NavBar.css";
import brand from "../../assets/img/brand.png";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img src={brand} alt="Xperiment Brand"></img>
        </Link>
      </div>
      <ul className="navbar__links">
        <li className="navbar__link">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "navbar__link--active" : "navbar__link--disabled"
            }
          >
            Inicio
          </NavLink>
        </li>
        <li className="navbar__link">
          <NavLink
            to="category/celulares"
            className={({ isActive }) =>
              isActive ? "navbar__link--active" : "navbar__link--disabled"
            }
          >
            Celulares
          </NavLink>
        </li>
        <li className="navbar__link">
          <NavLink
            to="category/notebooks"
            className={({ isActive }) =>
              isActive ? "navbar__link--active" : "navbar__link--disabled"
            }
          >
            Notebooks
          </NavLink>
        </li>
        <li className="navbar__link">
          <NavLink
            to="category/tablets"
            className={({ isActive }) =>
              isActive ? "navbar__link--active" : "navbar__link--disabled"
            }
          >
            Tablets
          </NavLink>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

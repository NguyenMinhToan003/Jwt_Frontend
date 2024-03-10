import "./navShopLite.scss";
import Bag from "../../photo/Bag";
import { NavLink } from "react-router-dom";
import Add from "../../photo/Add";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
const NavShopLite = (props) => {
  const { cart } = useContext(CartContext);
  return (
    <>
      <div className="navshoplite">
        <div className="navshoplite-menu">
          <div className="navshoplite-menu-left">
            <div className="navshoplite-menu-left-brand">
              <span>MY</span>
              <span className="crt">BOOK</span>
            </div>
            <NavLink to="/cart" className="navshoplite-menu-left-bag">
              {cart.length !== 0 ? (
                <div className="navshoplite-menu-left-bag-num">
                  {cart.length}
                </div>
              ) : (
                ""
              )}
              <Bag />
            </NavLink>
            <NavLink to="/book/upload">
              <Add />
            </NavLink>
          </div>
          <div className="navshoplite-menu-right">
            <NavLink to="/" exact className="navshoplite-menu-right-link">
              Home
            </NavLink>
            <NavLink to="/buyEbook" className="navshoplite-menu-right-link">
              Buy Ebook
            </NavLink>
            <NavLink to="/user" className="navshoplite-menu-right-link">
              Account
            </NavLink>
            <NavLink to="/role" className="navshoplite-menu-right-link">
              Roles
            </NavLink>
            <NavLink to="/group" className="navshoplite-menu-right-link">
              Group-Role
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
export default NavShopLite;

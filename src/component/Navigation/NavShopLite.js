import "./navShop.scss";
import Bag from "../../photo/Bag";
import { NavLink } from "react-router-dom";
import Add from "../../photo/Add";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import NavSearch from "./navSearch";
const NavShopLite = (props) => {
  const { cart } = useContext(CartContext);
  return (
    <>
      <div className="navshop-menu">
        <div className="navshop-menu-left">
          <div className="navshop-menu-left-brand">
            <span>MY</span>
            <span className="crt">BOOK</span>
          </div>
          <NavLink to="/cart" className="navshop-menu-left-bag">
            {cart.length !== 0 ? (
              <div className="navshop-menu-left-bag-num">{cart.length}</div>
            ) : (
              ""
            )}
            <Bag />
          </NavLink>
          <NavLink to="/book/upload">
            <Add />
          </NavLink>
          <NavSearch />
        </div>
        <div className="navshop-menu-right">
          <NavLink to="/" exact className="navshop-menu-right-link">
            Home
          </NavLink>
          <NavLink to="/buyEbook" className="navshop-menu-right-link">
            Buy Ebook
          </NavLink>
          <NavLink to="/user" className="navshop-menu-right-link">
            Account
          </NavLink>
          <NavLink to="/role" className="navshop-menu-right-link">
            Roles
          </NavLink>
          <NavLink to="/group" className="navshop-menu-right-link">
            Group-Role
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default NavShopLite;

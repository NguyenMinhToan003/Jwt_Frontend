import "./navShop.scss";
import Search from "../../photo/search";
import FilterNavShop from "../../photo/filterNavShop";
import PhotoBook from "../../photo/book.png";
import Bag from "../../photo/Bag";
import { NavLink } from "react-router-dom";
import Dot from "../../photo/dot";
const NavShop = (props) => {
  return (
    <>
      <div className="navshop">
        <div className="navshop-menu">
          <div className="navshop-menu-left">
            <div className="navshop-menu-left-brand">
              <span>MY</span>
              <span className="crt">BOOK</span>
            </div>
            <div className="navshop-menu-left-bag">
              <Bag />
            </div>
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
        <span className="navshop-title">appreciate your author's work</span>
        <span className="navshop-text">
          lightweight article where discussing matters relating{" "}
        </span>
        <div className="navshop-search">
          <input placeholder="Search Book" />
          <div className="navshop-search-icon">
            <Search />
          </div>
        </div>
        <div className="navshop-filter">
          <FilterNavShop />
        </div>
        <div className="navshop-photo">
          <img src={PhotoBook} />
        </div>
        <div className="dot">
          <Dot />
        </div>
        <div className="circel"></div>
      </div>
    </>
  );
};
export default NavShop;

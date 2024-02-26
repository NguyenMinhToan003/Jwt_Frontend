import "./navSearch.scss";
import Search from "../../photo/search";
import { NavLink } from "react-router-dom";
const NavSearch = (props) => {
  let listSearch = props.listSearch;
  let hanlderSearchEbook = props.keyWords;
  return (
    <div className="nav-search">
      <Search />
      <input
        className="nav-search-input "
        placeholder="Search"
        onChange={(event) => hanlderSearchEbook(event)}
      />
      {listSearch && listSearch.length > 0 && (
        <ul className="nav-search-list">
          <li className="nav-search-list-title" key="title-search">
            <span>Code</span>
            <span>Name</span>
            <span>Ebook</span>
            <span>Price</span>
            <span>Rating</span>
          </li>
          {listSearch &&
            listSearch.map((item, index) => {
              let link = `/detailBook?id=${item.id}`;
              return (
                <NavLink to={link}>
                  <li className="nav-search-list-item cart" key={item.id + 100}>
                    <span>{item.id}</span>
                    <span>{item.name}</span>
                    <div>
                      <img src={item.urlImage} alt={item.name} />
                    </div>
                    <span>{item.price}</span>
                    <span>{item.vote}</span>
                  </li>
                </NavLink>
              );
            })}
          <span>Find :{listSearch.length}</span>
        </ul>
      )}
    </div>
  );
};

export default NavSearch;

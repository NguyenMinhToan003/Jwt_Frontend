import "./header.scss";
const Header = (props) => {
  return (
    <>
      <div className="header">
        <div className="header-container">
          <span className="header-title">2020 MYBOOK</span>
          <div className="header-list">
            <span>Explorer</span>
            <span>Shop</span>
            <span>About</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

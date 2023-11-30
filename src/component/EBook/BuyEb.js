import VoteStar from "../../photo/voteStar";
import photoBookImage from "../../photo/photo-book2.png";
import "./buyEb.scss";
import { NavLink } from "react-router-dom";
import Header from "../Header/Header";
const BuyEb = (props) => {
  return (
    <>
      <div className="buyEb">
        <div className="buyEb-photo">
          <img src={photoBookImage} />
        </div>
        <div className="buyEb-content">
          <span className="buyEb-title">all the light we cannot see</span>
          <span className="buyEb-author">by anthony doerr</span>
          <div className="buyEb-vote">
            <div className="vote-star">
              <VoteStar n={4} />
            </div>
            <span>1,988,288 voters</span>
          </div>
          <span className="buyEb-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi
            eleifend enim, tristique
          </span>
          <NavLink to="/detailBook" className="buyEb-button">
            Buy now
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default BuyEb;

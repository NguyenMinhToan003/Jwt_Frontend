import VoteStar from "../../photo/voteStar";
import photoBookImage from "../../photo/photo-book2.png";
import "./buyEb.scss";
import { NavLink } from "react-router-dom";
import Header from "../Header/Header";
const BuyEb = (props) => {
  console.log(props.img);
  return (
    <>
      <div className="buyEb">
        <div className="buyEb-photo">
          <img src={props.img} alt={props.name} />
        </div>
        <div className="buyEb-content">
          <span className="buyEb-title">{props.name}</span>
          <span className="buyEb-author">{props.author}</span>
          <div className="buyEb-vote">
            <div className="vote-star">
              <VoteStar n={+props.vote} />
            </div>
            <span>1,988,288 voters</span>
          </div>
          <span className="buyEb-text">{props.description.slice(0, 100)}</span>
          <NavLink to="/detailBook" className="buyEb-button">
            Buy now
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default BuyEb;

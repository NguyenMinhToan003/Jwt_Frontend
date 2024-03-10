import VoteStar from "../../photo/voteStar";
import "./buyEbookItem.scss";
import { NavLink } from "react-router-dom";

const BuyEbookItem = (props) => {
  let link = `/detailBook?id=${props.id}`;
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
          <span className="buyEb-text">{props.description}</span>
          <NavLink to={link} className="buyEb-button">
            Buy now
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default BuyEbookItem;

import "./book.scss";
import photoBookImage from "../../photo/photo-book.png";
import VoteStar from "../../photo/voteStar";

const Ebook1 = (props) => {
  return (
    <>
      <div className="book">
        <div className="book-image">
          <img src={photoBookImage}></img>
        </div>
        <div className="book-info">
          <span className="book-info-name">all the light we cannot see</span>
          <span className="book-info-author">by anthony doerr</span>
          <div className="book-info-vote">
            <div>
              <VoteStar n={5} />
            </div>
            <span className="book-info-vote-number">1,988,288 votes</span>
          </div>
          <span className="book-info-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi
            eleifend enim, tristique{" "}
          </span>
        </div>
      </div>
    </>
  );
};
export default Ebook1;

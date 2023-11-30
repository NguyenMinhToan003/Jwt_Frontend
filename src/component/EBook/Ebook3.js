import "./book.scss";
import VoteStar from "../../photo/voteStar";
import Photo from "../../photo/photo-book4.png";
const Ebook3 = (props) => {
  return (
    <>
      <div className="ebook3">
        <div className="ebook3-card">
          <div className="ebook3-photo">
            <img src={Photo} />
          </div>
          <div className="ebook3-info">
            <span className="ebook3-info-name">crazy rich asians</span>
            <span className="ebook3-info-author">by kevin kwan</span>
            <div className="ebook3-info-vote">
              <div className="vote-star">
                <VoteStar n={5} />
              </div>
              <span className="ebook3-info-vote-number">1,988,288 votes</span>
            </div>
            <span className="ebook3-info-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              morbi eleifend enim, tristique{" "}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Ebook3;

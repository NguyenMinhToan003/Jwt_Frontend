import VoteStar from "../../photo/voteStar";
import "./book.scss";
import photoBookImage from "../../photo/photo-book.png";

const Ebook2 = (props) => {
  return (
    <>
      <div className="book2">
        <div className="book2-image">
          <img src={photoBookImage} />
        </div>
        <div className="book2-content">
          <span className="book2-title">Tentang kamu</span>
          <span className="book2-author">tere liye</span>
          <div className="book2-vote">
            <VoteStar n={3} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Ebook2;

import "./detailBook.scss";
import Ebook3 from "./Ebook3";
import Dot from "../../photo/dot";
import Cancel from "../../photo/CancelIcon";
import VoteStar from "../../photo/voteStar";
import Photo from "../../photo/photo-book3.png";
import { useHistory } from "react-router-dom";
const DetailEbook = (props) => {
  let history = useHistory();
  const handlerCancel = () => {
    history.push("/buyEbook");
  };
  return (
    <>
      <div className="ebookDetail">
        <div className="ebookDetail-header"></div>
        <div
          className="cancel"
          onClick={() => {
            handlerCancel();
          }}>
          <Cancel />
        </div>

        <div className="dot dot1">
          <Dot />
        </div>
        <div className="dot dot2">
          <Dot />
        </div>
        <div className="cicel1 cicel"></div>
        <div className="cicel2 cicel"></div>
        <div>
          <div className="ebookDetail-content">
            <div className="ebookDetail-main">
              <div className="ebook-main">
                <div className="ebook-main-photo">
                  <img src={Photo} />
                </div>
                <div className="ebook-main-info">
                  <div className="ebook-main-info-container">
                    <span className="ebook-main-info-name">garis waktu</span>
                    <div className="ebook-main-info-detail">
                      <span>by Fiersa besari</span>
                      <span>1 juli 2016</span>
                      <div>
                        <VoteStar n={5} />
                      </div>
                    </div>
                    <div className="ebook-main-info-number">
                      <span>3.7M read</span>
                      <span>9.8K Votes</span>
                    </div>
                  </div>

                  <div className="ebook-main-button">
                    <button className="ebook-main-button-buy">Buy now</button>
                    <button className="ebook-main-button-read">
                      read book
                    </button>
                  </div>
                </div>
              </div>
              <div className="ebookDetail-detail">
                <span className="ebookDetail-detail-title">Sinopsis</span>
                <div className="ebookDetail-detail-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Varius nisl sed sit aliquet nullam pretium. Velit vel aliquam
                  amet augue. Risus id purus dolor dolor. Sagittis at vulputate
                  rhoncus pharetra purus vitae, ac. Sit nam eleifend mauris,
                  duis mattis leo, ut. Viverra accumsan elementum vehicula orci
                  magna. Elementum, euismod ut sed at ut non. Eget commodo mi
                  scelerisque erat. Mus adipiscing et mattis vitae sapien
                  turpis. Eu, sit urna, convallis in commodo, sed condimentum
                  dictumst vitae. Ultricies aenean a non tincidunt tortor ut
                  pulvinar. Vulputate viverra tempor sed turpis at blandit
                  malesuada at quam. Enim cursus vitae turpis lectus egestas
                  nunc risus.
                </div>
                <div className="ebookDetail-detail-tag">
                  <button className="button">Biografi</button>
                  <button className="button">AutoBiografi</button>
                  <button className="button">Memoar</button>
                </div>
                <div className="ebookDetail-detail-info">
                  <span className="detail-title">Informasi Tambahan</span>
                </div>
                <button className="ebookDetail-detail-seeComment">
                  See comment
                </button>
              </div>
            </div>
            <div className="ebookDetail-list">
              <span className="ebookDetail-list-title">Cerita serupa</span>
              <Ebook3 />
              <Ebook3 />
              <Ebook3 />
              <Ebook3 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailEbook;

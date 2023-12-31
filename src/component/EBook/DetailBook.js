import "./detailBook.scss";
import Ebook3 from "./Ebook3";
import Dot from "../../photo/dot";
import Cancel from "../../photo/CancelIcon";
import VoteStar from "../../photo/voteStar";
import { useHistory } from "react-router-dom";
import { ebookDetail } from "../../services/bookService";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import moment from "moment";
const DetailEbook = (props) => {
  var queryString = window.location.search;
  const [ebook, setEbook] = useState({});
  const fetchData = async () => {
    let response = await ebookDetail(queryString);
    if (response && +response.EC === 0) {
      var dateString = response.DT.date;
      var formattedDate = moment(dateString).format("D MMMM YYYY");
      setEbook({ ...response.DT, date: formattedDate });
    } else toast.error(response.EM);
  };
  useEffect(() => {
    fetchData();
  }, []);
  let history = useHistory();
  const handlerCancel = () => {
    history.push("/buyEbook");
  };
  return (
    <>
      <div className="ebookDetail">
        <div>
          <div className="ebookDetail-content">
            <div className="ebookDetail-main">
              <div className="ebook-main">
                <div className="ebook-main-photo">
                  <img src={ebook.urlImage} />
                </div>
                <div className="ebook-main-info">
                  <div className="ebook-main-info-container">
                    <span className="ebook-main-info-name">{ebook.name}</span>
                    <div className="ebook-main-info-detail">
                      <span>{ebook.author}</span>
                      <span>{ebook.date}</span>
                      <div>
                        <VoteStar n={ebook.vote} />
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
                  {ebook.description}
                </div>
                <div className="ebookDetail-detail-tag">
                  <button className="button">Biografi</button>
                  <button className="button">AutoBiografi</button>
                  <button className="button">Memoar</button>
                </div>
                <div className="ebookDetail-detail-info">
                  <span className="detail-title">Informasi Tambahan</span>
                </div>
              </div>
              <button className="ebookDetail-detail-seeComment">
                See comment
              </button>
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
      </div>
    </>
  );
};

export default DetailEbook;

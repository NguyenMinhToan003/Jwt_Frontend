import { useState, useContext } from "react";
import { ebookUpload } from "../../services/bookService";
import { toast } from "react-toastify";
import "./upload.scss";
import VoteStar from "../../photo/voteStar";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import moment from "moment";
const UploadFile = (props) => {
  let { dataUser } = useContext(UserContext);
  const id = dataUser.account.id;
  let history = useHistory();
  const [status, setStatus] = useState(false);
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [des, setDes] = useState("");
  const [vote, setVote] = useState(5);
  const [file, setFile] = useState();
  const [img, setImg] = useState();
  const [date, setDate] = useState(moment());
  const handlePriview = () => {
    if (!name || !author || !des || !vote || !file || !date) return;
    setStatus(true);
    setImg(URL.createObjectURL(file));
  };
  const handleSubmit = async () => {
    let formData = new FormData();
    formData.append("image", file);
    formData.append("name", name);
    formData.append("date", date);
    formData.append("author", author);
    formData.append("vote", vote);
    formData.append("description", des);
    formData.append("user", id);
    let response = await ebookUpload(formData);
    if (response && +response.EC === 0) {
      toast.success(response.EM);
    } else toast.error(response.EM);
  };
  const handleCancel = () => {
    history.push("/");
  };
  return (
    <>
      <div className="upload">
        <div
          className="cancle btn btn-danger"
          onClick={() => {
            handleCancel();
          }}>
          Back
        </div>
        {status && (
          <div
            className="btn btn-success upload-btn"
            onClick={() => {
              handleSubmit();
            }}>
            Upload EBook
          </div>
        )}
        <div className="upload-container">
          <div className="upload-input">
            <span className="upload-input-title">Input EBook</span>
            <div className="upload-input-name">
              <span>Name</span>
              <div>
                <input
                  placeholder="Hint text"
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </div>
            </div>
            <div className="upload-input-author">
              <span>Author</span>
              <div>
                <input
                  placeholder="Hint text"
                  onChange={(event) => {
                    setAuthor(event.target.value);
                  }}
                />
              </div>
            </div>
            <div className="upload-input-description">
              <span>Description</span>
              <div>
                <textarea
                  placeholder="Hint text"
                  onChange={(event) => {
                    setDes(event.target.value);
                  }}
                />
              </div>
            </div>
            <div className="upload-input-date">
              <span>Date</span>
              <div>
                <input
                  type="date"
                  value={date.format("YYYY-MM-DD")}
                  onChange={(e) => setDate(moment(e.target.value))}
                />
              </div>
            </div>
            <div className="upload-input-vote">
              <span className="upload-input-vote-star">Start vote</span>
              <div>
                <input
                  type="number"
                  placeholder="Hint number"
                  min="0"
                  max="5"
                  value={vote}
                  onChange={(event) => {
                    setVote(+event.target.value);
                  }}
                />
              </div>
            </div>
            <input
              type="file"
              onChange={(event) => {
                setFile(event.target.files[0]);
              }}
            />
            <button
              className="upload-input-priview"
              onClick={() => {
                handlePriview();
              }}>
              Priview
            </button>
          </div>
        </div>
        <div className="upload-container">
          <div className="upload-output">
            <div className="upload-output-main">
              <div className="upload-output-main-photo">
                <img src={img} />
              </div>
              <div className="upload-output-main-info">
                <span className="upload-output-main-info-name">
                  {name ? name : "garis waktu"}
                </span>
                <div className="upload-output-main-info-author">
                  <span className="author">
                    {author ? author : "by Fiersa besari"}
                  </span>
                  <span className="date">
                    {date ? date.format("D MMMM YYYY") : "1 juli 2016"}
                  </span>
                </div>
                <div className="upload-output-main-info-votestar">
                  <VoteStar n={vote} />
                </div>
                <div className="upload-output-main-info-text">
                  <span>3.7M read</span>
                  <span>9.8K Votes</span>
                </div>
                <div className="upload-output-main-info-btn">
                  <button className="buy">Buy now</button>
                  <button className="read">read book</button>
                </div>
              </div>
            </div>
            <div className="upload-output-description">
              <span>Sinopsis</span>
              <div>
                {des ? (
                  des
                ) : (
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Varius nisl sed sit aliquet nullam pretium. Velit vel
                    aliquam amet augue. Risus id purus dolor dolor. Sagittis at
                    vulputate rhoncus pharetra purus vitae, ac. Sit nam eleifend
                    mauris, duis mattis leo, ut. Viverra accumsan elementum
                    vehicula orci magna. Elementum, euismod ut sed at ut non.
                    Eget commodo mi scelerisque erat. Mus adipiscing et mattis
                    vitae sapien turpis. Eu, sit urna, convallis in commodo, sed
                    condimentum dictumst vitae. Ultricies aenean a non tincidunt
                    tortor ut pulvinar. Vulputate viverra tempor sed turpis at
                    blandit malesuada at quam. Enim cursus vitae turpis lectus
                    egestas nunc risus.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadFile;

import Category from "../home/Category";
import BuyEb from "../EBook/BuyEb";
import "./buyEbook.scss";
import Header from "../Header/Header";
import NavShop from "../Navigation/NavShop";
import { ebookRead } from "../../services/bookService";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
const BuyEbook = (props) => {
  const [ebook, setEbook] = useState([]);
  const fetchEBook = async () => {
    let data = await ebookRead();
    setEbook(data.DT);
  };
  useEffect(() => {
    fetchEBook();
    console.log(ebook);
  }, []);
  return (
    <>
      <NavShop />
      <div className=" mt-5 ebook home">
        <Category />
        <div className="ebook-list">
          {ebook && ebook.length > 0
            ? ebook.map((item, index) => {
                console.log(item);
                return (
                  <BuyEb
                    key={index}
                    img={item.urlImage}
                    name={item.name}
                    description={item.description}
                    author={item.author}
                    vote={+item.vote}
                  />
                );
              })
            : ""}
        </div>
      </div>
      <Header />
    </>
  );
};
export default BuyEbook;

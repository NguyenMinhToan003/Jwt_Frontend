import Category from "../home/Category";
import BuyEb from "../EBook/BuyEb";
import "./buyEbook.scss";
import Header from "../Header/Header";
import NavShop from "../Navigation/NavShop";
const BuyEbook = (props) => {
  return (
    <>
      <NavShop />
      <div className=" mt-5 ebook home">
        <Category />
        <div className="ebook-list">
          <BuyEb />
          <BuyEb />
          <BuyEb />
          <BuyEb />
          <BuyEb />
          <BuyEb />
          <BuyEb />
          <BuyEb />
          <BuyEb />
          <BuyEb />
          <BuyEb />
        </div>
      </div>
      <Header />
    </>
  );
};
export default BuyEbook;

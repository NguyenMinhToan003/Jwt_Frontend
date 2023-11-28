import Category from "../home/Category";
import BuyEb from "./BuyEb";
import "./ebook.scss";
const BuyEbook = (props) => {
  return (
    <>
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
    </>
  );
};
export default BuyEbook;

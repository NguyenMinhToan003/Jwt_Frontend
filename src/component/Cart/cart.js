import Action from "../../photo/action";
import "./cart.scss";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { cartLoad, cartSearch } from "../../services/cartService";
import VoteStar from "../../photo/voteStar";
import Search from "../../photo/search";
import Cancel from "../../photo/CancelIcon";
import { useHistory } from "react-router-dom";

const MainCart = (props) => {
  let history = useHistory();
  let { cart, updateListCart, addToCart, delToCart } = useContext(CartContext);
  const [listCart, setlistCart] = useState(cart);

  useEffect(() => {
    fetchListCart();
  }, []);
  useEffect(() => {
    setlistCart(handlerDataFetch(listCart));
  }, [cart]);

  // handler first run
  const fetchListCart = async () => {
    let response = await cartLoad(cart);
    if (response && +response.EC === 0) {
      setlistCart(handlerDataFetch(response.DT));
    }
  };

  //handler state cart
  const handlerDataFetch = (data) => {
    let propData = [...data];
    propData.map((item, index) => {
      let count = cart[index].count;
      propData[index] = { ...item, count };
    });
    return propData;
  };

  const hanlderCountUp = (ebook) => {
    addToCart({ ...ebook, count: 1 });
  };

  const hanlderCountDown = (ebook) => {
    delToCart({ ...ebook, count: 1 });
  };
  const handlerAction = (item) => {
    // delToCart({ ...item, count: 1 });
  };
  const hanlderPopupPayment = () => {
    console.log(">>>>>>Payment: ", listCart);
  };
  const handlerCancelPage = () => {
    history.goBack();
  };

  const hanlderSearchEbook = async (event) => {
    let key = event.target.value;
    let data = await cartSearch({ key: key, offset: 0, limit: 5 });
    console.log("<<<<", data);
  };
  return (
    <>
      <div className="cart">
        <div className="cart-cancel" onClick={() => handlerCancelPage()}>
          <Cancel />
        </div>
        <div className="cart-filter">
          <Search />
          <input
            className="cart-filter-input "
            placeholder="Search"
            onChange={(event) => hanlderSearchEbook(event)}
          />
        </div>
        <button
          className="btn btn-primary cart-btnSubmint"
          onClick={() => hanlderPopupPayment()}>
          Payment
        </button>
        <div className="cart-container">
          {" "}
          <div className="cart-title cart-table">
            <div>code</div>
            <div>ebook</div>
            <div>name</div>
            <div>Rate</div>
            <div>price</div>
            <div>count</div>
            <div>Total price</div>
            <div>
              <iconAction />
            </div>
          </div>
          <ul className="cart-list">
            {listCart &&
              listCart.map((item, index) => {
                return (
                  <li className="cart-item cart-table" key={item.id}>
                    <div>{item.id}</div>
                    <div>
                      <img
                        src={item.urlImage}
                        alt={item.name}
                        className="cart-item-img"
                      />
                    </div>
                    <div>{item.name}</div>
                    <div>
                      <VoteStar n={item.vote} />
                    </div>
                    <div className="cart-item-price">{item.price}</div>
                    <div className="d-flex gap-1">
                      <button
                        className="btn btn-dark"
                        onClick={() => hanlderCountDown(item)}>
                        -
                      </button>
                      <span>{item.count}</span>
                      <button
                        className="btn btn-dark"
                        onClick={() => hanlderCountUp(item)}>
                        {" "}
                        +{" "}
                      </button>
                    </div>
                    <div className="cart-item-totalP">
                      {item.price * item.count}{" "}
                    </div>
                    <div>
                      <Action onClick={() => handlerAction(item)} />
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
};
export default MainCart;

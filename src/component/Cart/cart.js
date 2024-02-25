import Action from "../../photo/action";
import "./cart.scss";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { cartLoad, cartSearch } from "../../services/cartService";
import VoteStar from "../../photo/voteStar";
import Search from "../../photo/search";
import Cancel from "../../photo/CancelIcon";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";

const MainCart = (props) => {
  let history = useHistory();
  let { cart, addToCart, delToCart } = useContext(CartContext);
  const [listCart, setlistCart] = useState(cart);
  const [listSearchCart, setListSearchCart] = useState([]);

  //first call api in server
  useEffect(() => {
    fetchListCart();
  }, []);

  // hanlder data to Context
  useEffect(() => {
    setlistCart(handlerDataFetch(listCart));
  }, [cart]);

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
  const handlerAction = (item) => {};
  const hanlderPopupPayment = () => {
    console.log(">>>>>>Payment: ", listCart);
  };
  const handlerCancelPage = () => {
    history.goBack();
  };

  // debounce func
  const debounce = (callback, delay) => {
    let debounceTimer = null;
    return (...args) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  };

  const funcSearch = debounce(async (event) => {
    console.log("Keywords>>>>", event.target.value);
    let response = await cartSearch({
      key: event.target.value,
      offset: 0,
      limit: 5,
    });
    response && +response.EC === 0 && setListSearchCart(response.DT);
  }, 1000);

  useEffect(() => {
    console.log("respose: ", listSearchCart);
  }, [listSearchCart]);
  const hanlderSearchEbook = async (event) => {
    funcSearch(event);
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
          {listSearchCart && listSearchCart.length > 0 && (
            <ul className="cart-filter-list">
              <li className="cart-filter-list-title" key="title-search">
                <span>Code</span>
                <span>Name</span>
                <span>Ebook</span>
                <span>Price</span>
                <span>Rating</span>
              </li>
              {listSearchCart &&
                listSearchCart.map((item, index) => {
                  let link = `/detailBook?id=${item.id}`;
                  return (
                    <NavLink to={link}>
                      <li
                        className={
                          (index + 1) / 2 === 0
                            ? "cart-filter-list-item cart-filter-list-item-odd"
                            : "cart-filter-list-item cart-filter-list-item-even"
                        }
                        key={item.id + 100}>
                        <span>{item.id}</span>
                        <span>{item.name}</span>
                        <div>
                          <img src={item.urlImage} alt={item.name} />
                        </div>
                        <span>{item.price}</span>
                        <span>{item.vote}</span>
                      </li>
                    </NavLink>
                  );
                })}
              <span>Find :{listCart.length}</span>
            </ul>
          )}
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

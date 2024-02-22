import Action from "../../photo/action";
import "./cart.scss";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { cartLoad } from "../../services/cartService";
import VoteStar from "../../photo/voteStar";
const MainCart = (props) => {
  let { cart } = useContext(CartContext);
  const [fetchCart, setFetchCart] = useState([]);
  const fetchListCart = async () => {
    let response = await cartLoad(cart);
    console.log(response);
    if (response && +response.EC === 0) {
      setFetchCart(response.DT);
    }
  };
  useEffect(() => {
    fetchListCart();
    console.log(fetchCart);
  }, []);

  return (
    <>
      <div className="cart">
        <div className="cart-title cart-table">
          <div>code</div>
          <div>ebook</div>
          <div>name</div>
          <div>price</div>
          <div>Rate</div>
          <div>count</div>
          <div>Total price</div>
          <div>
            <Action />
          </div>
        </div>
        <ul className="cart-list">
          {fetchCart.map((item, index) => {
            return (
              <li className="cart-item cart-table" key={item.id}>
                <div>{item.id}</div>
                <div>
                  <img src={item.urlImage} alt={props.name} />
                </div>
                <div>{item.name}</div>
                <div>price</div>
                <div>
                  <VoteStar n={item.vote} />
                </div>
                <div>{cart[index].count}</div>
                <div>Total price</div>
                <div>
                  <Action />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default MainCart;

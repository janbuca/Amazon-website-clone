import React, { useContext } from "react";
import classes from "./Cart.module.css";
import LayOut from "../../Componets/LayOut/LayOut";
import { DataContext } from "../../Componets/DataProvider/DataProvider";
import ProductCard from "../../Componets/Product/ProductCard.jsx";
import CurrencyFormat from "../../Componets/CurrencyFormat/CurrencyFormat.jsx";
import { Link } from "react-router-dom";

function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);

  const total = basket.reduce((amount,item)=>{
    return item.price * item.amount + amount
  },0)

  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.cart__container}>
          <h2>Hello</h2>
          <h3>Your shopping basket </h3>
          <hr />
          {basket?.length == 0 ? (
            <p>Opps ! No item in your cart</p>
          ) : (
            basket?.map((item, i) => {
              return (
                <section className={classes.cart_product}>
                  <ProductCard
                    key={i}
                    product={item}
                    renderDesc={true}
                    renderAdd={false}
                    flex={true}
                  />
                </section>
              );
            })
          )}
        </div>

        {basket?.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>Subtotal ({basket?.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>
            <Link to="/payments">Continue to checkout</Link>
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Cart;

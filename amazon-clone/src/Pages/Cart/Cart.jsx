import React, { useContext } from "react";
import classes from "./Cart.module.css";
import LayOut from "../../Componets/LayOut/LayOut";
import { DataContext } from "../../Componets/DataProvider/DataProvider";
import ProductCard from '../../Componets/Product/ProductCard.jsx'

function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);

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
        <div></div>
      </section>
    </LayOut>
  );
}

export default Cart;

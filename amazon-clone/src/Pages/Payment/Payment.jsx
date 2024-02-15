import React, { useContext, useState } from "react";
import classes from "./Payment.module.css";
import LayOut from "../../Componets/LayOut/LayOut";
import { DataContext } from "../../Componets/DataProvider/DataProvider";
import ProductCard from "../../Componets/Product/ProductCard";
import {
   useStripe,
    useElements, 
    CardElement 
  } from "@stripe/react-stripe-js";
  

function Payment() {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  console.log(user);

  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  const [cardError, setCardError] = useState(null);
  const [processing, setProcessing] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const handleChange = (e) => {
    // console.log(e);
    e?.error?.message ? setCardError(e?.error?.message) : setCardError("");
  };

  return (
    <LayOut>
      {/* header */}
      <div className={classes.payment__header}>
        Checkout ({totalItem}) items
      </div>
      {/* payment method */}
      <section className={classes.payment}>
        {/* address */}
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>123 React Lane</div>
            <div>Addis Abeba, Ethiopian</div>
          </div>
        </div>
        <hr />
        {/* product */}
        <div className={classes.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {basket?.map((item) => (
              <ProductCard product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />
        {/* card form */}
        <div className={classes.flex}>
          <h3>Payment methods</h3>
          <div className={classes.payment__card__container}>
            <div className={classes.payment__details}>
              <form action="">
                {/* error */}
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}

                {/* card element */}
                <CardElement onChange={handleChange} />

                  {/* price */}
                  <div className={classes.payment__price}>
                    <div>
                      <span style={{ display: "flex", gap: "10px" }}>
                      <p>Total Order |</p>
                      </span>
                    </div>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Payment;

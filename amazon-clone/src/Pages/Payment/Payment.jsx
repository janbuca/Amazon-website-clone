import React from 'react';
import classes from './Payment.module.css';
import LayOut from '../../Componets/LayOut/LayOut';

function Payment() {
  return (
    <LayOut>
        {/* header */}
      <div className={classes.payment__header}>
        Checkout  items
      </div>
      {/* payment method */}
      <section className={classes.payment}>
        {/* address */}
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>email</div>
            <div>123 React Lane</div>
            <div>Chicago, IL</div>
          </div>
        </div>
        <hr />
        {/* product */}
        <div className={classes.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {/* {basket?.map((item) => (
              <ProductCard product={item} flex={true} />
            ))} */}
          </div>
        </div>
        <hr />
         {/* card form */}
         <div className={classes.flex}>
         <h3>Payment methods</h3>
         <div className={classes.payment__card__container}>
          <div className={classes.payment__details}>
            <form action="">
              
            </form>

          </div>

         </div>
         </div>

      </section>
    </LayOut>
  )
}

export default Payment
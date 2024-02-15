import React, {useContext} from 'react';
import classes from './Payment.module.css';
import LayOut from '../../Componets/LayOut/LayOut';
import { DataContext } from '../../Componets/DataProvider/DataProvider';

function Payment() {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  console.log(user);

  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  return (
    <LayOut>
        {/* header */}
      <div className={classes.payment__header}>
        Checkout  ({totalItem}) items
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
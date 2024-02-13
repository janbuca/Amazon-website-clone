import React from 'react';
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import classes from './Product.module.css'

function ProductCard({product,flex,renderDesc,renderAdd}) {
  const { image, title, id, rating, price,description  } = product;
  return (
    <div className={`${classes.card__container}`}>
      <a href="">
        <img src={image} alt="" />
      </a>
      <div>
        <h3>{title}</h3>
        <div className={classes.rating}>
          {/* rating */}
          <Rating value={rating?.rate} precision={0.1}/>
                  {/*count  */}
                  <small>{rating?.count}</small>
          {/* Price */}
        </div>
        <div>
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>
        <button className={classes.button}>
          add to chat
        </button>
      </div>
    </div>
  )
}

export default ProductCard
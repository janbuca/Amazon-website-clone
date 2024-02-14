import React, { useContext } from 'react';
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import classes from './Product.module.css'
import { Link } from 'react-router-dom';
import { Type } from '../../Utility/action.type';
import { DataContext } from '../DataProvider/DataProvider';

function ProductCard({product,flex,renderDesc,renderAdd}) {
  const { image, title, id, rating, price,description  } = product;
  const [state,dispatch]=useContext(DataContext)

  const addToCart = ()=>{
    dispatch({
        type:Type.ADD_TO_BASKET,
        item:{
            image, title, id, rating, price,description
        }
    })
  }

  return (
    <div className={`${classes.card__container}  ${flex?classes.product__flexed : ''}`}>
      <Link to={`/products/${id}`}>
        <img src={image} alt="" className={classes.img_container} />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{maxWidth:"750px"}}>{description}</div>}
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
        <button className={classes.button} onClick={addToCart}>
          add to chat
        </button>
      </div>
    </div>
  )
}

export default ProductCard
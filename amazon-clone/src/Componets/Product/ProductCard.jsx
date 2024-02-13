import React from 'react';
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';

function ProductCard() {
  return (
    <div>
      <a href="">
        <img src="" alt="" />
      </a>
      <div>
        <h3>title</h3>
        <div>
          {/* rating */}
          <Rating value={5} precision={0.1}/>
          {/*count  */}
          <small>{50}</small>
          {/* Price */}
        </div>
        <div>
          {/* price */}
          <CurrencyFormat />

        </div>
      </div>
    </div>
  )
}

export default ProductCard
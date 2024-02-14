import React, { useEffect, useState } from 'react';
//import classes from './ProductDetail.module.css';
import LayOut from '../../Componets/LayOut/LayOut';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../Api/endPoints';
import ProductCard from '../../Componets/Product/ProductCard';
import Loader from '../../Componets/Loader/Loder';

function ProductDetail() {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false)
  const {productId} = useParams()
  useEffect(() => {
    setIsLoading(true)
    axios.get(`${productUrl}/products/${productId}`)
    .then((res)=>{
      setProduct(res.data);
      setIsLoading(false)
    }).catch((err)=>{
      console.log(err)
      setIsLoading(false)
    })
  }, [])
  return (
    <LayOut>
     {isLoading? (<Loader/>):(
   <ProductCard
    product={product}
    flex ={true}
    renderDesc={true}
    renderAdd={true}


/>)}
    </LayOut>
  )
}

export default ProductDetail
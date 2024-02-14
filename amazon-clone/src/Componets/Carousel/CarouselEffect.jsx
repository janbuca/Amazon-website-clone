import React from 'react';
import classes from './Carousel.module.css';
import {Carousel} from "react-responsive-carousel";
import {img} from './image/data';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselEffect() {
  return (
    <div>
        <Carousel 
            autoPlay={true}
            infiniteLoop={true}
            showIndicators={false}
            showThumbs={false}
        >
            {img.map((imageItemLink) => {
           return <img key={imageItemLink} src={imageItemLink} />;
        })}
        </Carousel>
        <div className={classes.hero__img}></div>
    </div>
  )
}

export default CarouselEffect
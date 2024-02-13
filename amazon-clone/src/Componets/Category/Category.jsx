import React from 'react';
import {categoryInfos} from './catagoryFullInfos';
import classes from './catagory.module.css';
import CategoryCard from './CategoryCard';


function Category() {
  return (
    <section className={classes.category__container}>
    {categoryInfos.map((infos) => (
      <CategoryCard data={infos} />
    ))}
  </section>
    
  );
}

export default Category
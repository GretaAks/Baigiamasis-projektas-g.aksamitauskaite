import React, { useContext } from 'react';
import { Grid } from '@mui/material';
import Card from './service-page-products-card';
import { ProductContext } from '../context/product-context';

const ServicePageProductsGrid = () => {
  const { products } = useContext(ProductContext);

  return (
    <Grid container spacing={2}>
      {products.map((props) => (
        <Grid key={props.id} item xs={4}>
          <Card {...props} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ServicePageProductsGrid;
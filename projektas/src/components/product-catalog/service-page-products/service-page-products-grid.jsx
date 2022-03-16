import React, { useContext } from 'react';
import { Grid } from '@mui/material';
import { useLocation } from 'react-router-dom';
import Card from './service-page-products-card';
import { ProductContext } from '../contexts/product-context';
import routes from '../../../routing/routes';

const ServicePageProductsGrid = () => {
  const { products } = useContext(ProductContext);
  const { pathname } = useLocation();

  let itemsPerRow = 4;
  if (pathname === routes.ProductsPanelPage) {
    itemsPerRow = 6;
  }

  return (
    <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
      {products.map((props) => (
        <Grid key={props.id} item xs={itemsPerRow}>
          <Card {...props} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ServicePageProductsGrid;

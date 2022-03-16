import React from 'react';
import {
  Box,
} from '@mui/material';
import Header from './service-page-products-header';
import Grid from './service-page-products-grid';

const ServicePageProducts = () => (
  <Box sx={{
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
  }}
  >
    <Header />
    <Grid />
  </Box>
);

export default ServicePageProducts;

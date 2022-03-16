import React from 'react';
import {
  Box,
} from '@mui/material';
import Header from './service-page-header';
import Filters from './service-page-filters';
import Prodcuts from './service-page-products';
import ProductProvider from './contexts/product-context';

const ProductCatalog = () => (
  <ProductProvider>
    <Box>
      <Header />
      <Box sx={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 3,
        mt: 3,
      }}
      >
        <Filters />
        <Prodcuts />
      </Box>
    </Box>
  </ProductProvider>
);

export default ProductCatalog;

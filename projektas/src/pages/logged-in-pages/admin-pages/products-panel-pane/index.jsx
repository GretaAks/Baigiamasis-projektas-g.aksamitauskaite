import React from 'react';
import {
  Container,
  Button,
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useNavigate } from 'react-router-dom';
import ProductCatalog from '../../../../components/product-catalog';
import routes from '../../../../routing/routes';

const ProductPanelPage = () => {
  const navigate = useNavigate();
  return (
    <Container maxWidth="xl" sx={{ mr: 'auto', ml: 'initial' }}>
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ mb: 4, fontSize: 12 }}
        onClick={() => navigate(routes.ProductFormPage)}
      >
        Pridėti produktą
        <AddCircleIcon sx={{ fontSize: 24, ml: 2 }} />
      </Button>
      <ProductCatalog />
    </Container>
  );
};

export default ProductPanelPage;

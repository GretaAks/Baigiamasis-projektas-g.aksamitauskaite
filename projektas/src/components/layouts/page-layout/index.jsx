import React from 'react';
import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import PageLayoutNavbar from './page-layout-navbar';
import Footer from './page-layout-footer';

const PageLayout = () => (
  <>
    <PageLayoutNavbar />
    <Container element="main" sx={{ py: 3 }}>
      <Outlet />
    </Container>
    <Footer />
  </>
);

export default PageLayout;

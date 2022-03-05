import React from 'react';
import { Typography, Box } from '@mui/material';

const ErrorPage = () => {
  return (
    <Box sx={{ pt: 20 }}>
    <Typography color="black" sx={{ textAlign: 'center', fontSize: 60 }}>
      404: Page not found
    </Typography>
  </Box>
  );
};

export default ErrorPage;
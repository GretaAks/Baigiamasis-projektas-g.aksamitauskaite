import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

const Copyright = () => (
  <Typography variant="body2" color="text.secondary">
    {'Copyright © '}
    <Link color="inherit" href="https://google.com/">
      Baigiamasis projektas
    </Link>
    {' '}
    {new Date().getFullYear()}
    .
  </Typography>
);

const Footer = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      width: '100%',
    }}
  >
    <CssBaseline />

    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => (theme.palette.mode === 'light'
          ? theme.palette.grey[200]
          : theme.palette.grey[800]),
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1">
          Parduotuvė
        </Typography>
        <Copyright />
      </Container>
    </Box>
  </Box>
);

export default Footer;

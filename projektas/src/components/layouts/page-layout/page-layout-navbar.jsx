import React from 'react';
import {
  AppBar,
  Container,
  Box,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../../store/auth';
import NavbarLink from '../../navbar-link';
import routes from '../../../routing/routes';
import AuthMenu from '../../auth-menu';

const PageLayoutNavbar = () => {
  const { loggedIn } = useSelector(selectAuth);

  return (
    <AppBar
      position="sticky"
      color="error"
      sx={(theme) => ({
        height: theme.mixins.toolbar.minHeight,
      })}
    >
      <Container sx={{
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
      }}
      >
        <Box sx={{ display: 'flex' }}>
          <NavbarLink to={routes.HomePage}>Pradžia</NavbarLink>
          <NavbarLink to={routes.ServicePage}>Paslaugos</NavbarLink>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'stretch' }}>
          {
          loggedIn
            ? <AuthMenu />
            : (
              <Box sx={{ display: 'flex' }}>
                <NavbarLink to={routes.LoginPage}>Prisijungti</NavbarLink>
                <NavbarLink to={routes.RegisterPage}>Registruotis</NavbarLink>
              </Box>
            )
          }
        </Box>
      </Container>
    </AppBar>
  );
};

export default PageLayoutNavbar;

import React from 'react';
import {
  AppBar,
  Container,
  Box, Badge,
  Divider,
} from '@mui/material';
import { useSelector } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { selectAuth } from '../../../store/auth';
import NavbarLink from '../navbar-link';
import routes from '../../../routing/routes';
import AuthMenu from '../../auth-menu';

const PageLayoutNavbar = () => {
  const { loggedIn } = useSelector(selectAuth);

  return (
    <AppBar
      position="sticky"
      sx={(theme) => ({
        height: theme.mixins.toolbar.minHeight,
      })}
    >
      <Container color="error" sx={{
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
      }}
      >
        <Box sx={{ display: 'flex' }}>
          <NavbarLink to={routes.HomePage}>Pradžia</NavbarLink>
          <NavbarLink to={routes.ServicePage}>Paslaugos</NavbarLink>
          <NavbarLink to={routes.ContactPage}>Kontaktai</NavbarLink>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'stretch' }}>
          {
          loggedIn
            ? <AuthMenu />
            : (
              <Box sx={{ display: 'flex' }}>
                <NavbarLink to={routes.LoginPage}>Login</NavbarLink>
                <NavbarLink to={routes.RegisterPage}>Register</NavbarLink>
              </Box>
            )
          }
          <Divider
            orientation="vertical"
            light
            flexItem
            sx={{
              borderColor: 'common.white', my: 2, mr: 2,
            }}
            variant="middle"
          />
          <Badge badgeContent={4} color="secondary" sx={{ alignSelf: 'center' }}>
            <ShoppingCartIcon color="inherit" />
          </Badge>
        </Box>
      </Container>
    </AppBar>
  );
};

export default PageLayoutNavbar;

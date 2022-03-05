import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { CssBaseline, ThemeProvider} from '@mui/material';
import theme from './styles/theme'

const App = () => (
  <ThemeProvider theme={theme} >
  <CssBaseline>
    <>
     pradzia
    </>
  </CssBaseline>
  </ThemeProvider>
);

export default App;
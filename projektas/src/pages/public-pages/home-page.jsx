import React from 'react';
import {
  Box,
  Typography,
} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Image from '../../components/img/brooke.jpg';

const styles = {
  box: {
    backgroundImage: `url(${Image})`,
    display: 'absolute',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: 700,
  },
};

const HomePage = () => (
  <>
    <CssBaseline />
    <Box
      sx={{
        bgcolor: 'background.paper',
        mt: null,
      }}
    />
    <Box style={styles.box}>
      <Box sx={{
        position: 'absolute',
        p: { xs: 3, md: 6 },
        pr: { md: 0 },
      }}
      >
        <Typography component="h1" variant="h3" fontWeight={700} color="white" gutterBottom position="center" sx={{ mt: 20 }}>
          Parduotuvė
        </Typography>
        <Typography variant="h5" color="white" fontWeight={300} paragraph>
          Pasirink sau tinkamą variantą
        </Typography>
      </Box>
    </Box>
  </>
);

export default HomePage;

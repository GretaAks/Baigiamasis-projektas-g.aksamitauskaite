import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Image from '../../components/img/brooke.jpg';


const styles = {
    box: {
        backgroundImage: `url(${Image})`,  
        display: 'absolute',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: 500,
    }
};

const HomePage = () => {
        return(
          <>
          <CssBaseline/>
          <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 1,
            pb: 1,
          }}
        >
        </Box>
            <Box style={styles.box}>
              <Box sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}>
                <Typography component="h1" variant="h3" color="white" gutterBottom position="center">
              Parduotuvė
            </Typography>
            <Typography variant="h5" color="white" paragraph>
              Papildomas tekstas papasakoti apie paslaugas
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="left"
            >
              <Button variant="contained" color="success">Mygtukas vienas</Button>
              <Button variant="outlined" color="success">Mygtukas du</Button>
            </Stack>
            </Box>
            </Box>
            </>
          
        )
    
};

export default HomePage;
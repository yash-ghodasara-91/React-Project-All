import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const Hero = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '80vh',
        backgroundImage: 'url(https://images.unsplash.com/photo-1600891964599-f61ba0e24092)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#fff',
      }}
    >
      {/* ✅ Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)', // black transparent overlay
        }}
      />

      {/* ✅ Content */}
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Welcome to Foodies Hub
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
          Discover delicious dishes and fast delivery
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 3, px: 4, py: 1.5, fontSize: '1.1rem' }}
        >
          Order Now
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;

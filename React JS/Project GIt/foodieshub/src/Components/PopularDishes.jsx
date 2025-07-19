// src/components/PopularDishes.jsx
import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

const dishes = [
  {
    title: 'Spicy Pizza',
    image: 'https://images.unsplash.com/photo-1601924572481-b0b202b78b8d',
  },
  {
    title: 'Veg Burger',
    image: 'https://images.unsplash.com/photo-1613145996368-0d22fceee611',
  },
  {
    title: 'Pasta Delight',
    image: 'https://images.unsplash.com/photo-1603133872872-684f2d86b060',
  },
  {
    title: 'Fresh Salad',
    image: 'https://images.unsplash.com/photo-1569058242310-437f5fa1f27b',
  },
];

const PopularDishes = () => {
  return (
    <Grid container spacing={4} sx={{ p: 4 }}>
      {dishes.map((dish, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card sx={{ transition: '0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
            <CardMedia component="img" height="200" image={dish.image} alt={dish.title} />
            <CardContent>
              <Typography variant="h6" gutterBottom>{dish.title}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default PopularDishes;

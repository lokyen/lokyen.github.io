import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard2() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="../images/Book'dRated.png"
        title="Book'd and Rated Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Book'd & Rated
        </Typography>
        <Typography>
            HTML | CSS | JAVASCRIPT | REACT | JAVA | SPRING BOOT | SQL | MATERIAL UI 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          A web application that allows users to rate books, write reviews, make reading goals, and organize their books.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

  );
}
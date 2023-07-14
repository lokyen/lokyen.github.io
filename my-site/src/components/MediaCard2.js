import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

let url = 'https://github.com/cis3296f22/705-bookreview-app';

export default function MediaCard2() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/image/BookdRated.png"
        title="Books"
      />
        
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Book'd & Rated
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign="justify">
          A web application that allows users to rate books, write reviews, make reading goals, and organize their books.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => { window.location.href = url; }}>Github</Button>
      </CardActions>
    </Card>

  );
}
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

let url = 'https://github.com/lokyen/lokyen.github.io';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={"/static/images/cards/contemplative-reptile.jpg"}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Personal Website
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign="justify">
          My personal website which I created to get a better understanding of React and JavaScript.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => { window.location.href = url; }} >Github</Button>
      </CardActions>
    </Card>

  );
}


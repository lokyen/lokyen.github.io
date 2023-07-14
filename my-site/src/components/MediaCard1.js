import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

let url = 'https://github.com/lokyen/project-tool-shed';

export default function MediaCard1() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/image/ToolShed.png"
        title="Tool Shed application"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Tool Shed
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign="justify">
          A web application that enables users to post their tools for rent to nearby users. Users can search for tools to rent.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => { window.location.href = url; }} >Github</Button>
      </CardActions>
    </Card>

  );
}
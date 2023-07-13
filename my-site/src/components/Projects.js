import React from "react";
import MediaCard from './MediaCard';
import MediaCard1 from './MediaCard1';
import MediaCard2 from './MediaCard2';
import Grid from '@mui/material/Grid';

//TO DO:
// Change the contents of the boxes
// Link to github
// Add image

const Projects = () => {
    return<div className="App">
        <h2>Technical Projects</h2>
            <div>
            <Grid container spacing={4} paddingTop={5} paddingLeft={15} paddingRight={15} paddingBottom={10}>
                <Grid item xs={12} sm={6} md={4}>
                    <MediaCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <MediaCard1 />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <MediaCard2 />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    
                </Grid>
            </Grid>
            </div>  
        </div>
};

export default Projects;
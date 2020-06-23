import React from 'react';
import { withStyles} from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import useStyles from '../Styles/MediaMovieStyle'



 function MediaMovie({movie,trailer,classes}) {
  

  return (
    <Grid container direction="row" className={classes.root}>
      <Grid item>
        <CardMedia
          className={classes.cover}
          component="iframe"
          alt="Contemplative Reptile"
          image={`https://www.youtube.com/embed/${trailer}`}
          title="Contemplative Reptile"
        />
      </Grid>
      <Grid item xs={2} sm={3}>
        <CardMedia
          className={classes.content}
          image={movie.image}
          title="poster"
        />
      </Grid>
    </Grid>
  );
}

export default withStyles(useStyles)(MediaMovie)
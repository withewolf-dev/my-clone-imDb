import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { CardContent, Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import Rating from '@material-ui/lab/Rating';


const useStyles = makeStyles({
    root: {
      minWidth: 275,
      backgroundColor:'#141414'
      
    },
    text:{
        color:'white'
    },
    icons:{
        marginLeft:'left'
    }
})

export default function TitleBar({movie,rating}) {

    const classes = useStyles()
    


    return (
       <Card className={classes.root}>
           <CardContent>
               <Typography variant="h5" component="h2" className={classes.text}>
                   {movie.title}  <Rating value={rating} defaultValue={2.5} precision={0.5} readOnly />
               </Typography>
           </CardContent>
       </Card>
    )
}
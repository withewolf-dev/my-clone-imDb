import React from 'react'
import Grid from '@material-ui/core/Grid';
import NavBar from '../NavBar'

 function HomePage() {
    return (
        <Grid container direction='column'>
        <Grid item>
            <NavBar/>
            <br/>
        </Grid>
            <Grid item container  >
                <Grid item xs={1} sm={2}/>
                <Grid item xs={12} sm={8} >
                    <h1>Poster</h1> 
                    <br/>
                    <h2>top 250 movies</h2>
                    <br/>
                    <h2>most popular movie</h2>
                    <br/>
                    <h2>box office</h2>
                    <br/>
                    <h2>box office of all time</h2>
                </Grid>
                <Grid item xs={1} sm={2}/>
            </Grid>
        </Grid>
    )
}
export default HomePage
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavBar from './NavBar'
import FullCast from './MovieSearch/FullCast'
import MediaMovie from './MovieSearch/MediaMovie'
import Grid from '@material-ui/core/Grid';
import Title from './MovieSearch/Title'
import Plot from './MovieSearch/Plot'


 function SearchMovie({name}) {


// id, title,image
    const [movie,setMovie]=useState('')
// full cast 
    const [cast, setcast] = useState([])
//plot
    const [plot, setPlot]= useState('')
//youtube trailer
    const [yt, setYt] = useState()
//rating
    const [imDb,setImdb] = useState(0)
    
        useEffect(()=>{
            const fetchData=async()=>{

             const result =  await axios.get(`
                https://imdb-api.com/en/API/SearchMovie/k_wU40d8hY/${name} 
                ` || '[]')
                    setMovie(result.data.results[0]);
                    console.log(result.data.results[0]);
                    
                    console.log(result.data.results[0].id); // movie id
                 
                const rating = await axios.get(`
                   https://imdb-api.com/en/API/Ratings/k_wU40d8hY/${result.data.results[0].id}
                `)
                    setImdb(rating.data.imDb)    

                 const cast =  await axios.get(`
                 https://imdb-api.com/en/API/FullCast/k_wU40d8hY/${result.data.results[0].id}
                    `)
                    console.log('cast',cast.data.actors);
                    setcast(cast.data.actors)
                    
                const wiki_plot = await axios.get(`
                https://imdb-api.com/en/API/Wikipedia/k_wU40d8hY/${result.data.results[0].id}
                `)
                console.log('wiki_plot', wiki_plot.data.plotShort.plainText);
                setPlot(wiki_plot.data.plotShort.plainText)
                
                const yt_trailer = await axios.get(`
                https://imdb-api.com/en/API/YouTubeTrailer/k_wU40d8hY/${result.data.results[0].id}
                `) 
                console.log('yt',  yt_trailer.data.videoId);
                setYt(yt_trailer.data.videoId)
                
            }
            fetchData()
          
        },[name])
    

   
    
    return (
        <Grid container direction='column'>
        <Grid item>
            <NavBar/>
            <br/>
        </Grid>
            <Grid item container  >
                <Grid item xs={1} sm={2}/>
                <Grid item xs={12} sm={8} >
                    <Title movie={movie} rating={imDb}/> 
                    <br/>
                    <MediaMovie movie={movie} trailer={yt}/>
                    <br/>
                    <Plot plot={plot}/>
                    <br/>
                    <FullCast cast={cast}/>
                </Grid>
                <Grid item xs={1} sm={2}/>
            </Grid>
        </Grid>
    )
}
export default SearchMovie
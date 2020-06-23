import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import SearchMovie from './SearchMovie';
import PageProvider from './Styles/PageProvider'
import Axios from './Axios';
import HomePage from './Home/HomePage'
import TopMovies from './Home/TopMovies'

function App() {
  return (
    // <Switch>
    //   <Route
    //     exact
    //     path='/search/:name'
    //     render={(props)=> <SearchMovie name={props.match.params.name}/>}
    //   />
    //   <Route
    //     exact path = '/'
    //     render={()=> <HomePage/>}
    //   />
      
    // </Switch>
   <TopMovies/>
    
  );
}

export default App;

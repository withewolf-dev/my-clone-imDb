
import React,{useState} from 'react';
import { withRouter } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './Styles/NavBarStyle'



 function NavBar(props) {
  const {classes} = props

      const [name, setName]=useState('')

    const search=()=>{
        props.history.push(`/search/${name}`)
    }

  return (
    <div className={classes.root}>
      <AppBar   style={{backgroundColor:'#161616'}} position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            IMDB
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              name='name'
               value={name}
                onChange={(e)=>setName(e.target.value)}
                onKeyPress={event => {
                if (event.key === 'Enter') {
                  search()
                }
              }}   
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default withRouter(withStyles(useStyles)(NavBar))
























// import React, { useState } from 'react'
// import { Link, withRouter } from 'react-router-dom'

//  function NavBar(props) {

//     const [name, setName]=useState('')

//     const search=()=>{
//         props.history.push(`/search/${name}`)
//     }
//     return (
//         <div>
//             <input
//                 placeholder='search movie name'
//                 name='name'
//                 value={name}
//                 onChange={(e)=>setName(e.target.value)}
//                 onKeyPress={event => {
//                 if (event.key === 'Enter') {
//                   search()
//                 }
//               }}
//             />
//             <button onClick={()=> props.history.push(`/search/${name}`)}> go</button>
//         </div>
//     )
// }
// export default withRouter(NavBar)
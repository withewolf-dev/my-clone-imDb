import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';



const useStyles = makeStyles({
    root: {
      width:'auto',
      backgroundColor:'#141414'
      
    },
    text:{
        color:'white'
    },
    avatar:{
      width:40,
      height:40
    },
    icons:{
      width:25,
      height:25,
      //colors:'white'
    }
})

export default function Plot({cast}) {
    
  const classes = useStyles()
  const [expand, setexpand] = useState(false)


    return (
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2" className={classes.text}>
            Full Cast
          </Typography>
          <br />
          <Typography variant="body2" component="p" className={classes.text}>
            {expand
              ? cast.map((obj) => (
                  <ul key={obj.id}>
                    <Avatar src={obj.image} className={classes.avatar} />{" "}
                    <h3>
                      {obj.name} as {obj.asCharacter}
                    </h3>
                  </ul>
                ))
              : cast.slice(0, 6).map((obj) => (
                  <ul key={obj.id}>
                    <Avatar src={obj.image} className={classes.avatar} />{" "}
                    <h3>
                      {obj.name} as {obj.asCharacter}
                    </h3>
                  </ul>
                ))}

                <br/>
                <IconButton onClick={()=> setexpand(!expand)}
                 
                >
                {expand ?
                 <ExpandLessIcon color='primary' style={{ fontSize: 40 }}/> 
                 :
                 <ExpandMoreIcon color='primary'style={{ fontSize: 40 }}/> }
                 </IconButton>
          </Typography>
        </CardContent>
      </Card>
    );
}






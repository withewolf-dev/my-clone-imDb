import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ShowMoreText from 'react-show-more-text';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const useStyles = makeStyles({
    root: {
      width:'auto',
      backgroundColor:'#141414'
      
    },
    text:{
        color:'white'
    }
})

export default function Plot({plot}) {
    
  const classes = useStyles()

  const  executeOnClick=(isExpanded)=> {
        console.log(isExpanded);
    }
   
    return (
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2" className={classes.text}>
            Plot
          </Typography>
            <br/>
          <Typography variant="body2" component="p" className={classes.text}>
          <ShowMoreText
                lines={5}
                more= {<ExpandMoreIcon />}
                less={<ExpandLessIcon/>}
                anchorClass=''
                onClick={executeOnClick}
                expanded={false}
                width={800}
            >
                {plot}
            </ShowMoreText>
          </Typography>
        </CardContent>
      </Card>
    );
}



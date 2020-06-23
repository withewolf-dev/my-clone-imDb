// import React from 'react';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import MobileStepper from '@material-ui/core/MobileStepper';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
// import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

// const tutorialSteps = [
//   {
//     label: 'San Francisco – Oakland Bay Bridge, United States',
//     imgPath:
//       'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
//   },
//   {
//     label: 'Bird',
//     imgPath:
//       'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
//   },
//   {
//     label: 'Bali, Indonesia',
//     imgPath:
//       'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
//   },
//   {
//     label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
//     imgPath:
//       'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
//   },
//   {
//     label: 'Goč, Serbia',
//     imgPath:
//       'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
//   },
// ];

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 400,
//     flexGrow: 1,
//   },
//   header: {
//     display: 'flex',
//     alignItems: 'center',
//     height: 50,
//     paddingLeft: theme.spacing(4),
//     backgroundColor: theme.palette.background.default,
//   },
//   img: {
//     height: 255,
//     maxWidth: 400,
//     overflow: 'hidden',
//     display: 'block',
//     width: '100%',
//   },
// }));

// export default function TextMobileStepper() {
//   const classes = useStyles();
//   const theme = useTheme();
//   const [activeStep, setActiveStep] = React.useState(0);
//   const maxSteps = tutorialSteps.length;

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   return (
//     <div className={classes.root}>
//       <Paper square elevation={0} className={classes.header}>
//         <Typography>{tutorialSteps[activeStep].label}</Typography>
//       </Paper>
//       <img
//         className={classes.img}
//         src={tutorialSteps[activeStep].imgPath}
//         alt={tutorialSteps[activeStep].label}
//       />
//        <img
//         className={classes.img}
//         src={tutorialSteps[activeStep].imgPath}
//         alt={tutorialSteps[activeStep].label}
//       />
//       <MobileStepper
//         steps={maxSteps}
//         position="static"
//         variant="text"
//         activeStep={activeStep}
//         nextButton={
//           <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
//             Next
//             {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
//           </Button>
//         }
//         backButton={
//           <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
//             {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
//             Back
//           </Button>
//         }
//       />
      
//     </div>
//   );
// }






// // import React from 'react';
// // import { makeStyles, useTheme } from '@material-ui/core/styles';
// // import Card from '@material-ui/core/Card';
// // import CardContent from '@material-ui/core/CardContent';
// // import CardMedia from '@material-ui/core/CardMedia';
// // import Typography from '@material-ui/core/Typography';
// // import logo from './logo.svg'

// // const useStyles = makeStyles((theme) => ({
// //   root: {
// //      display: 'flex',
// //   },
// //   details: {
// //     //display: 'flex',
// //     flexDirection: 'column',
// //     width:400,
// //     height:250
// //   },
// //   content: {
// //     flex: '1 0 auto',
// //     paddingLeft:'30px'
// //   },
// //   cover: {
// //     width: 251,
// //     height: 200
// //   },
 
// // }));

// // export default function MediaControlCard() {
// //   const classes = useStyles();
// //   //const theme = useTheme();

// //   return (
// //     <Card className={classes.root}>
// //       <div className={classes.details}>
// //         <CardContent className={classes.content}>
// //           <Typography component="h5" variant="h5">
// //             Live From Space
// //           </Typography>
// //           <Typography variant="subtitle1" color="textSecondary">
// //             Mac Miller
// //           </Typography>
// //         </CardContent>
// //       </div>
// //       <CardMedia
// //         className={classes.cover}
// //         image={logo}
// //         title="Live from space album cover"
// //       />
// //     </Card>
// //   );
// // }







// // import React,{useEffect,useState} from 'react'
// // import axios from 'axios'

// // export default function Axios() {

// //     const [cast, setcast] = useState([])

// //    useEffect(()=>{
// //         const fetchData=()=>{
            
// //             axios.get(`
// //             https://imdb-api.com/en/API/Ratings/k_wU40d8hY/tt1375666
// //             `)
// //             .then(res=>{
// //                 console.log(res.data.imDb);
// //                 setcast(res.data.imDb)
// //             })
// //         }
// //         fetchData()
// //    },[])

   
// //     return (
// //         <div>
// //             <h2>
// //                 <ul>{cast}</ul>
// //             </h2>
// //         </div>
// //     )
// // }

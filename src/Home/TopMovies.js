// import React, { useEffect,useState } from "react";
// import Slider from "react-slick";
// import axios from 'axios'


// const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3
//   }

  
// export default function TopMovies() {
 
//     const [movie, setmovie] = useState([])

//     useEffect(()=>{
        
//         const fetchData=()=>{

//             const res = axios.get(`
//             https://imdb-api.com/en/API/Top250Movies/k_wU40d8hY
//             `)
//             console.log(res.items);
//             setmovie()
            
//         }
//         fetchData()
//     },[])

    
//     return (
//       <div>
//         <h2> Multiple items </h2>
//         <Slider {...settings}>
//           <div>
//             <h3>{movie.map((obj)=>obj.title)}</h3>
//           </div>
//         </Slider>
//       </div>
//     );
  
// }
import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react"
import HomeLayout from './Layouts/LayoutForHome';

function App() {
  const getMovieDataAccordinglyBasedOnCategory = (category)=>{
    return new Promise((resolve,reject)=>{
        const url =   `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`;
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyY2I4MDNlNmIwOGU3MmMyYWFlNDEyNDkwYWZkY2FkMSIsInN1YiI6IjVmMjdjYTliNDM1YWJkMDAzNTc5YWE0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.88-D6s9gVaK14b3OI1F7k_OqfRgPBn8kO_JYTLJV_n4'
          }
        };
        
        fetch(url, options)
          .then(res => res.json())
          .then(json => resolve(json))
          .catch(err => reject(err))
    })
   
};
  let movieCategories = ['now_playing', 'popular', 'top_rated', 'upcoming'];
  const [data,setData] = useState({});


  useEffect(()=>{
    let movieCollectionByCategory = {};
    movieCategories.map(function(category, index){
       getMovieDataAccordinglyBasedOnCategory(category).then(e=> {
        movieCollectionByCategory[category] = e;
        if(movieCategories.length-1 == index){
          setData(movieCollectionByCategory);
        }
       })
    });
  },[]);


  
  return (
   <div>
     <HomeLayout netflixData = {data}/>
   </div>
  );
}

export default App;

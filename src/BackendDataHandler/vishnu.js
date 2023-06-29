

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

export default getMovieDataAccordinglyBasedOnCategory;
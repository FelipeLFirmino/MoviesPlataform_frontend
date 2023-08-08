import { useState } from 'react';
import './App.css';
import api from './api/axiosConfig';
import { useEffect } from 'react';
import Layout from './components/layout.js';
import { Route, Routes } from 'react-router-dom';
import Home from './components/homepage/Home';
import Header from './components/header/header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/review/Review';



function App() {

  const[movies,setMovies] = useState();
  const[movie,setMovie] = useState();
  const[reviews,setReviews] = useState();


//gets all the movies from the database and its used on the home component
  const getAllMovies = async() =>{
    try {

      const response = await api.get("api/v1/movies")
    
      setMovies(response.data)    

    } catch (error) {
      console.log(error);
    }
  
  }

//gets a single movie from the database based on its id, its used on the reviews component
  const getMovieData = async (movieId) =>{
    try {
      const response = await api.get(`/api/v1/movies/${movieId}`)
      const singleMovie = response.data;
      
      setMovie(singleMovie);
      setReviews(singleMovie.reviewIds);


    } catch (error) {
      console.log(error);
    }
  }

 useEffect(() =>{
  getAllMovies();
 },[])

  return (
    <div className="App">
      <Header></Header>
     <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Home movies={movies}/>} ></Route>
        <Route path='/Trailer/:ytTrailerId' element ={<Trailer></Trailer> } >  </Route>
        <Route path="/Reviews/:movieId" element ={<Reviews getMovieData = {getMovieData} movie={movie} reviews ={reviews} setReviews = {setReviews} />}></Route>
      </Route>
     </Routes>
    </div>
  );
}

export default App;

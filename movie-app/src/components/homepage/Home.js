import React from "react";
import MovieCarousel from "../movieCarousel/Carousel";

const Home = ({movies}) =>{
    return(
        
        <MovieCarousel movies={movies}/>
    )
}

export default Home
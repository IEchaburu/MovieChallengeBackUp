import Cards from "../../Components/Cards/Movies/movieCards";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieGenres, getTopRatedMovies } from "../../Redux/Actions/Movies/movieActions";



const TopRatedMovies =() => {
    const dispatch = useDispatch();
    const topRatedMovies = useSelector((state) => state.topRatedMovies);
    
    useEffect(() => {
        dispatch(getMovieGenres());
        dispatch(getTopRatedMovies());
    }, [dispatch]);
    
        
    return (
      <div>
        {/* <h2>UMOVIE</h2> */}
        <div>
            <Cards movies={topRatedMovies} /> 
        </div>   
      </div>
    );
  }
  
  export default TopRatedMovies;
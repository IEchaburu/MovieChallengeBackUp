import Cards from "../../Components/Cards/Movies/movieCards";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieGenres, getPopularMovies } from "../../Redux/Actions/Movies/movieActions";
import Pagination from "../Pagination/pagination";



const Home =() => {
    const dispatch = useDispatch();
    const popularMovies = useSelector((state) => state.popularMovies);

    const [currentPage, setCurrentPage] = useState(1);
    const moviesPerPage = 20;
    
    useEffect(() => {
        dispatch(getMovieGenres());
        dispatch(getPopularMovies());
    }, [dispatch]);


    const indexOfLastMv = currentPage * moviesPerPage;
    const indexOfFirstMv = indexOfLastMv - moviesPerPage;
    const currentMv = popularMovies.slice(indexOfFirstMv, indexOfLastMv);

    const totalPages = Math.ceil(popularMovies.length / moviesPerPage);

    const onPageChange = (pageNumber) => {
      if (pageNumber >= 1 && pageNumber <= totalPages) {
          setCurrentPage(pageNumber);
      }
    };
  
    const handlePrev = () => {
        onPageChange(currentPage - 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    const handleNext = () => {
        onPageChange(currentPage + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
        
    return (
      <div>
        {/* <h2>UMOVIE</h2> */}
        <div>
            <Cards movies={currentMv}/> 
        </div> 
        <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPageChange}
                handlePrev={handlePrev}
                handleNext={handleNext}
                
                />  
      </div>
    );
  }
  
  export default Home;
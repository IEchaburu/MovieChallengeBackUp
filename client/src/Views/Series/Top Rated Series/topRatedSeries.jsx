import Cards from "../../../Components/Cards/Series/seriesCards";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSeriesGenres, getTopRatedSeries } from '../../../Redux/Actions/Series/seriesActions';
import Pagination from "../../Pagination/pagination";



const TopRatedSeries =() => {
    const dispatch = useDispatch();
    const topRatedSeries = useSelector((state) => state.topRatedSeries);

    const [currentPage, setCurrentPage] = useState(1);
    const seriesPerPage = 20;
    
    useEffect(() => {
        dispatch(getSeriesGenres());
        dispatch(getTopRatedSeries());
    }, [dispatch]);

    const indexOfLastSr = currentPage * seriesPerPage;
    const indexOfFirstSr = indexOfLastSr - seriesPerPage;
    const currentSr = topRatedSeries.slice(indexOfFirstSr, indexOfLastSr);

    const totalPages = Math.ceil(topRatedSeries.length / seriesPerPage);

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
            <Cards series={currentSr} /> 
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
  
  export default TopRatedSeries;
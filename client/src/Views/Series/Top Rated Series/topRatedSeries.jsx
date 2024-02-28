import Cards from "../../../Components/Cards/Series/seriesCards";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTopRatedSeries } from '../../../Redux/Actions/Series/seriesActions';



const TopRatedSeries =() => {
    const dispatch = useDispatch();
    const topRatedSeries = useSelector((state) => state.topRatedSeries);
    
    useEffect(() => {
        //dispatch(getGenres());
        dispatch(getTopRatedSeries());
    }, [dispatch]);
    
        
    return (
      <div>
        <h2>UMOVIE</h2>
        <div>
            <Cards series={topRatedSeries} /> 
        </div>   
      </div>
    );
  }
  
  export default TopRatedSeries;
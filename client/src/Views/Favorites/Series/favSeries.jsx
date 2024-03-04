import Cards from "../../../Components/Cards/Series/seriesCards";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavSeries } from "../../../Redux/Actions/Favorites/Series/favSActions";
import FavDropDown from "../../../Components/Fav Manager/favDropDown";



const FavoriteSeries =() => {
    const dispatch = useDispatch();
    const userLogged = useSelector((state) => state.userLogged);
    const favoriteSeries = useSelector((state) => state.favoriteSeries);
    const [dataLoaded, setDataLoaded] = useState(false);

    let id = userLogged.id;
    
    useEffect(() => {
      if (favoriteSeries.length == 0) {          
          setDataLoaded(true); 
      } else {
          setDataLoaded(false);
      }; 
      dispatch(getFavSeries(id));
    }, [favoriteSeries, dispatch]);
    
        
    return (
      <div>
        <FavDropDown/>
        { dataLoaded ? (
          <h2 style={{marginTop:"20px"}}>There are no faved Series</h2>
        ) : (
          <div>
              <Cards series={favoriteSeries} /> 
          </div>
        )}
      </div>
    );
  }
  
  export default FavoriteSeries;
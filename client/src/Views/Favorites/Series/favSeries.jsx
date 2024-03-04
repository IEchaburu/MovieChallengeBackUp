import Cards from "../../../Components/Cards/Series/seriesCards";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavSeries } from "../../../Redux/Actions/Favorites/Series/favSActions";
import FavDropDown from "../../../Components/Fav Manager/favDropDown";



const FavoriteSeries =() => {
    const dispatch = useDispatch();
    const userLogged = useSelector((state) => state.userLogged);
    const favoriteSeries = useSelector((state) => state.favoriteSeries);
    console.log(favoriteSeries, "la data del user");

    let id = userLogged.id;
    
    useEffect(() => {
        dispatch(getFavSeries(id));
    }, [dispatch]);
    
        
    return (
      <div>
        <FavDropDown/>
        {/* <h2>UMOVIE</h2> */}
        <div>
            <Cards series={favoriteSeries} /> 
        </div>   
      </div>
    );
  }
  
  export default FavoriteSeries;
import Cards from "../../../Components/Cards/Movies/movieCards";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavMovies } from "../../../Redux/Actions/Favorites/Movies/favMactions";
import FavDropDown from "../../../Components/Fav Manager/favDropDown";



const FavoriteMovies =() => {
    const dispatch = useDispatch();
    const userLogged = useSelector((state) => state.userLogged);
    const favoriteMovies = useSelector((state) => state.favoriteMovies);
    console.log(userLogged, "la data del user");

    let id = userLogged;
    
    useEffect(() => {
        dispatch(getFavMovies(id));
    }, [dispatch]);
    
        
    return (
      <div>
        <FavDropDown/>
        {/* <h2>UMOVIE</h2> */}
        <div>
            <Cards movies={favoriteMovies} /> 
        </div>   
      </div>
    );
  }
  
  export default FavoriteMovies;
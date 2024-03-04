import Cards from "../../../Components/Cards/Movies/movieCards";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavMovies } from "../../../Redux/Actions/Favorites/Movies/favMactions";
import FavDropDown from "../../../Components/Fav Manager/favDropDown";



const FavoriteMovies =() => {
    const dispatch = useDispatch();
    const userLogged = useSelector((state) => state.userLogged);
    const favoriteMovies = useSelector((state) => state.favoriteMovies);
    const [dataLoaded, setDataLoaded] = useState(false);

    let id = userLogged.id;

    
    useEffect(() => {
      if (favoriteMovies.length == 0) {          
          setDataLoaded(true); 
      } else {
          setDataLoaded(false);
      };
      dispatch(getFavMovies(id));

    }, [favoriteMovies, dispatch]);
    
        
    return (
      <div>
        <FavDropDown/>
        { dataLoaded ? (
          <h2 style={{marginTop:"20px"}}>There are no faved Movies</h2>
        ) : (
          <div>
              <Cards movies={favoriteMovies} /> 
          </div>
        )
        }
        
      </div>
    );
  }
  
  export default FavoriteMovies;
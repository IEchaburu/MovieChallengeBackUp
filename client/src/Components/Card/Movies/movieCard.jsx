import { useDispatch, useSelector } from 'react-redux';
import { postFavMovie, deleteFavMovie } from '../../../Redux/Actions/Favorites/Movies/favMactions';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './MovieCard.css';
import { useEffect, useState } from 'react';
import image from "../../../Utils/images/star.png";
import greystar from "../../../Utils/images/greystar.png"


const Card = (props) => {
    const dispatch = useDispatch();
    const movieGenres = useSelector((state) => state.movieGenres);
    const favoriteMovies = useSelector((state) => state.favoriteMovies);
    const userLogged = useSelector((state) => state.userLogged);

    const [isFav, setIsFav] = useState(false);

    let genres = [];

    //console.log(favoriteMovies, "las favorite");

    const body = {
        userid: userLogged.id,
        movieid: props.id
    }

    const handleFavorite = () => {
        if (isFav) {
           setIsFav(false);
           console.log(body, "removid");
           dispatch(deleteFavMovie(body));
        } else {
           setIsFav(true);
           console.log(body, "agregado");
           dispatch(postFavMovie(body));
        }
     }
  
     useEffect(() => {
        favoriteMovies.forEach((fav) => {
           if (fav.id === props.id) {
              setIsFav(true);
           }
        });
     }, [favoriteMovies]);

    // ESTA FUNCION COMPARA LOS ID DE LOS GENEROS DE LA PELICULA CONTRA
    // TODOS LOS GENEROS PARA ASI PODER ALAMACENAR LOS NOMBRES DEL GENERO RESPECTIVO
    props.genres?.forEach(element => {
        movieGenres.forEach(mGenre => {
            if (element === mGenre.id) {
                genres.push(mGenre.name);
            }
        })
    })
    

    return (
        
        <div className="card">
            <img src={"https://image.tmdb.org/t/p/w500/"+ props?.image} className="card-img-top" alt={props.name}/>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">Rating: {props?.rating}</p>
                    <p className="card-text">Release: {props?.release}</p>
                    <p className="card-text">{genres?.join(', ')}</p>
                    <a href={`/movie_detail/${props.id}`} className="btn btn-primary">Learn More</a>
                    {
                        isFav 
                        ? (
                        <button onClick={handleFavorite} style={{ marginLeft:"5px", backgroundColor:"transparent", borderColor:"transparent"}}><img src={image} alt="image" style={{ width: "30px", height: "auto"}}/></button>
                        ) : (
                        <button onClick={handleFavorite} style={{ marginLeft:"5px", backgroundColor:"transparent", borderColor:"transparent"}}><img src={greystar} alt="greystar" style={{ width: "30px", height: "auto"}}/></button>
                        )
                    }
            </div>
        </div>
    )
}

export default Card;
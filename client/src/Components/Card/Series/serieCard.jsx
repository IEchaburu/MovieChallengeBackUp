import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './SerieCard.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { deleteFavSerie, postFavSerie } from '../../../Redux/Actions/Favorites/Series/favSActions';
import image from "../../../Utils/images/star.png";
import greystar from "../../../Utils/images/greystar.png"



const Card = (props) => {
    const dispatch = useDispatch();
    const seriesGenres = useSelector((state) => state.seriesGenres);    
    const favoriteSeries = useSelector((state) => state.favoriteSeries);
    const userLogged = useSelector((state) => state.userLogged);

    const [isFav, setIsFav] = useState(false);

    let genres = [];

    const body = {
        userid: userLogged.id,
        serieid: props.id
    }

    const handleFavorite = () => {
        if (isFav) {
           setIsFav(false);
           dispatch(deleteFavSerie(body));
        } else {
           setIsFav(true);
           dispatch(postFavSerie(body));
        }
     }
  
     useEffect(() => {
        favoriteSeries.forEach((fav) => {
           if (fav.id === props.id) {
              setIsFav(true);
           }
        });
     }, [favoriteSeries]);


    // ESTA FUNCION COMPARA LOS ID DE LOS GENEROS DE LAS SERIES CONTRA
    // TODOS LOS GENEROS PARA ASI PODER ALAMACENAR LOS NOMBRES DEL GENERO RESPECTIVO
    props.genres?.forEach(element => {
        seriesGenres.forEach(sGenre => {
            if (element === sGenre.id) {
                genres.push(sGenre.name);
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
                    <a href={`/serie_detail/${props.id}`} className="btn btn-primary">Learn More</a>
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
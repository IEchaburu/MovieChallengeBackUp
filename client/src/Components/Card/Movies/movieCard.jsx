import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './MovieCard.css';


const Card = (props) => {
    const movieGenres = useSelector((state) => state.movieGenres);
    let genres = [];

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
                    <p className="card-text">{props?.rating}</p>
                    <p className="card-text">{genres?.join(', ')}</p>
                    <a href={`/movie_detail/${props.id}`} className="btn btn-primary">Learn More</a>
            </div>
        </div>
    )
}

export default Card;
import { useEffect } from "react";
import { getMovieId } from "../../../Redux/Actions/Movies/movieActions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import './MovieDetails.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';




const MovieDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const movie = useSelector((state) => state.movieByID);

    useEffect(() => {
        dispatch(getMovieId(id));
    },[dispatch, id]);

    if (!movie) {
        return <div>Loading...</div>; 
    };

    const regex = /<\/?[a-z][\s\S]*?>/ig;
    const description = movie.description?.replace(regex,"");

    let mGenres = [];
    movie.genres?.forEach((genre) => {
        mGenres.push(genre.name)
    });


    let mCast = [];
    if (!movie.cast) {
        mCast = "There is no information about the cast"
    }  else {
        movie.cast?.forEach((element) => {
            mCast.push(element.name + ', ');
        })
    }


    return (
        <div>
        <div className="card-mb-3" /*style="max-width: 540px;"*/>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={"https://image.tmdb.org/t/p/w500/"+ movie?.image} className="img-fluid rounded-start" alt={movie.name}/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{movie.name}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>
        {/* <div>
          <div>
            <img src={"https://image.tmdb.org/t/p/w500/"+ movie?.image} alt={movie.name}/>
          </div>

          <h5>Genres: {mGenres?.join(" , ")}</h5>
          
          <h5>Cast: {mCast}</h5>
         
          <h5>Rating : {movie?.rating}</h5>
  
          <h5>Release : {movie?.release}</h5>
  
        </div>
        <div>
          <section>
            <h3>{movie.name}</h3>
          </section>
          <p>{description}</p>
        </div> */}
      </div>
        
    )
};

export default MovieDetail;
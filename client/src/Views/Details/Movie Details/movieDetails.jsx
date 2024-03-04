import { useEffect } from "react";
import { getCast, getCrew, getMovieId } from "../../../Redux/Actions/Movies/movieActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import './MovieDetails.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';




const MovieDetail = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    const dispatch = useDispatch();
    const movie = useSelector((state) => state.movieByID);

    useEffect(() => {
        dispatch(getMovieId(id));
        //dispatch(getCast(mCast));
        //dispatch(getCrew(mCrew));
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
          let mvCast = {
            id: element.id,
            name: element.name,
            image: element.image,
            character: element.character
          }
            mCast.push(mvCast);
        })
    }

    let mCrew = [];
    if (!movie.crew) {
        mCrew = "There is no information about the crew"
    }  else {
        movie.crew?.forEach((element) => {
          let mvCrew = {
            id: element.id,
            name: element.name,
            image: element.image,
            job: element.job
          }
            mCrew.push(mvCrew);
        })
    }

    const handleCast = () => {
      dispatch(getCast(mCast));
      navigate("/movie_cast")
    };

    const handleCrew = () => {
      dispatch(getCrew(mCrew));
      navigate("/movie_crew")
    }


    return (
        <div>
          <div className="container" /*style={{width:"540px;"}}*/>
            <div className="row">
              <div className="col-md-4">
                <img src={"https://image.tmdb.org/t/p/w500/"+ movie?.image} className="img-fluid" alt={movie.name}/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h1 className="card-title-2">{movie.name}</h1>
                  <hr></hr>
                  <p className="card-text">{description}</p>
                  <hr></hr>
                  <p className="card-text-2">Genres: {mGenres.join(", ")}</p>
                  <p className="card-text-2">Rating: {movie?.rating}</p>
                  <p className="card-text"><small className="text-body-secondary">Release: {movie?.release}</small></p>
                  <button className="button" onClick={handleCast}>View Cast</button>
                  <button className="button"onClick={handleCrew}>View Crew</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
    )
};

export default MovieDetail;
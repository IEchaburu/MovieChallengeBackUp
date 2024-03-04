import { useEffect } from "react";
import { getCast, getCrew, getSerieId } from "../../../Redux/Actions/Series/seriesActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";



const SerieDetail = () => {
  const navigate = useNavigate()
    const { id } = useParams();
    const dispatch = useDispatch();
    const serie = useSelector((state) => state.serieByID);

    useEffect(() => {
        dispatch(getSerieId(id));
    },[dispatch, id]);

    if (!serie) {
        return <div>Loading...</div>; 
    };

    const regex = /<\/?[a-z][\s\S]*?>/ig;
    const description = serie.description?.replace(regex,"");

    let sGenres = [];
    serie.genres?.forEach((genre) => {
        sGenres.push(genre.name)
    });

    let sCast = [];
    if (!serie.cast) {
        sCast = "There is no information about the cast"
    }  else {
        serie.cast?.forEach((element) => {
          let srCast = {
            id: element.id,
            name: element.name,
            image: element.image,
            character: element.character
          }
            sCast.push(srCast);
        })
    }

    let sCrew = [];
    if (!serie.crew) {
        sCrew = "There is no information about the crew"
    }  else {
        serie.crew?.forEach((element) => {
          
          let srCrew = {
            id: element.id,
            name: element.name,
            image: element.image,
            job: element.job
          }
          sCrew.push(srCrew);
        })
      }
    console.log(sCrew, "element");
      
    const handleCast = () => {
      dispatch(getCast(sCast));
      navigate("/serie_cast")
    };

    const handleCrew = () => {
      console.log(sCrew, "la serie");

      dispatch(getCrew(sCrew));
      navigate("/serie_crew")
    }


    return (
      <div>
        <div className="container" /*style={{width:"540px;"}}*/>
          <div className="row">
            <div className="col-md-4">
              <img src={"https://image.tmdb.org/t/p/w500/"+ serie?.image} className="img-fluid" alt={serie.name}/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h1 className="card-title-2">{serie.name}</h1>
                <hr></hr>
                <p className="card-text">{description}</p>
                <hr></hr>
                <p className="card-text-2">Genres: {sGenres.join(", ")}</p>
                <p className="card-text-2">Rating: {serie?.rating}</p>
                <p className="card-text"><small className="text-body-secondary">Release: {serie?.release}</small></p>
                <button className="button" onClick={handleCast}>View Cast</button>
                <button className="button"onClick={handleCrew}>View Crew</button>
              </div>
            </div>
          </div>
        </div>
      </div>
        
    )
};

export default SerieDetail;
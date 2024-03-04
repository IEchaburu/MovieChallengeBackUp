import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useEffect, useState } from 'react';
import Card from "../../../Components/Carousel/Cast/castCard";
import { useDispatch, useSelector } from 'react-redux';
import { getCast } from '../../../Redux/Actions/Movies/movieActions';


const MovieCast = () =>{
    const dispatch = useDispatch()
    const cast = useSelector((state) => state.movieCast)
    const [dataLoaded, setDataLoaded] = useState(false);
    console.log(cast, "el cast");

    useEffect(() => {
        if (cast.length !== 0) {          
            setDataLoaded(true); 
        } else {
            setDataLoaded(false);
        }
      }, [cast]);
    return(
        <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center m-5 grid gap-4">
            {dataLoaded ? (
                cast?.map((profile) => (
                        <Card
                            key={profile?.id}
                            name={profile?.name}
                            character={profile?.character}
                            image={profile?.image}
                        />
                ))
            ) : (
                <h3>There is no cast Information!</h3>
            )}
        </div>
    )
};

export default MovieCast;


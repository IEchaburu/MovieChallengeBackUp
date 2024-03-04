import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useEffect, useState } from 'react';
import Card from "../../../Components/Carousel/Crew/crewCard";
import { useDispatch, useSelector } from 'react-redux';

const MovieCrew = () =>{
    const dispatch = useDispatch()
    const crew = useSelector((state) => state.movieCrew)
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        if (crew.length !== 0) {          
            setDataLoaded(true); 
        } else {
            setDataLoaded(false);
        }
      }, [crew]);
    return(
        <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center m-5 grid gap-4">
            {dataLoaded ? (
                crew?.map((profile) => (
                        <Card
                            key={profile?.id}
                            name={profile?.name}
                            job={profile?.job}
                            image={profile?.image}
                        />
                ))
            ) : (
                <h3>There is no cast Information!</h3>
            )}
        </div>
    )
};

export default MovieCrew;


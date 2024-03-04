import Card from "../../Card/Movies/movieCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useEffect, useState } from "react";

const Cards = ({ movies }) => {
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        if (movies.length !== 0) {          
            setDataLoaded(true); 
        } else {
            setDataLoaded(false);
        }
      }, [movies]);

      
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center m-5 grid gap-4">            
            { dataLoaded ? (
                movies?.map((movie) => {
                    return (
                        <Card
                            key={movie?.id}
                            id={movie?.id}
                            name={movie?.name}
                            image={movie?.image}
                            release={movie?.release}
                            rating={movie?.rating}
                            genres={movie?.genreIds}
                        />
                    )
                })
                ) :
                //<h1>Loading...</h1>
                <img src="https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=6c09b952mcpl9zgi32412hq2gonc9cdy3ps3fcv98qbxcbyo&ep=v1_gifs_search&rid=200w.gif&ct=g" alt="gif"/>
                
            }
        </div>
    )
};

export default Cards;
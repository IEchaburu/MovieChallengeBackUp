import Card from "../../Card/Series/serieCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//import './SerieCards.css'
import { useEffect, useState } from "react";

const Cards = ({ series }) => {
    const [dataLoaded, setDataLoaded] = useState(false);

    
    useEffect(() => {
        if (series.length !== 0) {          
            setDataLoaded(true); 
        } else {
            setDataLoaded(false);
        }
      }, [series]);
      
    
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center m-5 grid gap-4">            
            { dataLoaded ? (
                series?.map((serie) => {
                    return (
                        <Card
                            key={serie?.id}
                            id={serie?.id}
                            name={serie?.name}
                            image={serie?.image}
                            release={serie?.release}
                            rating={serie?.rating}
                            genres={serie?.genreIds}
                        />
                    )
                })
                ) :
                <h1>Loading...</h1>
                
            }
        </div>
    )
};

export default Cards;
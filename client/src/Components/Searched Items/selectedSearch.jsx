import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const SearchSelector = () => {
    const navigate = useNavigate();

    const handleSelection = (event) => {
        event.preventDefault();
        if (event.target.value == 'series' && window.location.href == "http://localhost:3000/movies_search") {
            navigate('/series_search');
        } else if (event.target.value == 'movies' && window.location.href == "http://localhost:3000/series_search") {
            navigate('/movies_search');
        } else {
            return;
        }
        
    }

    return (
        <div>
            <h3>Showing results for: </h3>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" id="inlineCheckbox1" onChange={(event) => handleSelection(event)} value="movies"/>
                <label className="form-check-label" for="inlineCheckbox1">Movies</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" id="inlineCheckbox2" onChange={(event) => handleSelection(event)} value="series"/>
                <label className="form-check-label" for="inlineCheckbox2">Series</label>
            </div>
            {/* <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" href='/movies_search' id="flexRadioDefault1" checked/>
                <label className="form-check-label" for="flexRadioDefault1">
                    <Link to='/movies_search'>Movies</Link>
                </label>
                </div>
                <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" href='/series_search' id="flexRadioDefault2"/>
                <label className="form-check-label" for="flexRadioDefault2">
                    <Link to='/series_search'>Series</Link>
                </label>
            </div> */}
        </div>
    )
};

export default SearchSelector;
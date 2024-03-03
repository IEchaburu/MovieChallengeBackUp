import { useState } from "react";
import { useDispatch } from "react-redux";
import { getMoviesByName } from '../../Redux/Actions/Movies/movieActions';
import { getSeriesByName } from "../../Redux/Actions/Series/seriesActions";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./SearchBar.css"

const SearchBar = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState();
    const navigate = useNavigate();
    console.log(window.location.href, 'la location');


    const handleChange = (event) => {
        event.preventDefault();
        setName(event.target.value);
    }

    const handleSearch = (event) => {
        event.preventDefault(); 
        console.log(name);       
        dispatch(getMoviesByName(name));
        dispatch(getSeriesByName(name));   
        setName("");
        if (window.location.href == "http://localhost:3000/series_search") {
            return;
        } else if (window.location.href == "http://localhost:3000/movies_search") {
            return;
        } else {
            navigate('/movies_search');
        };
        
    };

    return (
        <div>
            <form className="d-flex" role="search">
                <input className="form-control me-2" placeholder="Search" aria-label="Search" onChange={(event) => {handleChange(event)}} type="search" value={name}/>
                <button className="btn btn-outline-light" type="submit" onClick={(event) => {handleSearch(event)}}>Search{""}</button>
            </form>
        </div>
    )
};

export default SearchBar;
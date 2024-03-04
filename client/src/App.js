import './App.css';
import { Route, Routes} from 'react-router-dom';
import PopularSeries from './Views/Series/Popular Series/popularSeries';
import Home from './Views/Home/home';
import TopRatedSeries from './Views/Series/Top Rated Series/topRatedSeries';
import TopRatedMovies from './Views/Movies/topRatedMovies';
import MovieDetail from './Views/Details/Movie Details/movieDetails';
import SerieDetail from './Views/Details/Serie Details/serieDetails';
import Nav from './Components/Nav Bar/navBar';
import Login from './Views/Login/login';
import SearchedMovies from './Views/Search/Movies/movieSearch';
import SearchedSeries from './Views/Search/Series/serieSearch';
import Register from './Views/Register/register';
import FavoriteMovies from './Views/Favorites/Movies/favMovies';
import FavoriteSeries from './Views/Favorites/Series/favSeries';
import MovieCast from './Views/Details/Movie Details/movieCast';
import SerieCast from './Views/Details/Serie Details/serieCast';
import MovieCrew from './Views/Details/Movie Details/movieCrew';
import SerieCrew from './Views/Details/Serie Details/serieCrew';



function App() {

  return (
    <div className="App">

        <Nav/>

      <Routes>

        <Route path="/home" element={<Home/>}/>

        <Route path="/popular_series" element={<PopularSeries/>}/>

        <Route path="/top_rated_series" element={<TopRatedSeries/>}/>

        <Route path="/top_rated_movies" element={<TopRatedMovies/>}/>

        <Route path="/movie_detail/:id" element={<MovieDetail/>}/>

        <Route path="/serie_detail/:id" element={<SerieDetail/>}/>

        <Route path="/movies_search" element={<SearchedMovies/>}/>

        <Route path="/series_search" element={<SearchedSeries/>}/>

        <Route path="/login" element={<Login/>}/>

        <Route path="/register" element={<Register/>}/>

        <Route path="/profile" element={<FavoriteMovies/>}/>

        <Route path="/favorite_series" element={<FavoriteSeries/>}/>

        <Route path="/movie_cast" element={<MovieCast/>}/>

        <Route path="/serie_cast" element={<SerieCast/>}/>

        <Route path="/movie_crew" element={<MovieCrew/>}/>

        <Route path="/serie_crew" element={<SerieCrew/>}/>

      </Routes>

    </div>
  );
}

export default App;
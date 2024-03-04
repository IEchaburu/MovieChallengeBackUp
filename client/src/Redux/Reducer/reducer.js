import { DELETE_FAVORITE_MOVIE, GET_FAVORITE_MOVIES, POST_FAVORITE_MOVIE, REMOVE_FAVORITE_MOVIE } from "../Actions/Favorites/Movies/favMActionTypes";
import { DELETE_FAVORITE_SERIE, GET_FAVORITE_SERIES, POST_FAVORITE_SERIE } from "../Actions/Favorites/Series/favSActionTypes";
import { GET_MOVIES_GENRES, GET_MOVIES_NAME, GET_MOVIE_ID, GET_POPULAR_MOVIES, GET_TOP_RATED_MOVIES } from "../Actions/Movies/movieActionTypes";
import { GET_POPULAR_SERIES, GET_SERIES_GENRES, GET_SERIES_ID, GET_SERIES_NAME, GET_TOP_RATED_SERIES } from "../Actions/Series/seriesActionTypes";
import { CREATE_USER, GET_USER, SET_USER, USER_LOGUOT } from "../Actions/User/actionTypes";

const initialState = {
    //ESTADOS RELACIONADOS A LAS MOVIES
    popularMovies: [],
    topRatedMovies: [],
    moviesByName: [],
    movieByID: [],
    movieGenres: [],

    //ESTADOS RELACIONADOS A LAS SERIES
    popularSeries: [],
    topRatedSeries: [],
    seriesByName: [],
    serieByID: [],
    seriesGenres: [],

    //ESTADOS RELACIONADOS AL USUARIO
    userLogged: [],

    //ESTADOS RELACIONADOS A FAVORITOS
    favoriteMovies: [],
    favoriteSeries: []

};


const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        //CASOS RELACIONADOS A LAS MOVIES
        case GET_POPULAR_MOVIES:
            return {
                ...state,
                popularMovies: action.payload
            };
        case GET_TOP_RATED_MOVIES:
            return {
                ...state,
                topRatedMovies: action.payload
            };
        case GET_MOVIES_NAME:
            if (action.payload.length === 0) {
                window.alert("The movie wasn't found")
            }
            return {
                ...state,
                moviesByName: action.payload,
            };
        case GET_MOVIE_ID:
            return {
                ...state,
                movieByID: action.payload
            };
        case GET_MOVIES_GENRES:
            return {
                ...state,
                movieGenres: action.payload
            };

        //CASOS RELACIONADOS A LAS SERIES
        case GET_POPULAR_SERIES:
            return {
                ...state,
                popularSeries: action.payload
            };
        case GET_TOP_RATED_SERIES:
            return {
                ...state,
                topRatedSeries: action.payload
            };
        case GET_SERIES_NAME:
            if (action.payload.length === 0) {
                window.alert("The serie wasn't found")
            }
            return {
                ...state,
                seriesByName: action.payload,
            };
        case GET_SERIES_ID:
            return {
                ...state,
                serieByID: action.payload
            };
        case GET_SERIES_GENRES:
            return {
                ...state,
                seriesGenres: action.payload
            };

        //CASOS RELACIONADOS AL USUARIO
        case GET_USER:
            return {
                ...state,
                userLogged: action.payload
            };
        case CREATE_USER:
            return {
                ...state,
                userLogged: action.payload
            };
        case USER_LOGUOT:
            return {
                ...state,
                userLogged: [],
                favoriteMovies: [],
                favoriteSeries: []
            };
        
        //CASOS RELACIONADOS A FAVORITOS
        case GET_FAVORITE_MOVIES:
            return {
                ...state,
                favoriteMovies: action.payload
            };
        case GET_FAVORITE_SERIES:
            return {
                ...state,
                favoriteSeries: action.payload
            };
        case POST_FAVORITE_MOVIE:
            return {
                ...state
            };
        case POST_FAVORITE_SERIE:
            return {
                ...state
            };
        case DELETE_FAVORITE_MOVIE:
            return {
                ...state
            };
        case DELETE_FAVORITE_SERIE:
            return {
                ...state
            };
        case REMOVE_FAVORITE_MOVIE:
            let withoutRemoved = state.favoriteMovies.filter(movie => movie.id !== action.payload);

            return {
                ...state,
                favoriteMovies: withoutRemoved
            }
            
        default:
            return state;
    };
};

export default rootReducer;
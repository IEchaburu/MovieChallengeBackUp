import axios from "axios";
import { GET_POPULAR_MOVIES, GET_TOP_RATED_MOVIES, GET_MOVIES_NAME, GET_MOVIE_ID, GET_MOVIES_GENRES, GET_MOVIE_CAST, GET_MOVIE_CREW } from "./movieActionTypes";

export const getPopularMovies = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get("http://localhost:3001/movie/popular_movies")

            return dispatch({
                type: GET_POPULAR_MOVIES,
                payload: data
            });

        } catch (error) {
            console.log(error);
        }
    }
};

export const getTopRatedMovies = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get("http://localhost:3001/movie/top_rated_movies")

            return dispatch({
                type: GET_TOP_RATED_MOVIES,
                payload: data
            });

        } catch (error) {
            console.log(error);
        }
    } 
};

export const getMoviesByName = (name) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:3001/movie/name?name=${name}`)

            return dispatch({
                type: GET_MOVIES_NAME,
                payload: data
            });

        } catch (error) {
            console.log(error);
        }
    } 
}

export const getMovieId = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:3001/movie/${id}`)

            return dispatch({
                type: GET_MOVIE_ID,
                payload: data
            });

        } catch (error) {
            console.log(error);
        }
    } 
}

export const getMovieGenres = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get("http://localhost:3001/movie_genres")

            return dispatch({
                type: GET_MOVIES_GENRES,
                payload: data
            });

        } catch (error) {
            console.log(error);
        }
    }
};

export const getCast = (payload) => {
    console.log(payload,"la payload");
    return {
        type: GET_MOVIE_CAST,
        payload
    }
}

export const getCrew = (payload) => {
    return {
        type: GET_MOVIE_CREW,
        payload
    }
}
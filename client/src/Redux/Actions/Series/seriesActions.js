import axios from "axios";
import { GET_POPULAR_SERIES, GET_SERIES_GENRES, GET_SERIES_ID, GET_SERIES_NAME, GET_SERIE_CAST, GET_SERIE_CREW, GET_TOP_RATED_SERIES } from "./seriesActionTypes";

export const getPopularSeries = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get("http://localhost:3001/serie/popular_series")

            return dispatch({
                type: GET_POPULAR_SERIES,
                payload: data
            });

        } catch (error) {
            console.log(error);
        }
    }
};

export const getTopRatedSeries = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get("http://localhost:3001/serie/top_rated_series")

            return dispatch({
                type: GET_TOP_RATED_SERIES,
                payload: data
            });

        } catch (error) {
            console.log(error);
        }
    } 
};

export const getSeriesByName = (name) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:3001/serie/name?name=${name}`)

            return dispatch({
                type: GET_SERIES_NAME,
                payload: data
            });

        } catch (error) {
            console.log(error);
        }
    } 
}

export const getSerieId = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:3001/serie/${id}`)

            return dispatch({
                type: GET_SERIES_ID,
                payload: data
            });

        } catch (error) {
            console.log(error);
        }
    } 
}

export const getSeriesGenres = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get("http://localhost:3001/series_genres")

            return dispatch({
                type: GET_SERIES_GENRES,
                payload: data
            });

        } catch (error) {
            console.log(error);
        }
    }
};

export const getCast = (payload) => {
    return {
        type: GET_SERIE_CAST,
        payload
    }
}

export const getCrew = (payload) => {
    return {
        type: GET_SERIE_CREW,
        payload
    }
}
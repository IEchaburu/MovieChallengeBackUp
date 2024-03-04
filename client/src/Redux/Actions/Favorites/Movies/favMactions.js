import axios from "axios";
import { DELETE_FAVORITE_MOVIE, GET_FAVORITE_MOVIES, POST_FAVORITE_MOVIE, REMOVE_FAVORITE_MOVIE } from "./favMActionTypes";



export const getFavMovies = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:3001/favorite/favorite_movies/${id}`)

            return dispatch({
                type: GET_FAVORITE_MOVIES,
                payload: data
            });

        } catch (error) {
            console.log(error);
        };
    };
};

export const postFavMovie = (body) => {
    return async (dipatch) => {
        try {
          const { data } = await axios.post("http://localhost:3001/favorite/post_movie", body);
    
          return dipatch({
            type: POST_FAVORITE_MOVIE,
            payload: data
          });
    
        } catch (error) {
          console.log(error);
          window.alert(error.response.data.error);
        };
      };
};

export const deleteFavMovie = (body) => {
    return async (dipatch) => {
        try {
          
          const { data } = await axios.post("http://localhost:3001/favorite/delete_movie", body);
          
          return dipatch({
            type: DELETE_FAVORITE_MOVIE,
            payload: data
          });
    
        } catch (error) {
          console.log(error);
          window.alert(error.response.data.error);
        };
      };
};

export const removeMovie = (payload) => {
    return {
      type: REMOVE_FAVORITE_MOVIE,
      payload
    };
};
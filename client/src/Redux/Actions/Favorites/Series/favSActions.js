import axios from "axios";
import { DELETE_FAVORITE_SERIE, GET_FAVORITE_SERIES, POST_FAVORITE_SERIE } from "./favSActionTypes";



export const getFavSeries = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:3001/favorite/favorite_series/${id}`)

            return dispatch({
                type: GET_FAVORITE_SERIES,
                payload: data
            });

        } catch (error) {
            console.log(error);
        };
    };
};

export const postFavSerie = (body) => {
    return async (dipatch) => {
        try {
    
          const { data } = await axios.post("http://localhost:3001/favorite/post_serie", body);
    
          return dipatch({
            type: POST_FAVORITE_SERIE,
            payload: data
          });
    
        } catch (error) {
          console.log(error);
          window.alert(error.response.data.error);
        };
      };
};

export const deleteFavSerie = (body) => {
    return async (dipatch) => {
        try {
    
          const { data } = await axios.post("http://localhost:3001/favorite/delete_serie", body);
    
          return dipatch({
            type: DELETE_FAVORITE_SERIE,
            payload: data
          });
    
        } catch (error) {
          console.log(error);
          window.alert(error.response.data.error);
        };
      };
};
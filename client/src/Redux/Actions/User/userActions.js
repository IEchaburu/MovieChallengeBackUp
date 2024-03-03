import axios from "axios";
import { CREATE_USER, GET_USER } from "./actionTypes";


export const userLogin = (body) => {
    return async (dipatch) => {
      try {

        const { data } = await axios.post("http://localhost:3001/users/user_login", body);

        return dipatch({
          type: GET_USER,
          payload: data
        });

      } catch (error) {
        console.log(error);
        window.alert(error.response.data.error);
      }
    }

};

export const createUser = (body) => {
  return async (dipatch) => {
    try {

      const { data } = await axios.post("http://localhost:3001/users/create_user", body);

      return dipatch({
        type: CREATE_USER,
        payload: data
      });

    } catch (error) {
      console.log(error);
      window.alert(error.response.data.error);
    }
  }
};

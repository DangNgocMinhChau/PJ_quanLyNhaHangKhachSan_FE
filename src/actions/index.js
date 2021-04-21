import * as Types from "./../constants/ActionType";
import callApi from "./../utils/apiCaller";
import axios from "axios";
const apiUrl = "https://www.techiediaries.com/api/data.json";
export const actFetchDataRequest = (data) => {
  return (dispatch) => {
    return callApi("url", "GET", null).then((res) => {
      dispatch(actFetchData(res.data));
    });
  };
};

export const actFetchData = (data) => {
  return {
    type: Types.FETCH_DATA,
    data,
  };
};

export const actFetchRestaurantRequest = () => {
  return (dispatch) => {
    console.log("Không thể chạy vô đây");
    return callApi("listRestaurant", "GET", null)
      .then((res) => {
        console.log(res);
        dispatch(actFetchRestaurant(res.data));
      })
      .catch((ms) => {
        console.log(ms);
      });
  };
};

export const actFetchRestaurant = (data) => {
  console.log(data);
  return {
    type: Types.FETCH_RESTAURANT,
    data,
  };
};

export const fetchData = () => {
  return (dispatch) => {
    return axios
      .get(apiUrl)
      .then((response) => {
        return response.data;
      })

      .catch((error) => {
        throw error;
      });
  };
};

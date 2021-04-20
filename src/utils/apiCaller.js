import axios from "axios";
import * as Config from "./../constants/Config";

export default function callApi(url, method = "GET", body) {
  return axios({
    method: method,
    url: `${Config.API_URL}/${url}`,
    data: body,
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

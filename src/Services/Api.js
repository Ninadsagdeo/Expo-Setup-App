// main API service, giving you an interface to communicate with your back end
import Axios from "axios";

export const getCall = url => {
  Axios.get(url)
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
};

export const postCall = (url, data) => {
  Axios.post(url, data)
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
};

export async function getAsyncCall(url) {
  try {
    const response = await Axios.get(url);
    //console.log(response);
    return response;
  } catch (error) {
    //console.error(error);
    return error;
  }
}

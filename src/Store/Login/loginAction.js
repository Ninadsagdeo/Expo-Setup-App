//import { NavigationActions } from "react-navigation";
import NavigationService from "../../Navigation/NavigationService";
import Axios from "axios";
import { getCall } from "../../Services/Api";

export const nextScreen = () => {
  return dispatch => {
    console.log("HI There");
    getCall("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        console.log(res.data);

        dispatch({ type: "NextScreen" });
        return NavigationService.navigate("About");
      })
      .catch(error => console.log(error));
  };
};
export const chatScreen = () => {
  return dispatch => {
    console.log("HI There");
    Axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        console.log(res.data);

        dispatch({ type: "chatScreen" });
        return NavigationService.navigate("Chat", { name: "Ninad" });
      })
      .catch(error => console.log(error));
  };
};

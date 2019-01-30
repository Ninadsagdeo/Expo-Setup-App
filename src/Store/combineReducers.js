import { combineReducers } from "redux";
import loginReducer from "./Login/loginReducer";
//import { createNavigationReducer } from "react-navigation-redux-helpers";
//import AppNavigation from "../Navigation/AppNavigation";
//const navReducer = createNavigationReducer(AppNavigation);

export default (rootReducer = combineReducers({
  login: loginReducer
  //nav: navReducer
}));

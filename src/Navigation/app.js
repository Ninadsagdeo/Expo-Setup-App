import { reduxifyNavigator } from "react-navigation-redux-helpers";
import { connect } from "react-redux";
import AppNavigation from "./AppNavigation";
const AppNav = reduxifyNavigator(AppNavigation, "root");
const mapStateToProps = state => ({
  state: state.nav
});
export const AppWithNavigationState = connect(mapStateToProps)(AppNav);

import { createStackNavigator, createAppContainer } from "react-navigation";
import LaunchScreen from "../Containers/LaunchScreen";
import About from "../Containers/About";
import Chat from "../Containers/Chat";

const AppNavigation = createStackNavigator(
  {
    Home: { screen: LaunchScreen },
    About: { screen: About },
    Chat: { screen: Chat, path: "chat/:user" }
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        // backgroundColor: "",
      },
      headerTintColor: "black",
      headerTitleStyle: {
        fontWeight: "bold",
        color: "black"
      }
    }
  }
);

export default createAppContainer(AppNavigation);

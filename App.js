import React from "react";
import Application from "./src/App";
import { Provider } from "react-redux";
import { store } from "./src/Store/store";
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Application />
      </Provider>
    );
  }
}

export default App;

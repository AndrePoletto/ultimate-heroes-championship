import React from "react";
import Home from "./pages/home";
import { Provider } from "react-redux";
import { Store as store } from "./store/index";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Home />
        </div>
      </Router>
    </Provider>
  );
}

export default App;

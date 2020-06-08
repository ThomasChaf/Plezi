import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./common/Header/Header";
import { Home } from "./Home/Home";
import { MoviePage } from "./MoviePage/MoviePage";

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path="/movie/:id" component={MoviePage} />

        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;

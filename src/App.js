import React, { Fragment } from 'react';
import Cards from "./components/Cards";
import CardsForm from "./components/CardsForm";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Flashcards from "./components/Flashcards";
import NoMatch from "./components/NoMatch";

const App = () => (
  <Fragment>
    <Navbar />
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/flashcards" component={Flashcards} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Fragment>
);

export default App;
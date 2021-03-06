// App.js

import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Header from "./header/Header";
import Main from "./main/Main";
import Movie from "./movie/Movie";
import NotFound from "./NotFound";
import Footer from "./footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path="/movies/:movieId" component={Movie} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

// Promise reject, slack update?
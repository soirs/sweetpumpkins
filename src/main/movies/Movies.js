// Movies.js

import React from "react";
import Button from "../navigation/Button";
import MovieListItem from "./MovieListItem";
import "./Movies.css";

const Movies = ({
  movies,
  page,
  onPageIncrease,
  onPageDecrease
}) => (
  <section>
    <ul className="movies">
      {movies.map( movie => (
        <MovieListItem key={movie.id} movie={movie} />
      ))}
    </ul>
    <div className="pagination">
      <Button onClick={onPageDecrease}>Previous</Button>
      <span>{`Page ${page}`}</span>
      <Button onClick={onPageIncrease}>Next</Button>
    </div>
  </section>
)

export default Movies;
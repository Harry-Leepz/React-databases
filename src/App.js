import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [moviesData, setMoviesData] = useState([]);

  const fetchMoviesHandler = () => {
    fetch("https://swapi.dev/api/films/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformData = data.results.map((movie) => {
          return {
            id: movie.episode_id,
            title: movie.title,
            openingText: movie.opening_crawl,
            releaseDate: movie.release_date,
          };
        });
        setMoviesData(transformData);
      });
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={moviesData} />
      </section>
    </React.Fragment>
  );
}

export default App;

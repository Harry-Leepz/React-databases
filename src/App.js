import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [moviesData, setMoviesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.py4e.com/api/films/");
      if (!response.ok) {
        throw new Error(
          "Something went wrong here! There was ann issue with the request!"
        );
      }
      const data = await response.json();

      const transformData = data.results.map((movie) => {
        return {
          id: movie.episode_id,
          title: movie.title,
          openingText: movie.opening_crawl,
          releaseDate: movie.release_date,
        };
      });
      setMoviesData(transformData);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  // Content for movie data section
  let content = <p>No Movies found!</p>;
  if (error) {
    content = <p>{error}</p>;
  }
  if (moviesData.length > 0) {
    content = <MoviesList movies={moviesData} />;
  }
  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;

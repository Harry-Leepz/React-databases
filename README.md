# **React Databases**

## **Making GET requests, using Vanilla JS**

- When making GET requests using the Fetch API, remember to resolve the promises.
- The first prmoise needs to to be resolved by converting the response in JSON by using the built in .json() method.
- The second promise is resolved by getting the actual data from the response.

```
const fetchMoviesHandler = () => {
  fetch("https://swapi.dev/api/films/")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setMoviesData(data);
    });
};
```

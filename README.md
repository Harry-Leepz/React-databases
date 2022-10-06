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

## **Making GET requests using Async / Await**

- When using the async / await version, the code is alot leaner and easier to read but is dependant on the async / await keywords.
- We use the async keywon to let JavaScript know this is an asynchronous function.
- We use the await keyword when resolving promises and waiting for responses.

```
const fetchMoviesHandler = async () => {
    const response = await fetch("https://swapi.dev/api/films/");
    const data = await response.json();
    setMoviesData(data);
  };
```

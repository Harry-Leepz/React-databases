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

---

# **Handling Errors when making Http requests**

## **Handling errors in Vanilla JS**

- We can add a catch block, to catch any errors.

```
const fetchMoviesHandler = () => {
  fetch("https://swapi.dev/api/films/")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setMoviesData(data);
    });
    .catch((error) => {
      console.log(error)
    })
};
```

## **Handling errors using Async / Await**

- In this example we are creating a custom error message, when the response IS NOT ok.
- When using Async / Await, always use try and catch blocks to catch errors.

```
try {
  const response = await fetch("https://swapi.py4e.com/api/films/");
  if (!response.ok) {
    throw new Error(
      "Something went wrong here! There was ann issue with the request!"
    );
  }
  const data = await response.json();
  console.log(data)
} catch (error) {
    setError(error.message);
}
```

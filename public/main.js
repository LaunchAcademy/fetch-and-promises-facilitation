const fetchPizzaFunction = () => {
  fetch('http://localhost:4567/pizza.json')
    .then((response) => {
      if (response.ok || response.status === 200) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw (error);
      }
    })
    .then((response) => {
      return response.json()
    })
    .then((parsedPizzaData) => {
      console.log(parsedPizzaData)
    })
    .catch((error) => {
      console.log("THINGS BROKE DUDE")
      console.log(error)
    })
}

pizzaFetcherDiv = document.getElementById("pizza-fetcher-div")
pizzaFetcherDiv.addEventListener("click", fetchPizzaFunction, false);
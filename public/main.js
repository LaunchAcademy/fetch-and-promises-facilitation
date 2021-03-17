// // debugger

// Promise = just a wrapper that contains the data we want 

const fetchPizza = async () => {
  try {
    
    const response = await fetch("/pizza.json")

    const pizzaResponseBody = await response.json()

    pizzaFetcherDiv = document.getElementById("pizza-fetcher-div")

    console.log("responseBody:", responseBody)
  } catch(err) {
    console.error("Error in fetch!")
  }
}

pizzaFetcherDiv = document.getElementById("pizza-fetcher-div")
pizzaFetcherDiv.addEventListener("click", fetchPizza, false);

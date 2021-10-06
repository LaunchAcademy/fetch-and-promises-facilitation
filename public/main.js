
// debugger

const fetchPizza = async () => {
  try {
    const pizzaResponse = await fetch("/api/v1/pizzassss")
    if (!pizzaResponse.ok) {
      const errorMessage = `${pizzaResponse.status} you got a 500 or 400`
      const errorObject = new Error(errorMessage)
      throw(errorObject)
    }

    const parsedPizzaString = await pizzaResponse.json()
    console.log(parsedPizzaString)
  } catch(thrownErrorObject) {
    console.log(thrownErrorObject)
  }
}


// fetchPizza()

pizzaFetcherDiv = document.getElementById("pizza-fetcher-div")
pizzaFetcherDiv.addEventListener("click", fetchPizza, false); 
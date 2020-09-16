// let stuffTag = document.getElementById('stuff')
// stuff.innerHTML += `<li> something </li>`

const randomFunction = () => {

}

const fetchFunction = () => {
  fetch('http://localhost:4567/aragorn.json')
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
    .then((parsedResponseData) => {
      console.log("finishing the fetch request")
      console.log(parsedResponseData)
    })
    .catch((error) => {
      console.log("THINGS BROKE DUDE")
      console.log(error)
    })
}

stuffDiv = document.getElementById("stuff")
stuffDiv.addEventListener("click", fetchFunction, false);


fetch => phone call 

preparing the pizza is all of the stuff on the backend Server.rb 

decorate our house 
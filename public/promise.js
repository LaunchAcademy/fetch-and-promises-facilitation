
// ### Custom Example 

// reading a file takes time. 

const whenDone = (err, data) => {
  if (err) {
    return "something went wrong!"
  } else {
    console.log("It worked, here is your tweet data!")
    return data
  }
}

parsed_tweets = fs.readFile("tweets.json", 'utf8', whenDone)
console.log(parsed_tweets)

// ### Example like reading


let read = (filename) => {

  return new Promise((resolve, reject) => {

    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) {
        reject((err))
      } else {
        resolve(data)
      }
    })
  })
}


const jsonData = await read("twitterData.json")

let parsedData = JSON.parse(jsonData);

console.log(parsedData);

// lulz I just bought a frappaucino her dur




// ---


// const doSomethingAsynchronously = () => {
//   return new Promise((resolve, reject) => {

//     return asyncFunction((asyncWorked, asyncBroke)=> {

//       if(condition of your choice that indicates success) {
//         data = asyncWorked.data
//         console.log("it worked")
//         resolve(data);
//         // changes unsettled promise to fulfilled
//         // can put an argument in resolve that persists some data generated from your    
//       }

//       if(condition that indicates error) {
//         reject("things broke!");
//         // changes unsettled promise to rejected
//         // can put an argument in reject that persists some data, such as an error 
//       }
//     })
//   })
// }

// const asyncData = await doSomethingAsynchronously()
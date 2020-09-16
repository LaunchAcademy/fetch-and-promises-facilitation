
// new Promise((resolve, reject) => {
//  asyncFunction(()=> {
//   if(condition of your choice that indicates success) {
//     resolve();
//     // changes unsettled promise to fulfilled
//     // can put an argument in resolve that persists some data generated from your    
//        async function ie resolve(data)
//   }
//   if(condition that indicates bad-news bears) {
//     reject();
//     // changes unsettled promise to rejected
//     // can put an argument in reject that persists some data, such as an error 
//       Message ie reject(error)
//   }
//  })
// })

// import fs from 'fs'

let read = (filename) => {
  return new Promise((resolve, reject) => {    
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) {
        reject(Error(err))
      } else {
        resolve(data)
      }
    })
  })
}

read("twitterData.json")
  .then((data) => {
    let parsedData = JSON.parse(data);
    console.log(parsedData);
  })
  .catch((err) => {
    console.log("Something went wrong.");
    console.log(err);
  });
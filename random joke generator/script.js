console.log('script is loaded');


// //  function getData(){
// let a = fetch('https://v2.jokeapi.dev/joke/Programming,Dark') 
// let data =  a.json
//  console.log(data);




//         console.log(joke);
//         console.log(category);
//         console.log(json);





// // }
let joke
let category
let setup
let delivery
let data

function fetchjoke() {
  fetch("https://v2.jokeapi.dev/joke/Programming,Dark") // Replace with the actual API URL
    .then(response => response.json()) // Convert the response to JSON
    .then(data => {
      // Separate the joke and category
      let joke = data.joke; // Adjust the key based on your API's response
      let category = data.category;
      let setup = data.setup;
      let delivery = data.delivery;
      console.log(joke);
      console.log(category);
      console.log(data);
      console.log(setup);
      console.log(delivery);

      document.getElementById('Category').innerText = `${category}`

      if (joke) {

        document.getElementById('Joke').innerText = `${joke}`
        document.getElementById('Setup').innerText = ``
        document.getElementById('Delivery').innerText = ``

      }
      else if (setup && delivery) {
        document.getElementById('Joke').innerText = ``
        document.getElementById('Setup').innerText = `${setup}`
        document.getElementById('Delivery').innerText = `${delivery}`
      }

    }
    )

}

document.getElementById('button').addEventListener("click", fetchjoke)
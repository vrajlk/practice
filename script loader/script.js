console.log('this is script loading file');
console.log('we are going to load the another js file using promise and .then ');

let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {

        
        var script = document.createElement('script');
        script.onload = function () {
            //do stuff with the script
            alert('script is loaded successfully');
            
        };
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js";

        document.body.appendChild(script); //or something of the likes

        console.log('script is now successfully loaded');
        


    }, 3000);
})

promise1.then ((a) => {
  console.log(a);
  
}
)
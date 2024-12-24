let  tryblink = document.getElementById("newblink")
    tryblink.style.color="blue"
console.log(tryblink)
 setInterval(() => {
     
     tryblink.style.color="red"
     tryblink.style.opacity="0%"


 }, 1000);setInterval(() => {
     
     tryblink.style.color="red"
     tryblink.style.opacity="100%"


 }, 2000);

 let dot = document.querySelector("#try")
    console.log(dot)

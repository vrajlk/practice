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

    let dot0= document.getElementById("dot1")
        console.log(dot1)

let dotblink = document.getElementById("dot1")
setInterval(() => {
     
    dotblink.style.opacity="0%"
    
}, 1000);

setInterval(() => {
     
    dotblink.style.opacity="100%"
    
}, 2000);



document.querySelectorAll(".dotblinked").forEach(e =>{
    setInterval(() => {
     
        e.style.opacity="0%"
        
    }, 1000);

    setInterval(() => {
     
        e.style.opacity="100%"
        
    }, 2000);
    
}

)

const rndint = Math.floor(Math.random()*7)+1
        console.log(rndint);


let fade1 = document.getElementById("warning2")

        fade1.innerHTML
   setTimeout(() => {
       fade1.style.opacity="100%"
   },(rndint));
    

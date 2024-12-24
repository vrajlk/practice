// written by vraj lakum

/*

"intializing hacking...",
"you are hooked...",
"searching for important files...",
"saved passwords detected...",
"sending to the server...",
"sent...",
"claering logs...",
"work done...",
*/
const additem = async(item) => {
  await randomdelay()
  let div = document.createElement("div")
  div.innerHTML = item
  document.body.append(div)
}

const randomdelay = () => {
  return new Promise((resolve, reject) => {
    timeout = 1 + 6*Math.random()
    setTimeout(() => {
        resolve()
    }, timeout*1000);
  })
}

async function main(){

    setInterval(() => {
        let dot = document.body.lastElementChild
        if (dot.innerHTML.endsWith("...")) {
            dot.innerHTML.slice(0,dot.innerHTML.length-3)
        }
        else{

            dot.innerHTML = dot.innerHTML + "."
        }
    }, 700);
    
    let message = [
        
        "intializing hacking",
        "you are hooked",
        "searching for important files",
        "saved passwords detected",
        "sending to the server",
        "sent",
        "claering logs",
        "work done",
    ]
    
    
    for (const item of message) {
        await additem(item)
    }
}

main()
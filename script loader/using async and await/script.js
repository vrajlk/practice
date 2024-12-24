console.log('we are going to load the script using async and await');
console.log('get ready');


async function getlink() {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('script is loaded');
            var script = document.createElement('script');
            script.onload = function () {
                //do stuff with the script
                alert('script is loaded successfully');
                
            };
            script.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js";
            
            document.body.appendChild(script); //or something of the likes
            
            
            
        }, 3000);
    })
    
}

async function main() {
    
    console.log('your script is going to be loaded in 3 seconds');
    
    let show = await getlink()
    console.log(show);
    
    
    
    console.log('script is loaded succesfuly');
    
}

main()
    
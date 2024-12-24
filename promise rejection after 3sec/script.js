console.log('file attached done');


async function rejection() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('promise is going to be rejected ');
            reject("you are not eligible to run this code my brothaa")
            
        }, 3000);
    })
}

try {
    async function main (){
        console.log('trying to reject this promise after 3 seconds');
        
        let rejected = await rejection()
        console.log(rejected);

        console.log('promise is rejected dayummmmmm');

       
        
        
    }
    main()
} 

catch (err) {
    
    let msg = rejection.catch((err) => {
      console.log(err);
      
    }
    )
}

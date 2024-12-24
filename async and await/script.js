// function getdata() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('data from the server is arrived sucsessfully');

//             resolve(console.log('value is fetched my brothaaa')
//             )
//         }, 3000);
//     })
// }
// console.log('async and await');

// console.log('starting progress');

// console.log('fetching data');

// let data = getdata()
// data.then((value) => {
//     console.log(data);


//     console.log('data got');

//     console.log('processing data');

//     console.log('data is processed');

//     console.log('work is done');

// }
// )


async function getdata() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('data from the server is arrived sucsessfully');

            resolve(console.log('value is fetched my brothaaa')
            )
        }, 3000);
    })
}

async function main(){

    
    console.log('async and await');
    
    console.log('starting progress');
    
    console.log('fetching data');
    
    let data = await getdata()
    
    console.log(data);
    
    
    console.log('data got');
    
    console.log('processing data');
    
    console.log('data is processed');

    console.log('work is done');
    
}

main()
    
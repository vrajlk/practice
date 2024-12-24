async function getData(){
    let a = await fetch('https://jsonplaceholder.typicode.com/todos/1')
     let data = await a.json
     return data
}


async function main() {
    console.log('data found on the server');


    console.log('getting data from the server');

    console.log('fetching data');

    let data = await getData()
        console.log(data);
        

    console.log('data got');

    console.log('processiong data');
    
    console.log('data is ready to be show to the user');
    
}

main()
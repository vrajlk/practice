console.log('promises and callbacks');

let promise1 = new Promise((resolve, reject) => {
    let a = Math.random()
    if (a < 0.5) {
        reject("random number was against you studpid1");
    }
    else {
        setTimeout(() => {
            console.log('work is done my brotha1');
            resolve("vraj your work is done1")
        }, 5000);
    }
})


let promise2 = new Promise((resolve, reject) => {
    let a = Math.random()
    if (a < 0.5) {
        reject("random number was against you studpid 2");
    }
    else {
        setTimeout(() => {
            console.log('work is done my brotha2');
            resolve("vraj your work is done2")
        }, 4000);
    }
})

let promise3 = new Promise((resolve, reject) => {
    let a = Math.random()
    if (a < 0.5) {
        reject("random number was against you studpid 3");
    }
    else {
        setTimeout(() => {
            console.log('work is done my brotha3');
            resolve("vraj your work is done3")
        }, 3000);
    }
})

let promise4 = new Promise((resolve, reject) => {
    let a = Math.random()
    if (a < 0.5) {
        reject("random number was against you studpid 4");
    }
    else {
        setTimeout(() => {
            console.log('work is done my brotha4');
            resolve("vraj your work is done4")
        }, 2000);
    }
})

let promise5 = new Promise((resolve, reject) => {
    let a = Math.random()
    if (a < 0.5) {
        reject("random number was against you studpid 5");
    }
    else {
        setTimeout(() => {
            console.log('work is done my brotha5');
            resolve("vraj your work is done5")
        }, 1000);
    }
})


let p3 = Promise.race([promise1,promise2,promise3,promise4,promise5])
p3.then ((a) => {
    console.log(a);
    
}).catch((err)=>{

    console.log(err);    
}
)

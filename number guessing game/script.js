console.log('you are in number guessing game');
console.log('you can only leave this game when you guess the correct number');


userInput = null



let rannumb = Math.floor(1 + 10*Math.random())

while (userInput !== rannumb) {
    
    
    const userInput = 
    parseInt(prompt("Please enter your number:"));
    console.log(userInput);
    
    
    
    if (userInput === rannumb) {
        console.log('brothhaaa you guessed the right number');
        break
        
    }
    
    else if (userInput<rannumb) {
        console.log('your guess is lesser than the original, guess higher');
        
    }
    
    else if (userInput>rannumb) {
        console.log('your guess is higher than the original, guess lower');
        
    }
    
}
console.log("the random number was"+  (rannumb)  + "and you guessed it correctly");

    
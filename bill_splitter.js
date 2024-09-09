// Task 1: Calculate the Tip
let bill= 100; // Assigns bill 
let tip;

50 <= bill && bill <= 300 ? tip = 0.15 : tip = 0.2; // Output: Tells program that if the bill is inbetween $50-$300 then the tip is 15%, if not then it is 20%

tip = bill * tip; // Output: This line will determine the cost of the tip

// Task 2: Output Details 

console.log("The bill was $" + bill + ", the tip was $" + tip + ", and the total value is $" + (bill + tip)); //Output: The bill was $100, the tip was $15, and the total value is $115 

// Task 3: Create a Function 

function calculateTip(billAmount) {
    let tip; 50 <= billAmount && billAmount <= 300 ? tip = 0.15 : tip = 0.2; 
    tip= billAmount * tip; 
    return tip; 
} // Output: Calculates the tip based upon the $100 determined at the beginning of the program

console.log(calculateTip(100)); // Output: 15
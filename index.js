let salary = 500;
let employeeContribution = (5 / 100) * 500;
let taxableAmount = salary - employeeContribution;
console.log("This is the taxable amount: " + taxableAmount + " EUR");

let taxUnder250 = (4/100)* (250-80);
let taxUnder450 = (8/100)* (450-250);
let taxOver450 = (10/100)* (taxableAmount-450);
let tax = taxUnder250 + taxUnder450 + taxOver450;
console.log("This is the tax: " + tax + " EUR");
let moneyIGet = taxableAmount - tax;
console.log("This is what you get: " + moneyIGet + " EUR");

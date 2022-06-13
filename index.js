let salary = 500;
let employeeContribution = (5 / 100) * 500;
let taxableAmount = salary - employeeContribution;
console.log("This is the taxable amount: " + taxableAmount + " EUR");
let tax = 0;
if (salary <= 80) {
    tax = 0;
}else if (salary < 250 && salary > 80) {
    tax = tax + (4 / 100) * taxableAmount + "EUR";
    console.log("Tax for salary bigger than 80 EUR and lower than 250 EUR: " + tax + " EUR");
}else if (salary < 450 && salary > 250) {
    tax = tax + (8 / 100) * taxableAmount;
    console.log("Tax for salary bigger than 250 and lower than 450 EUR: " + tax + " EUR");
}else {
    tax = tax + (10 / 100) * taxableAmount;
    console.log("Tax for salary bigger than 450 EUR: " + tax + " EUR");
}
let moneyIGet = taxableAmount - tax;
console.log("This is what you get :" + moneyIGet + " EUR");


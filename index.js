"use strict";
// price variable
let price = +prompt("Enter Bill amount:");
// tip variable
let tip = +prompt("Enter tip in %:");


if (price != null && price > 0 && !isNaN(price)) {
    tip = (tip / 100) * price;
    let total = price + tip; 
    alert(`your tip is: Ksh ${tip}\n your total is: Ksh ${total}`);
} else {
    alert("Enter valid price");
}


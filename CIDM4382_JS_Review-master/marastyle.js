//console.log("Anyone there?");




//alert("Anyone there?");




// var x = 10;
// var y = 20;
// var z = x*y;

//alert(x + " times " + y + " is " + z);




//var house = prompt("What Hogwarts house are you in: ");
//console.log(house);




// var donuts = prompt("How many donuts are you going to buy? ");

// if (donuts < 12) {
//     donuts = donuts * 1.00;
// }
// else {
//     donuts = donuts * 0.50;
// }
// alert("Price: $" + donuts);






// var number = prompt("Enter a number greater than 0: ");
// while (number < 1) {
//     var number = prompt("Enter a number greater than 0: ");
// }
// alert("Thank you!");





// let petals = prompt("How many petals does your daisy have?");
// for(var i = petals; i > 0; --i) {
//     if(i % 2 == 1 && i != petals) {
//         console.log("She loves me not.");
//     }
//     else {
//         console.log("She loves me.");
//     }
// }





// var rolls = prompt("How many times do you want to roll the dice?");
// var count = 0;

// for (var i = 0; i <= rolls; i++) {
//     var die1 = Math.floor(Math.random() * 6) + 1;
//     var die2 = Math.floor(Math.random() * 6) + 1;

//     if (die1 == die2 && die1 == 1 && die2 == 1) {
//         count = count + 1;
//     }
// }

// alert("A pair of ones was rolled " + count + " time(s).");





// var num1;
// var num2;
// var addedNum;

// function add() {    
//     var num1 = prompt("Enter a number:");
//     var num2 = prompt("Enter a number:");
//     addedNum = parseInt(num1) + parseInt(num2);
//     console.log(num1 + " + " + num2 + " = " + addedNum);
// }

// add();




// var name = prompt("Enter your name:");
// var nameInput;
// var nameFinal;
// for (var i = 0; i < name.length; i++) {
//     nameInput = prompt("Give me a/an:  !");
//     while (nameInput != name.charAt(i)) {
//         nameInput = prompt("Wrong! Give me a/an:  !");
//     }
// }
// nameFinal = prompt("What's that spell?!");
// if (nameFinal != name) {alert("boo");}
// else {alert(name);}




// function cheerlead(name) {
//     var nameInput;
//     var nameFinal;
//     for (var i = 0; i < name.length; i++) {
//         nameInput = prompt("Give me a/an:  !");
//         while (nameInput != name.charAt(i)) {
//             nameInput = prompt("Wrong! Give me a/an:  !");
//         }
//     }
//     nameFinal = prompt("What's that spell?!");
//     if (nameFinal != name) {alert("boo");}
//     else {alert(name);}
//     return("That was fun!");
// }

var bookshelf = new Array("","","","","");
for(var i = 0; i < 5; i++) {
    if(bookshelf[i] == "") {
        userAnswer = "no";        
        while (userAnswer != "yes") {
            userAnswer = prompt("Would you like to put a book on the bookshelf? (yes or no)");
        }
        bookshelf[i] = prompt("What is the book's title?");
        bookshelf[i] = "[" + bookshelf[i]+ "]";
    }
}
console.log("There are now 5 books on the bookshelf!");
console.log(bookshelf[0]+bookshelf[1]+bookshelf[2]+bookshelf[3]+bookshelf[4]);
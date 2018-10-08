//Initialize variables
var keepPlaying = true;

while (keepPlaying == true) {
    //This alers the user they are playing a new game, helps readability 
    console.log("------------- NEW GAME -------------")

    //Initialize variables
    var treasureFound = false;
    var userPlay = "a";

    //Create the map
    var map = [
        ['^', '^', '^', '^', '^'],
        ['^', '^', '^', '^', '^'],
        ['^', '^', '^', '^', '^'],
        ['^', '^', '^', '^', '^'],
        ['^', '^', '^', '^', '^']
    ]

    //Generate where the treasure is 
    var treasureRow = Math.floor(Math.random() * 5);
    var treasureColumn = Math.floor(Math.random() * 5);

    //Reset these for every iteration
    userRow = -1;
    userColumn = -1;      

    //Comment Out Later
    // console.log("Treasure Row: " + treasureRow);
    // console.log("Treasure Column: " + treasureColumn);

    while (treasureFound == false) {

        //Show the user the map 
        console.table(map)

        //Reset these for every iteration
        userPlay = "a";
        userRow = -1;
        userColumn = -1;
            
        //Get where the user wants to dig
        while (userRow < 0 || userRow > 4) {
                userRow = parseInt(prompt("Which row do you want to dig in?"));
        }    

        while (userColumn < 0 || userColumn > 4) {
                userColumn = parseInt(prompt("Which column do you want to dig in?"));
        }

        //Adjust map
        if (userRow != treasureRow || userColumn !=treasureColumn) {

            //Mark the user's guess
            map[userRow][userColumn] = 'O';

            //The second while loop will continue
            treasureFound = false;

            //Tell the use which direction they need to dig
            if (userRow < treasureRow) {console.log("Dig South");}
            else if (userRow > treasureRow) {console.log("Dig North");}
            else {console.log("You're in the right row!");}
            if (userColumn < treasureColumn) {console.log("Dig East");}
            else if (userColumn > treasureColumn) {console.log("Dig West");}
            else {console.log("You're in the right column!");}
        }
        else {
            //Mark the user's guess
            map[userRow][userColumn] = 'X';

            //Since the loop won't reeat itself, show them a map so they can see they won
            console.table(map);

            //Exit the second while loop
            treasureFound = true;

            //Ask if the user wants to play again
            while (userPlay != "yes" && userPlay != "no") {
                userPlay = prompt("You won! Do you want to hunt for more treasure? (yes or no)");
            }
            if (userPlay == "yes") {keepPlaying = true;}
            else {keepPlaying = false;}
        }
    }
}
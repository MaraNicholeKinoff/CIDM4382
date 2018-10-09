// All of your code goes inside the document ready call.
$(document).ready(function() {

    // Generate a three-digit key code between 100 and 999
    // Share in the console "Your key code is ..."
    var keycode = Math.floor(Math.random() * 899) + 100;
    console.log("Your key code is " + keycode)   
    
    // Prompt the user for their secret key.
    // Make them keep entering their key until it is
    // a value between 100 and 999 inclusive.
    
    var usercode = 0;
    while (usercode < 100 || usercode > 999) {
        try {
            usercode = parseInt(prompt("Enter your secret key: ")); 
        }
        catch(err) {
            message.innerHTML = "Input is " + err;
        }
    }
    
    // If the user enters a valid code, allow them
    // access to the experiment functionality.
    // Otherwise, report "INTRUDER ALERT! ACCESS DENIED."
    // in an alert.
    
    if (usercode != keycode) {
        alert("INTRUDER ALERT! ACCESS DENIED.");
        location.reload();
    }
    else {
        
    }
    
    // If the user clicks Tube 1 it should turn 
    // red, yellow, or blue at random.
    // This snippet is given to you.

    var colors = ['rgb(220, 7, 43)', 'rgb(255, 255, 0)', 'rgb(41, 101, 240)'];
 
    $("#tube1").click(function () {

        var choice = Math.floor(Math.random() * 3);
        $("#tube1").css("background-color", colors[choice]);

        //console.log("Tube 2: " + $("#tube2").css("background-color"));

        if($("#tube2").css("background-color") != 'rgb(255, 255, 255)') {

                //console.log("Got to point A");
                        
                if (($("#tube1").css("background-color") === 'rgb(220, 7, 43)') && ($("#tube2").css("background-color") === 'rgb(220, 7, 43)')) {
                        $("#tube3").css("background-color", 'rgb(220, 7, 43)');
                }
                else if (($("#tube1").css("background-color") === 'rgb(220, 7, 43)') && ($("#tube2").css("background-color") === 'rgb(255, 255, 0)')) {
                        $("#tube3").css("background-color", 'rgb(255, 145, 0)');
                }
                else if (($("#tube1").css("background-color") === 'rgb(220, 7, 43)') && ($("#tube2").css("background-color") === 'rgb(41, 101, 240)')) {
                        $("#tube3").css("background-color", 'rgb(171, 0, 255)');
                }
                else if (($("#tube1").css("background-color") === 'rgb(255, 255, 0)') && ($("#tube2").css("background-color") === 'rgb(255, 255, 0)')) {
                        $("#tube3").css("background-color", 'rgb(255, 255, 0)');
                }
                else if (($("#tube1").css("background-color") === 'rgb(255, 255, 0)') && ($("#tube2").css("background-color") === 'rgb(220, 7, 43)')) {
                        $("#tube3").css("background-color", 'rgb(255, 145, 0)');
                }
                else if (($("#tube1").css("background-color") === 'rgb(255, 255, 0)') && ($("#tube2").css("background-color") === 'rgb(41, 101, 240)')) {
                $("#tube3").css("background-color", 'rgb(5, 164, 11)');
                }
                else if (($("#tube1").css("background-color") === 'rgb(41, 101, 240)') && ($("#tube2").css("background-color") === 'rgb(41, 101, 240)')) {
                        $("#tube3").css("background-color", 'rgb(41, 101, 240)');
                }
                else if (($("#tube1").css("background-color") === 'rgb(41, 101, 240)') && ($("#tube2").css("background-color") === 'rgb(220, 7, 43)')) {
                        $("#tube3").css("background-color", 'rgb(171, 0, 255)');
                }
                else if (($("#tube1").css("background-color") === 'rgb(41, 101, 240)') && ($("#tube2").css("background-color") === 'rgb(255, 255, 0)')) {
                        $("#tube3").css("background-color", 'rgb(5, 164, 11)');
                }
        }
    });

    
    // Similarly, if the user clicks Tube 2 it should 
    // turn red, yellow, or blue at random.

    $("#tube2").click(function () {

        var choice = Math.floor(Math.random() * 3);
        $("#tube2").css("background-color", colors[choice]);

        //console.log("Tube 1: " + $("#tube1").css("background-color"));

        if($("#tube1").css("background-color") != 'rgb(255, 255, 255)') {
            
                //console.log("Got to point B");
                                
                if (($("#tube1").css("background-color") === 'rgb(220, 7, 43)') && ($("#tube2").css("background-color") === 'rgb(220, 7, 43)')) {
                        $("#tube3").css("background-color", 'rgb(220, 7, 43)');
                }
                else if (($("#tube1").css("background-color") === 'rgb(220, 7, 43)') && ($("#tube2").css("background-color") === 'rgb(255, 255, 0)')) {
                        $("#tube3").css("background-color", 'rgb(255, 145, 0)');
                }
                else if (($("#tube1").css("background-color") === 'rgb(220, 7, 43)') && ($("#tube2").css("background-color") === 'rgb(41, 101, 240)')) {
                        $("#tube3").css("background-color", 'rgb(171, 0, 255)');
                }
                else if (($("#tube1").css("background-color") === 'rgb(255, 255, 0)') && ($("#tube2").css("background-color") === 'rgb(255, 255, 0)')) {
                        $("#tube3").css("background-color", 'rgb(255, 255, 0)');
                }
                else if (($("#tube1").css("background-color") === 'rgb(255, 255, 0)') && ($("#tube2").css("background-color") === 'rgb(220, 7, 43)')) {
                        $("#tube3").css("background-color", 'rgb(255, 145, 0)');
                }
                else if (($("#tube1").css("background-color") === 'rgb(255, 255, 0)') && ($("#tube2").css("background-color") === 'rgb(41, 101, 240)')) {
                        $("#tube3").css("background-color", 'rgb(5, 164, 11)');
                }
                else if (($("#tube1").css("background-color") === 'rgb(41, 101, 240)') && ($("#tube2").css("background-color") === 'rgb(41, 101, 240)')) {
                        $("#tube3").css("background-color", 'rgb(41, 101, 240)');
                }
                else if (($("#tube1").css("background-color") === 'rgb(41, 101, 240)') && ($("#tube2").css("background-color") === 'rgb(220, 7, 43)')) {
                        $("#tube3").css("background-color", 'rgb(171, 0, 255)');
                }
                else if (($("#tube1").css("background-color") === 'rgb(41, 101, 240)') && ($("#tube2").css("background-color") === 'rgb(255, 255, 0)')) {
                        $("#tube3").css("background-color", 'rgb(5, 164, 11)');
                }
        }
    });
    
    // If Tube 1 and Tube 2 are the following color
    // pairs, Tube 3 should change color as follows:
    // Red & Red --> Red
    // Red & Yellow --> Orange
    // Red & Blue --> Purple
    // Yellow & Yellow --> Yellow
    // Yellow & Red --> Orange
    // Yellow & Blue --> Green
    // Blue & Blue --> Blue
    // Blue & Red --> Purple
    // Blue & Yellow --> Yellow
       
    // If the user presses the spacebar, the color
    // of Tube 3 should turn to white and an alert
    // should be provided that says "Superpowers activated!"

    $('body').keyup(function(e){
        if(e.keyCode == 32){
            $("#tube3").css("background-color", 'rgb(250, 250, 250)');    
            alert("Superpowers activated!");
        }
    });
  
});  // End document ready -- WRITE ALL CODE ABOVE THIS LINE
                  
                  





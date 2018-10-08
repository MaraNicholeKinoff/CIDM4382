// // Use jQuery to change the background color of the cells in the table
// $(document).ready(function () {
//     $("#r1c1").click(function () {
//       $("#r1c1").css("background-image", "url(/dirt0.jpeg)");
//     })
//     $("#r1c2").click(function () {
//         $("#r1c2").css("background-image", "url(/dirt0.jpeg)");
//       })
// });

//Hiding win statement
$("#win").hide();

//Initial state of the yard
$(document).ready(function () {
    $("td").css("background-image", "url(/yard0.jpeg)");
});

//Placing Treasure
var treasureRow = Math.floor(Math.random() * 5) + 1;
var treasureColumn = Math.floor(Math.random() * 5) + 1;

//Checking on each part of the yard to see if the user found the treasure
$("#r1c1").click(function() {
    if (treasureColumn == 1 && treasureRow == 1) {
        $("#r1c1").css("background-image", "url(/treasure0.jpeg)");
        $("#win").show();
    }
    else
    {
        $(document).ready(function () {
            $("#r1c1").css("background-image", "url(/dirt0.jpeg)");
        });
    }
});

$("#r1c2").click(function() {
    if (treasureColumn == 1 && treasureRow == 2) {
        $("#r1c2").css("background-image", "url(/treasure0.jpeg)");
        $("#win").show();
    }
    else
    {
        $(document).ready(function () {
            $("#r1c2").css("background-image", "url(/dirt0.jpeg)");
        });
    }
});

$("#r1c3").click(function() {
    if (treasureColumn == 1 && treasureRow == 3) {
        $("#r1c3").css("background-image", "url(/treasure0.jpeg)");
        $("#win").show();
    }
    else
    {
        $(document).ready(function () {
            $("#r1c3").css("background-image", "url(/dirt0.jpeg)");
        });
    }
});

$("#r1c4").click(function() {
    if (treasureColumn == 1 && treasureRow == 4) {
        $("#r1c4").css("background-image", "url(/treasure0.jpeg)");
        $("#win").show();
    }
    else
    {
        $(document).ready(function () {
            $("#r1c4").css("background-image", "url(/dirt0.jpeg)");
        });
    }
});

$("#r1c5").click(function() {
    if (treasureColumn == 1 && treasureRow == 5) {
        $("#r1c5").css("background-image", "url(/treasure0.jpeg)");
        $("#win").show();
    }
    else
    {
        $(document).ready(function () {
            $("#r1c5").css("background-image", "url(/dirt0.jpeg)");
        });
    }
});

$("#r2c1").click(function() {
    if (treasureColumn == 2 && treasureRow == 1) {
        $("#r2c1").css("background-image", "url(/treasure0.jpeg)");
        $("#win").show();
    }
    else
    {
        $(document).ready(function () {
            $("#r2c1").css("background-image", "url(/dirt0.jpeg)");
        });
    }
});

$("#r2c2").click(function() {
    if (treasureColumn == 2 && treasureRow == 2) {
        $("#r2c2").css("background-image", "url(/treasure0.jpeg)");
        $("#win").show();
    }
    else
    {
        $(document).ready(function () {
            $("#r2c2").css("background-image", "url(/dirt0.jpeg)");
        });
    }
});

$("#r2c3").click(function() {
    if (treasureColumn == 2 && treasureRow == 3) {
        $("#r2c3").css("background-image", "url(/treasure0.jpeg)");
        $("#win").show();
    }
    else
    {
        $(document).ready(function () {
            $("#r2c3").css("background-image", "url(/dirt0.jpeg)");
        });
    }
});

$("#r2c4").click(function() {
    if (treasureColumn == 2 && treasureRow == 4) {
        $("#r2c4").css("background-image", "url(/treasure0.jpeg)");
        $("#win").show();
    }
    else
    {
        $(document).ready(function () {
            $("#r2c4").css("background-image", "url(/dirt0.jpeg)");
        });
    }
});

$("#r2c5").click(function() {
    if (treasureColumn == 2 && treasureRow == 5) {
        $("#r2c5").css("background-image", "url(/treasure0.jpeg)");
        $("#win").show();
    }
    else
    {
        $(document).ready(function () {
            $("#r2c5").css("background-image", "url(/dirt0.jpeg)");
        });
    }
});

$("#r3c1").click(function() {
    if (treasureColumn == 3 && treasureRow == 1) {
        $("#r3c1").css("background-image", "url(/treasure0.jpeg)");
        $("#win").show();
    }
    else
    {
        $(document).ready(function () {
            $("#r3c1").css("background-image", "url(/dirt0.jpeg)");
        });
    }
});

$("#r3c2").click(function() {
    if (treasureColumn == 3 && treasureRow == 2) {
        $("#3c2").css("background-image", "url(/treasure0.jpeg)");
        $("#win").show();
    }
    else
    {
        $(document).ready(function () {
            $("#r3c2").css("background-image", "url(/dirt0.jpeg)");
        });
    }
});

$("#r3c3").click(function() {
    if (treasureColumn == 3 && treasureRow == 3) {
        $("#r3c3").css("background-image", "url(/treasure0.jpeg)");
        $("#win").show();
    }
    else
    {
        $(document).ready(function () {
            $("#r3c3").css("background-image", "url(/dirt0.jpeg)");
        });
    }
});

$("#r3c4").click(function() {
    if (treasureColumn == 3 && treasureRow == 4) {
        $("#r3c4").css("background-image", "url(/treasure0.jpeg)");
        $("#win").show();
    }
    else
    {
        $(document).ready(function () {
            $("#r3c4").css("background-image", "url(/dirt0.jpeg)");
        });
    }
});

$("#r3c5").click(function() {
    if (treasureColumn == 3 && treasureRow == 5) {
        $("#r3c5").css("background-image", "url(/treasure0.jpeg)");
        $("#win").show();
    }
    else
    {
        $(document).ready(function () {
            $("#r3c5").css("background-image", "url(/dirt0.jpeg)");
        });
    }
});

$("#r4c1").click(function() {
    if (treasureColumn == 4 && treasureRow == 1) {
        $("#r4c1").css("background-image", "url(/treasure0.jpeg)");
        $("#win").show();
    }
    else
    {
        $(document).ready(function () {
            $("#r4c1").css("background-image", "url(/dirt0.jpeg)");
        });
    }
});

$("#r4c2").click(function() {
    if (treasureColumn == 4 && treasureRow == 2) {
        $("#r4c2").css("background-image", "url(/treasure0.jpeg)");
        $("#win").show();
    }
    else
    {
        $(document).ready(function () {
            $("#r4c2").css("background-image", "url(/dirt0.jpeg)");
        });
    }
});

$("#r4c3").click(function() {
    if (treasureColumn == 4 && treasureRow == 3) {
        $("#r4c3").css("background-image", "url(/treasure0.jpeg)");
        $("#win").show();
    }
    else
    {
        $(document).ready(function () {
            $("#r4c3").css("background-image", "url(/dirt0.jpeg)");
        });
    }
});

$("#r4c4").click(function() {
    if (treasureColumn == 4 && treasureRow == 4) {
        $("#r4c4").css("background-image", "url(/treasure0.jpeg)");
        $("#win").show();
    }
    else
    {
        $(document).ready(function () {
            $("#r4c4").css("background-image", "url(/dirt0.jpeg)");
        });
    }
});

$("#r4c5").click(function() {
    if (treasureColumn == 4 && treasureRow == 5) {
        $("#r4c5").css("background-image", "url(/treasure0.jpeg)");
        $("#win").show();
    }
    else
    {
        $(document).ready(function () {
            $("#r4c5").css("background-image", "url(/dirt0.jpeg)");
        });
    }
});

$("#r5c1").click(function() {
    if (treasureColumn == 5 && treasureRow == 1) {
        $("#r5c1").css("background-image", "url(/treasure0.jpeg)");
        $("#win").show();
    }
    else
    {
        $(document).ready(function () {
            $("#r5c1").css("background-image", "url(/dirt0.jpeg)");
        });
    }
});

$("#r5c2").click(function() {
    if (treasureColumn == 5 && treasureRow == 2) {
        $("#r5c2").css("background-image", "url(/treasure0.jpeg)");
        $("#win").show();
    }
    else
    {
        $(document).ready(function () {
            $("#r5c2").css("background-image", "url(/dirt0.jpeg)");
        });
    }
});

$("#r5c3").click(function() {
    if (treasureColumn == 5 && treasureRow == 3) {
        $("#r5c3").css("background-image", "url(/treasure0.jpeg)");
        $("#win").show();
    }
    else
    {
        $(document).ready(function () {
            $("#r5c3").css("background-image", "url(/dirt0.jpeg)");
        });
    }
});

$("#r5c4").click(function() {
    if (treasureColumn == 5 && treasureRow == 4) {
        $("#r5c4").css("background-image", "url(/treasure0.jpeg)");
        $("#win").show();
    }
    else
    {
        $(document).ready(function () {
            $("#r5c4").css("background-image", "url(/dirt0.jpeg)");
        });
    }
});

$("#r5c5").click(function() {
    if (treasureColumn == 5 && treasureRow == 5) {
        $("#r5c5").css("background-image", "url(/treasure0.jpeg)");
        $("#win").show();
    }
    else
    {
        $(document).ready(function () {
            $("#r5c5").css("background-image", "url(/dirt0.jpeg)");
        });
    }
});
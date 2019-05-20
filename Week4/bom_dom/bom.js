// function boo() {
//     console.log("Hello!");
// };

// var myVar = setInterval(boo, 1000);

// setTimeout(function () {
//     clearInterval(myVar);
// }, 8000);



// Window Methods
// Create a function that shows the user a greeting message using alert
// Then a question is presented to the user using prompt
// When the user provides the answer, that answer is used in the confirm dialog
// The format of the message in the dialog should be: "We will submit this answer now! " + the answer
// If the user clicks OK, show alert with success message
// If the user clicks Cancel, don't show anything


function greetings() {
    alert('Welcome');
}
greetings();

var userInput = prompt('Do you feel good today?');

var userChoice = confirm("We will submit this answer now! " + userInput);

function conformation() {
    if (userChoice === true) {
        alert("Success");
    }
}
conformation();










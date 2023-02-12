'use strict';

var inputWelcome = confirm("Do want to skip the welcome message?");

if (inputWelcome == false) {

    var inputName = prompt("Kindly enter your name: ");

    var inputGender = prompt("Kindly specify your gender (Male / Female): ");

    var inputAge = prompt("Kindly enter your age: ");

    if (inputAge <= 0) { var inputAlert = alert("You have provided a wrong age (Less or equal to ZERO)"); }

    var gender = inputGender.toLowerCase();

    switch (gender) {

        case "male": alert("Welcome Mr. " + inputName);
            break;

        case "female": alert("Welcome Ms. " + inputName);
            break;

        default: alert("Welcome " + inputName);

    }
}
var surveyArr = [];
var inputRate = ratePage();
var inputVisit = visitPage();
var inputStyle = stylePage();


function ratePage() {
    inputRate = prompt("Do you like this expirence? (Yes/No)");
    var rate = inputRate.toLowerCase();
    return rate
}
if (inputRate == "") { inputRate = "invalid"; }
surveyArr.push(inputRate);

function visitPage() {
    inputVisit = prompt("Would you visit this page again? (Yes/No)");
    var visit = inputVisit.toLowerCase();
    return visit
}

if (inputVisit == "") { inputVisit = "invalid"; }
surveyArr.push(inputVisit);


function stylePage() {
    inputStyle = prompt("Do you like the styling of the webpage? (Yes/No)");
    var style = inputStyle.toLowerCase();
    return style
}
if (inputStyle == "") { inputStyle = "invalid"; }
surveyArr.push(inputStyle);


for (let i = 0; i < surveyArr.length; i++) {
    console.log(surveyArr[i]);
}










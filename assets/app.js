'use strict';

    var inputWelcome= confirm("Do want to skip the welcome message?");

if (inputWelcome==false){

    var inputName= prompt("Kindly enter your name: ");

    var inputGender= prompt("Kindly specify your gender (Male / Female): ");

    var inputAge= prompt("Kindly enter your age: ");

if (inputAge<=0){ var inputAlert= alert("You have provided a wrong age (Less or equal to ZERO)");}
    
    var gender= inputGender.toLowerCase();
    
    switch (gender){

        case "male": alert("Welcome Mr. "+inputName);
    break;

        case "female": alert("Welcome Ms. "+inputName);
    break;

        default: alert("Welcome "+ inputName);

    }
}
    var surveyArr= [];
   
    var inputRate= prompt("Do you like this expirence? (Yes/No)").toLowerCase();
    if (inputRate == "") {inputRate= "invalid";}
    surveyArr.push(inputRate);
   
    var inputVisit= prompt("Would you visit this page again? (Yes/No)").toLowerCase();
    if (inputVisit == "") {inputVisit= "invalid";}
    surveyArr.push(inputVisit);

    var inputStyle= prompt("Do you like the styling of the webpage? (Yes/No)").toLowerCase();
    if (inputStyle == "") {inputStyle= "invalid";}
    surveyArr.push(inputStyle);

    for (let i = 0; i < surveyArr.length; i++) {
        console.log(surveyArr[i]);}










'use strict';

var inputWelcome= confirm("Do want to skip the welcome message?");

if (inputWelcome==false){

    var inputName= prompt("Kindly enter your name: ");

    var inputGender= prompt("Kindly specify your gender (Male / Female): ");

    var inputAge= prompt("Kindly enter your age: ");

    if (inputAge<=0){ var inputAlert= alert("You have provided a wrong age (Less or equal to ZERO)");}

    switch (inputGender){
        case "Male":
        case "male": alert("Welcome Mr. "+inputName);
    break;

        case "Female":
        case "female": alert("Welcome Ms. "+inputName);
    break;

    default: alert("Welcome "+ inputName);

}
}




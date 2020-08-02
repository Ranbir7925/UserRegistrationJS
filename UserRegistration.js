console.log("Welcome to User Registration.\n");

const prompt = require('prompt-sync')();
const namePattern = new RegExp("^[A-Z][A-Za-z0-9]{2,}$");
const emailPattern = new RegExp("^[0-9a-zA-Z]+[.]*[0-9a-zA-z]*[@][a-zA-Z]+([.][a-zA-Z]+){1,2}$");
const phoneNumberPattern = new RegExp("^[0-9]{2}[ ][0-9]{10}$");
const passwordPattern = new RegExp("((?=.*[0-9])(?=.*[a-z]?)(?=.*[A-Z]).{8,})$");

function checkValidation(input, namePattern)
{
    let flag
    if(namePattern.test(input))
    {
        console.log("Saved\n");
        flag = false;
    }    
    else
    {
        console.log("Invalid Input enter again.\n");
        flag = true;
    }   
    return flag; 
}

while(true)
{
    let firstName = prompt("Enter your First name:  ");
    let check = checkValidation(firstName, namePattern);
    if(check == false)
        break;
}

while(true)
{
    let lastName = prompt("Enter your Last name:  ");
    let check = checkValidation(lastName, namePattern);
    if(check == false)
        break;
}

while(true)
{
    let email = prompt("Enter your email address:  ");
    let check = checkValidation(email, emailPattern);
    if(check == false)
        break;
}

while(true)
{
    let phoneNumber = prompt("Enter your phone number:  ");
    let check = checkValidation(phoneNumber, phoneNumberPattern);
    if(check == false)
        break;
}

while(true)
{
    let password = prompt("Enter your password:  ");
    let check = checkValidation(password, passwordPattern);
    if(check == false)
        break;
}
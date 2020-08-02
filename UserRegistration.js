console.log("Welcome to User Registration.\n");

console.log("Name should start with Capital letter and should have minimum 3 characters.\n")

const prompt = require('prompt-sync')();
const namePattern = new RegExp("^[A-Z][A-Za-z0-9]{2,}$");

function checkValidation(name, namePattern)
{
    let flag
    if(namePattern.test(name))
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
    let check = checkValidation(lastName, namePattern)
    if(check == false)
        break;
}
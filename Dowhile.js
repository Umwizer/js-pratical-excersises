// Write a JavaScript program that prompts the user for a password and keeps asking 
// until they enter the correct one using a do-while loop.
//  Display "Incorrect password. Try again." if the password is wrong and "Access granted." 
// when it is correct. Use the password "secret123" as the correct one

const correctPassword ="secret123"
let userPasword;
 do{
    userPasword = prompt("Enter password:");
    if(userPasword !== correctPassword){
        console.log("Incorrect password. Try again.");
    }

 }
 while(userPasword !== correctPassword);
 console.log("Access granted.");
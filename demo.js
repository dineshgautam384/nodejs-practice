// var fs = require('fs');
// var os = require('os');

// var  _ = require('lodash')

// var user = os.userInfo();
// console.log(user)
// console.log(user.username)


// fs.appendFile('greeting.txt', 'HI ' + user.username + '!\n', ()=>{
//     console.log('File is created');
// });


// var data = ["person", "person", "vehicle", 1, 2, 1, 2, 'name', 'age', '2' ];
// var filter = _.uniq(data);
// console.log(filter)
// console.log(_.isString(2))



const prompt = require('prompt-sync')();

// const age = prompt("Enter your age?\n");
// if(age< 18){
//     console.log("you get a 20% discount")
// }else if(age >= 18 && age < 65){
//     console.log("Normal ticket price applies")
// }else{
//     console.log("You get a 30% senior discount")
// }




const guestList = ["Dinesh", "Ramesh", "Vikas", "Anjali", "Munawar"];


function checkGuestList(name, guestList){
    const lowercaseGuestList = guestList.map(item=>item.toLowerCase());

    const checkName = name.toLowerCase();
    
    if(lowercaseGuestList.includes(checkName)){
        console.log("Welcome to the Party..."+ name + "!");
    }else{
        console.log(name +" Sorry... But You are not invited.")
    }
}

const name = prompt('Enter Your Name: ');

checkGuestList(name, guestList)



/*

Importing the prompt-sync module
const prompt = require('prompt-sync')();

Define the guestList array with at least five guest names
const guestList = ["Alice", "Bob", "Charlie", "David", "Eve"];
const lowercaseGuestList = guestList.map(item=> item.toLowerCase())

// Function to check if a given name is on the guest list
function checkGuestList(name) {
    
    // Convert the name to lowercase for case-insensitive comparison
    const lowerCaseName = name.toLowerCase();

    // Check if the lower case version of the name exists in the guestList array
    if (lowercaseGuestList.includes(lowerCaseName)) {
        console.log(`Welcome to the party, ${name}!`);
    } else {
        console.log("Sorry, you're not on the guest list.");
    }
}

// Get the name from the user
const name = prompt('Enter your name: ');

// Call the function to check if the given name is on the guest list
checkGuestList(name);
*/

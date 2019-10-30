let contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function look_up_profile(name){
    for(let i=0; i < contacts.length; i++){
        if(name === contacts[i].firstName){
            console.log("YAS B");
        }
    }
}

// function lookUpProfile(name){
//     for (let i=1; i < contacts.length; i++){
//         if(name === contacts[i].firstName){
//             return "YAS";
//         } else {
//             return "No such contact";
//         }
//     }
// }

console.log(look_up_profile("Kristian"));
//console.log(contacts.length);
//console.log(lookUpProfile("Harry"));
//console.log(contacts[1].firstName);
//console.log(contacts[0].likes.length);


// Change these values to test your function
//look_up_profile("Akira", "likes")

//ignore for now!
// if(field === contacts[i][field]){
            //     console.log(`${field}`);
            //     return contacts[i][field];
            // } else {
            //     return "No such property";
            // }
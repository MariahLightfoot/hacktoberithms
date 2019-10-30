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
function confirmPropertyPresence(field){
    for(let i=0; i < contacts.length; i++){

        if(field === contacts[i][field]){
            console.log("Found it!");
        } else {
            console.log("No such property");
        }

    }
     
}

function look_up_profile(name, field){

    for(let i=0; i < contacts.length; i++){

        if(name === contacts[i].firstName){
            console.log("Found it!");
        } else {
            console.log("No such contact");
        }

    }

}

// Change these values to test your function
confirmPropertyPresence("likes");
look_up_profile("Akira");
//console.log(contacts[1].likes)
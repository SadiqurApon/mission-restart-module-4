const person = {
    name: "John", 
    fruit : "Apple",
    dish : "Pizza",
    friends : ["Yafi", "Sabbir", "Munna"],
    isRich : false,
    money : 1000,
};
console.log(person , typeof person);

// JSON 
// JS -> JS Object Notation


// JSON.stringigy()
// JSON Parse
const personJSON = JSON.stringify(person);
console.log(personJSON, typeof personJSON);




const perseJSON = JSON.parse(personJSON);
console.log(perseJSON , typeof perseJSON);

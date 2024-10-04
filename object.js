// Object Spreading
const playerInfo = {
    name: "ABD",
    age: 38,
    address: "South Africa",
    profession: "Cricketer",
    jerseyNumber: 17,
    iplTeam: "RCB",
    personalInfo: {
        phone: 8858373382,
        email: "abdevilliers17@gmail.com"
    }  
};

const secondObject = {...playerInfo};
secondObject.isRetired = true;
secondObject.age = 40;

console.log(playerInfo);
console.log(secondObject);


// Object Destructuring
// const playerName = playerInfo.name;
// const playerAge = playerInfo.age;
// const jerseyNumber = playerInfo.jerseyNumber;

// console.log(playerName);
// console.log(playerAge);
// console.log(jerseyNumber);

const {age, jerseyNumber} = playerInfo;

console.log(age);
console.log(jerseyNumber);

// const {personalInfo} = playerInfo;
// console.log(personalInfo);
// const {email} = personalInfo;
// console.log(email);

const {personalInfo: {email}} = playerInfo;
console.log(email);

// Object Accessing: Dot Notation & Bracket Notation
console.log(playerInfo.name);

const x = "jerseyNumber";
console.log(playerInfo["jerseyNumber"]);
console.log(playerInfo[x]);
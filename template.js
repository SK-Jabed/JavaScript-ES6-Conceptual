const playerName = "ABD";
const age = 38;
const type = "Batsman";
const jerseyNumber = 17;

// My favorite cricket player is ABD. His age is 38. He is a Batsman. His jersey number is 17.

const sentence = "My favorite cricket player is "+playerName+". His age is "+age+". He is a "+type+". His jersey number is "+jerseyNumber;

const templateSentence = `My favorite cricket player is ${playerName}. His age is ${age}. He is a ${type}. His jersey number is ${jerseyNumber}`;

console.log(sentence);
console.log(templateSentence);


const playerInfo = {
    playerName: "ABD",
    age: 38,
    address: "South Africa",
    profession: "Cricketer",
    jerseyNumber: 17,
    teams: ["RCB", "RR", "LQ"],
    personalInfo: {
        phone: 8858373382,
        email: "abdevilliers17@gmail.com"
    },  
};

const details = `
My favorite cricket player is ${playerInfo.playerName}. His age is ${playerInfo.age}. He is a ${playerInfo.profession} of ${playerInfo.address} national team. His jersey number is ${playerInfo.jerseyNumber}. His phone number is: ${playerInfo.personalInfo.phone} and e-mail address is: ${playerInfo.personalInfo.email}. He plays for ${playerInfo.teams.map((teamName) => teamName).join(", ")}.
`
console.log(details);
const petOwner = {
    name: "Roman Empire",
    profession: ["Fighter", "Boxer"],
    contact: {
        phone: 6544346882,
        email: "romanempire77@gmail.com"
    },
    pet : {
        type: "Big Dog",
        name: "Shepherd",
        info: {
            color: "Brown",
            weight: "36 KG"
        },
    },
};

console.log(petOwner.contact.phone);
console.log(petOwner.pet.name);
console.log(petOwner.pet.info.weight);

// Optional Chaining => ?.
console.log(petOwner.address);
console.log(petOwner?.address?.houseNo);
console.log(petOwner?.pet?.info?.color);
console.log(petOwner?.profession[1]);
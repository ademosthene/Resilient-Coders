// Object literal; each property is key/value pair
const pen = {
  type: "ballpoint",
  color: "blue",
  brand: "Bic"
};

// Modify pen color property
pen.color = "red";

// Set the pen price property
pen.price = "2.5";

// Modeling a RPG character
const aurora = {
  name: "Aurora",
  health: 150,
  strength: 25,
  xp: 0,

  // This function is one of the object's properties; object-oriented programming
  // Return the character description
  describe() {
    return `${this.name} has ${this.health} health points and ${this.strength} as strength and ${this.xp} XP points`;
  }
};
// Aurora is harmed by an arrow
aurora.health -= 20;
// Aurora equips a strength necklace
aurora.strength += 10;
// Aurora learns a new skill
aurora.xp += 15;

// Return the character description
// Function calls describe with aurora as an argument
// Function is external to the object: procedural programming
function describe(character){
  return `${character.name} has ${character.health} health points and ${character.strength} as strength`;
}

// Modeling a dog
const dog = {
  name: "Fang",
  species: "boarhound",
  size: "75",

  bark() {
    return `Grrr! Grrr!`
  }
};

// Modeling a circle
const r = Number(prompt("Enter the circle radius:"));
const circle = {
  circumference() {
    return 2*Math.PI*r
  },
  area() {
    return Math.PI * (r*r)
  }
};

// Modeling a bank account
const account = {
  name: "Alex",
  balance: "0",
  // Adds value passed as an argument to the account balance
  credit(value) {
    balance += value;
  },
  // Returns the account description
  describe() {
    return `owner: ${account.name}, balance ${account.balance}`
  }
};

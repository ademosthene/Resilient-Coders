// List of all the movies you've seen this year
const movie1 = "The Wolf of Wall Street";
const movie2 = "Zootopia";
const movie3 = "Babysitting";

// OR

const movies = {
  movie1: "The Wolf of Wall Street",
  movie2: "Zootopia",
  movie3: "Babysitting"
}

// An ARRAY is better; data type that can store a set of elements
// Create array of movies list
const movies1 = ["The Wolf of Wall Street", "Zootopia", "Babysitting"];
// You can access a particular element by passing its index within square []
// console.log(movies[0]); "Wolf of Wall Street"
// console.log(movies[1]); "Zootopia"
// console.log(movies[2]); "Babysitting"

// Iterating over an ARRAY
const movi = ["The Wolf of Wall Street", "Zootopia", "Babysitting"];
for (var i = 0; i < movi.length; i++) {
  console.log(movi[i]);
}
// Fat arrow function
const movies2 = ["The Wolf of Wall Street", "Zootopia", "Babysitting"];
movies2.forEach(movie =>{
  console.log(movie);
});
// For-of loop example
const movies3 = ["The Wolf of Wall Street", "Zootopia", "Babysitting"];
for (const movie of movies3){
  console.log(movie);
}

// UPDATING AN ARRAY'S CONTENT
const movies4 = ["The Wolf of Wall Street", "Zootopia", "Babysitting"];
movies4.push("Ghostbusters");
console

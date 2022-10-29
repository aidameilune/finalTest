/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }
  wasExpensive() {
    return this.budget > 100000000;
  }
  test() {
    console.log("Title: ", this.title);
    console.log("director: ", this.director);
    console.log("budget: ", this.budget);
    console.log("Was expensive", this.wasExpensive());
  }
}

//creating an instance
let movieObj = new Movie("Fast and Furious", "Tarantino", 5000000);
movieObj.test();

console.log(movieObj);

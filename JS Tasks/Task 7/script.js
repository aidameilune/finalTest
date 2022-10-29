/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: "audi",
  model: "A6",
  year: 2005,
  color: "white"
};
//jei funkcija

function showObjectKeys() {
  let keys = [];

  for (let key in audi) {
    keys.push(key);
  }
  return keys;
}

//jei metodas

console.log(Object.keys(audi));

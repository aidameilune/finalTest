/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
document.getElementById("output").style.visibility = "hidden";

function converter() {
  let kg = document.getElementById("search").value;
  if (!kg) {
    alert("Enter the value!");
  } else {
    event.preventDefault();
    document.getElementById("output").style.visibility = "visible";

    document.getElementById("poundsOutput").innerHTML = kg * 2.2046;
    document.getElementById("gOutput").innerHTML = kg / 0.001;
    document.getElementById("ozOutput").innerHTML = kg * 35.274;
  }
}

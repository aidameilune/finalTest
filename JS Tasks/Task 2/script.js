/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
let button = document.getElementById("btn__element");
let count = 0;
let disp = document.getElementById("btn__state");

button.onclick = function () {
  count++;
  disp.innerHTML = count;
};

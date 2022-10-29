/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";
fetch(ENDPOINT)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

let carBrand = document.getElementById("brand");

function showData(data) {
  for (let i = 0; i < data.length; i++) {
    carBrand.innerHTML +=
      "Brand" + data[i].brand + "<br>" + "Model:" + data[i].models + "<br>";
    console.log(carBrand);
  }
}
document.createElement("div");
document.querySelector(".output").append("div");

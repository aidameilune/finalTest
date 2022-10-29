/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";
async function getapi() {
  // Storing response
  const response = await fetch("https://api.github.com/users");

  // Storing data in form of JSON
  let data = await response.json();
  console.log(data);

  show(data);
}

// Function to define innerHTML for HTML table
function show(data) {
  let tab = `<tr>
            <th>login</th>
            <th>avatar_url</th>
            </tr>`;

  for (let i = 0; i < data.length; i++) {
    let obj = data[i];

    tab += `<tr> 
      <td>${obj.login}</td>
      <td> <img src="${obj.avatar_url}" alt="User picture"</td>          
      </tr>`;
  }

  document.getElementById("users").innerHTML = tab;
  let output = document.getElementById("message");
  message.style.display = "none";
}

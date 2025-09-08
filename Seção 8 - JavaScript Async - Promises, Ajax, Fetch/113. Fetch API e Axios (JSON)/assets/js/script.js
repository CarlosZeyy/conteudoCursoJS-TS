// fetch("pessoas.json")
//   .then((response) => response.json())
//   .then((json) => loadElementPage(json))
//   .catch((e) => console.error(e));

axios("pessoas.json")
  .then((response) => loadElementPage(response.data))
  .catch((e) => console.error(e));

function loadElementPage(json) {
  const table = document.createElement("table");

  for (let person of json) {
    const tr = document.createElement("tr");

    let tdName = document.createElement("td");
    let tdAge = document.createElement("td");
    let tdSalary = document.createElement("td");

    tdName.innerHTML = person.nome;
    tr.appendChild(tdName);

    tdAge.innerHTML = person.idade;
    tr.appendChild(tdAge);

    tdSalary.innerHTML = person.salario;
    tr.appendChild(tdSalary);

    table.appendChild(tr);
  }

  const result = document.querySelector(".result");

  result.appendChild(table);
}

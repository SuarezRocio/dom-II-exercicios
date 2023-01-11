//Exercicio 1
const container = document.getElementById("container");
const adicionaItem = (event) => {
  const novoItem = document.createElement("article");
  novoItem.innerHTML = "Funcionou";
  container.appendChild(novoItem);
}

//Exercicio 2
container = document.getElementById("container");
adicionaItem = (event) => {
  const novoItem = document.createElement("article");
  novoItem.setAttribute("class", "Item");
  novoItem.setAttribute("onclick", "removeItem(event)");
  container.appendChild(novoItem);
}

//Exercicio 3
function novoElement() {
  let novaTag = document.createElement("article");
  novaTag.classList.add("Item");

  novaTag.setAttribute("onclick", "removeItem(event)");

  let textoTag = document.createTextNode("Nova cadena");
  novaTag.appendChild(textoTag);
  container.appendChild(novaTag);
}

const removeItem = (event) => {
  event.target.remove();
}
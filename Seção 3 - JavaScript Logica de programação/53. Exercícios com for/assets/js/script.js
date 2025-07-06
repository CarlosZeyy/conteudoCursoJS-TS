const elements = [
  { tag: "p", text: "Frase 1" },
  { tag: "div", text: "Frase 2" },
  { tag: "footer", text: "Frase 3" },
  { tag: "section", text: "Frase 4" },
];

const container = document.querySelector(".container");
const div = document.createElement("div");

for (let i = 0; i < elements.length; i++) {
  let { tag, text } = elements[i];
  const createTag = document.createElement(tag);
  const createText = document.createTextNode(text);
  div.appendChild(createTag);
  createTag.appendChild(createText);
}

//* Outra meneira de resolver:
// for (let i = 0; i < elements.length; i++) {
//   let { tag, text } = elements[i];
//   const createTag = document.createElement(tag);
//   div.appendChild(createTag);
//   createTag.innerHTML = text;
// }

container.appendChild(div);

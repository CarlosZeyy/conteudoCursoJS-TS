const path = require("path");
const filePath = path.resolve(__dirname, "teste.json");
const read = require("./modules/read.js");
const writeFile = require("./modules/write.js");

const persons = [
  { name: "Carlos" },
  { name: "Urian" },
  { name: "Leonardo" },
  { name: "Pablo" },
  { name: "Isaac" },
];

const json = JSON.stringify(persons, filePath, 2);
console.log(json);
writeFile(filePath, json);

async function readFile(path) {
    const data = await read(path);
    renderData(data);
}

async function renderData(data) {
    data = JSON.parse(data);
    data.forEach(d => console.log(d));
}

readFile(filePath);
const paragraphs = document.querySelector(".paragrafos");
const ps = document.querySelectorAll("p");

const bgStyle = getComputedStyle(document.body);
const colorBody = bgStyle.backgroundColor;

for (let p of ps) {
  p.style.backgroundColor = colorBody;
  p.style.color = "#fff";
}
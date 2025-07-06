function ePaisagem(width, height) {
  if (width > height) {
    return true;
  } else {
    return false;
  }
}
console.log(ePaisagem(480, 720));

const ePaisagem2 = (width, height) => width > height;

console.log(ePaisagem2(1280, 720));

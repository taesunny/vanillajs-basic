const body = document.querySelector("body");

const IMG_NUMBER = 3;

function handleImgLoad(){

}

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER); // 0~2
  return number;
}
function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();

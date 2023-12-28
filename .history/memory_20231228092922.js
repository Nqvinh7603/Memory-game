const cardsArray = [
  {
    name: "fire",
    img: "img/fire.png",
  },
  {
    name: "youtube",
    img: "img/youtube.png",
  },
  {
    name: "flash",
    img: "img/flash.png",
  },
  {
    name: "gift",
    img: "img/gift.png",
  },
  {
    name: "tron",
    img: "img/tron.png",
  },
  {
    name: "ufo",
    img: "img/ufo.png",
  },
  {
    name: "plant",
    img: "img/plant.png",
  },
  {
    name: "burger",
    img: "img/burger.png",
  },
];
let count = 0;
let preCard;
let firstGuess = "";

const grid = document.querySelector(".grid");
const cardsArrayMerge = cardsArray
  .concat(cardsArray)
  .sort(() => 0.5 - Math.random());
cardsArrayMerge.forEach((item) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("data-name", item.name);
  back.style.backgroundImage = `url(${item.img})`;
  grid.appendChild(card);
});
function matchingCard() {
  const selected = document.querySelectorAll(".selected");
  [...selects].forEach(item) => 
}
grid.addEventListener("click", function (event) {
  const clicked = event.target;
  if (clicked.nodeName == "SECTION" || preCard == clicked) {
    return;
  }
  if (count < 2) {
    count++;
    if (count == 1) {
      firstGuess = clicked.dataset.name;
      clicked.classList.add("selected");
    } else {
      secondGuess = clicked.dataset.name;
      clicked.classList.add("selected");
    }
    if (firstGuess != "" && secondGuess != "") {
      if (firstGuess == secondGuess) {
        // function handle
      }
    }
  }
  preCard = clicked;
});

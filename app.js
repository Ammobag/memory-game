document.addEventListener("DOMContentLoaded", () => {
  const cards = [
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
  ];

  cards.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const score = document.querySelector("#result");
  var cardChosen = [];
  var cardChosenId = [];
  var cardsWon = [];

  //create board
  function board() {
    for (let i = 0; i < cards.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipcard);
      grid.appendChild(card);
    }
  }
  board();

  //flip card
  function flipcard() {
    cardChosen.push(this.getAttribute("name"));
    cardChosenId.push(this.getAttribute("data-id"));
    this.setAttribute("src", cards[this.getAttribute("data-id")].img);
    if (cardChosen.length === 2) {
      setTimeout(match, 500);
    }
  }

  //match
  function match() {
    var cardsDOM = document.querySelectorAll("img");
    var a = cardChosenId[0];
    var b = cardChosenId[1];
    if (a == b) {
      cardsDOM[a].setAttribute("src", "images/blank.png");
      cardsDOM[b].setAttribute("src", "images/blank.png");
      alert("You have chosen the same card!");
    } else if (cards[a].name === cards[b].name) {
      cardsDOM[a].setAttribute("src", "images/white.png");
      cardsDOM[b].setAttribute("src", "images/white.png");
      cardsDOM[a].removeEventListener("click", flipcard);
      cardsDOM[b].removeEventListener("click", flipcard);
      cardsWon.push(cards[a].name);
      alert("Score!");
    } else {
      cardsDOM[a].setAttribute("src", "images/blank.png");
      cardsDOM[b].setAttribute("src", "images/blank.png");
      alert("Try again.");
    }
    cardChosen = [];
    cardChosenId = [];
    score.textContent = cardsWon.length;
    if (cardsWon.length === cards.length / 2)
      score.textContent = "Congratz u found them all!";
  }
});

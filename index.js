var symbols = ["A","A","B","B","C","C","D","D"];

var first = null;
var second = null;
var lock = false;

// Shuffle symbols
symbols.sort(function() {
  return Math.random() - 0.5;
});

var board = document.querySelector("#board");

// Create cards
for (var i = 0; i < symbols.length; i++) {

  var card = document.createElement("div");
  card.className = "card";
  card.innerHTML = "?";
  card.value = symbols[i];

  // 🔥 Only change here
  card.addEventListener("click", function() {

    if (lock) return;
    if (this === first) return;

    this.innerHTML = this.value;
    this.classList.add("open");

    if (first == null) {
      first = this;
    } else {
      second = this;
      lock = true;

      // Check match
      if (first.value == second.value) {

        first = null;
        second = null;
        lock = false;

      } else {

        setTimeout(function() {

          first.innerHTML = "?";
          second.innerHTML = "?";

          first.classList.remove("open");
          second.classList.remove("open");

          first = null;
          second = null;
          lock = false;

        }, 800);

      }
    }
  });

  board.appendChild(card);
}
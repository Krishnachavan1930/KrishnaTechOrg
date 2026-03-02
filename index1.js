var symbols = ["A","A","B","B","C","C","D","D"];

// Shuffle cards
symbols.sort(() => Math.random() - 0.5);

var first = null;
var board = document.getElementById("board");

// Create cards
symbols.forEach(function(value){

  var card = document.createElement("div");
  card.innerText = "?";

  card.onclick = function(){

    // Show value
    card.innerText = value;

    // First click
    if(first == null){
      first = card;
    }
    else{

      // Check match
      if(first.innerText == card.innerText){
        alert("Match!");
      }
      else{
        alert("Not Match!");

        first.innerText = "?";
        card.innerText = "?";
      }

      // Reset
      first = null;
    }
  };

  board.appendChild(card);
});
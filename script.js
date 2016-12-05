'use strict';

window.userNumber = null;
window.operation = null;

let $card = $('.card');


  function flashCardSolve(){
    if(userNumber!==null) {
      console.log("clicked");
      $card.css('background-color', 'lightgreen');
      console.log("red");
      $card.append(solveEquation());
      console.log("appended");

      //$card.click(flashCardReset);
      console.log("reset");
    }
  }

  function flashCardReset() {
    $card.css('background-color', 'yellow');
    console.log("white");
    $card.html("");
    console.log("card cleared");
    userNumber = null;
    operation = null;
    console.log("number and operation cleared");
    randomNumber = Math.floor((Math.random() * 9) + 1);
    console.log("random number generated");
    //$card.click(flashCardSolve);
  }

  function solveEquation() {
    return eval(randomNumber + operation + userNumber);
  }

  function displayEquation() {
    let displayOperation = '';
    switch(operation) {
      case '*':
        displayOperation = '&times;';
        break;
      case '/':
        displayOperation = '&divide;';
        break;
      default:
        displayOperation = operation;
    }
    $card.append(randomNumber + ' ' + displayOperation + ' ' + userNumber + ' = ');
  }

let randomNumber = Math.floor((Math.random() * 9) + 1);
console.log(randomNumber);

$('.operations .dropdown-item').click(function(event) {
  operation = $(this).attr("name");
  console.log(operation);
  console.log(userNumber);
  displayEquation();
});

$('.numbers .dropdown-item').click(function(event) {
  userNumber = $(this).text();
  console.log(userNumber);
});

$("#solve").click(flashCardSolve);
  $card.css('background-color', 'lightgreen');
$("#nextCard").click(function(){
randomNumber = Math.floor((Math.random() * 9) + 1);
  $card.html("");
  $card.css('background-color', 'yellow');

  displayEquation();
  console.log("next card");
});
$("#reset").click(flashCardReset);
  $card.css('background-color', 'yellow');

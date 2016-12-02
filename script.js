'use strict';

let userNumber = null;
let operation = null;

let $card = $('.card');


  function flashCardSolve(){
    if(userNumber) {
      console.log("clicked");
      $card.css('background-color', 'red');
      $card.append(solveEquation());
      $card.click(flashCardReset);
    }
  }

  function flashCardReset() {
    $card.css('background-color', 'white');
    $card.html("");
    userNumber = null;
    operation = null;
    randomNumber = Math.floor((Math.random() * 9) + 1);
    $card.click(flashCardSolve);
  }

  function solveEquation() {
    return eval(randomNumber + operation + userNumber);
  }

  function displayEquation() {
    $card.append(randomNumber + ' ' + operation + ' ' + userNumber + ' = ');
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

$card.click(flashCardSolve);

$(document).ready(function() {
  
  
var randomNum = (Math.round(Math.random() * 10));
  
  
  
function checkGuess(guess) {
    if (guess == randomNum) {
    alert("Good job buddy!" );
    }
    else {
    alert( "Nope!");
    }
}

$('.guessingForm').submit(function(event) {
    event.preventDefault();
    var guess = $('#js-user-guess').val();
    $('#js-user-guess').val('');
    checkGuess(guess);
  });  
// document.ready end    
});

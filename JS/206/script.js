//206
//1
/*
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var circle = function (x, y, radius, fillCircle) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
        ctx.fill();
    } else {
        ctx.stroke();
    }
};

var drawSnowman = function(x, y){
    ctx.fillStyle = "Black";
    ctx.lineWIdth = 4;

    circle(x+50, y+110, 40, false);
    circle(x+50, y+40, 30, false);
    circle(x+40, y+35, 5, true);
    circle(x+60, y+35, 5, true);
    circle(x+50, y+90, 5, true);
    circle(x+50, y+110, 5, true);
    circle(x+50, y+130, 5, true);

    ctx.fillStyle = "Orange";
    circle(x + 50, y + 45, 5, true);
};
drawSnowman(960, 0);
*/

//2
/*
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var drawpoints = function(points){
    ctx.beginPath();
    ctx.moveTo(points[0][0], points[0][1]);
    for (var i = 1; i < points.length; i++){
        ctx.lineTo(points[i][0], points[i][1]);
    }
    ctx.stroke();
};

var mysterypoints = [[50, 50],[50, 100],[25, 120],[100, 50],[70, 90],[100, 90],[70, 120]];
drawpoints(mysterypoints);
*/

//3
/*
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var circle = function (x, y, radius, fillCircle) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
        ctx.fill();
    } else {
        ctx.stroke();
    }
};

$('canvas').mousemove(function(event) {
    circle(event.offsetX, event.offsetY, 3, true);
});
*/

//4
/*
var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    var pickWord = function () {
      var words = [
      "программа",
      "макака",
      "муха",
      "арбуз"
    ];

      return words[Math.floor(Math.random() * words.length)];
    };

    var setupAnswerArray = function (word) {
      var answerArray = [];
      for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
      }

      return answerArray;
    };

    var showPlayerProgress = function (answerArray) {
      alert(answerArray.join(" "));
    };

    var getGuess = function () {
      return prompt("Угадайте букву, или нажмите Отмена для выхода из игры.");
    };

    var updateGameState = function (guess, word, answerArray) {
      var appearances = 0;
      for (var j = 0; j < word.length; j++) {
        if (word[j] === guess) {
          answerArray[j] = guess;
          appearances++;
        }
      }

      return appearances;
    };

    var showAnswerAndCongratulatePlayer = function (answerArray) {
      showPlayerProgress(answerArray);
      alert("Отлично! Было загадано слово " + answerArray.join(""));
    };

    var drawSegment = function (incorrectGuesses) {
      ctx.lineWidth = 4;

      if (incorrectGuesses === 0) {
        ctx.strokeRect(20, 20, 20, 20);
      } else if (incorrectGuesses === 1) {
        ctx.beginPath();
        ctx.moveTo(30, 40);
        ctx.lineTo(30, 80);
        ctx.stroke();
      } else if (incorrectGuesses === 2) {
        ctx.beginPath();
        ctx.moveTo(30, 80);
        ctx.lineTo(10, 110);
        ctx.stroke();
      } else if (incorrectGuesses === 3) {
        ctx.beginPath();
        ctx.moveTo(30, 80);
        ctx.lineTo(50, 110);
        ctx.stroke();
      } else if (incorrectGuesses === 4) {
        ctx.beginPath();
        ctx.moveTo(30, 60);
        ctx.lineTo(10, 50);
        ctx.stroke();
      } else if (incorrectGuesses === 5) {
        ctx.beginPath();
        ctx.moveTo(30, 60);
        ctx.lineTo(50, 50);
        ctx.stroke();
      }
    };
    var word = pickWord();
    var answerArray = setupAnswerArray(word);
    var remainingLetters = word.length;
    var incorrectGuesses = 0;

    while (remainingLetters > 0) {
      showPlayerProgress(answerArray);
      var guess = getGuess();
      if (guess === null) {
        break;
      } else if (guess.length !== 1) {
        alert("Пожалуйста, введите одиночную букву.");
      } else {
        var correctGuesses = updateGameState(guess, word, answerArray);

        remainingLetters -= correctGuesses;

        if (correctGuesses === 0) {
          drawSegment(incorrectGuesses);
          incorrectGuesses++;
        }
      }
    }
    showAnswerAndCongratulatePlayer(answerArray);
    */

    
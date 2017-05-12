/**
 * Created by denisemayele on 07/05/2017.
 */


// window.onload = function () {
//
//     var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
//         'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
//         't', 'u', 'v', 'w', 'x', 'y', 'z'];
// }

//alphabet.onkeypress = function(){};
// object.addEventListener("keypress", alphabet);


function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}


//variables.
//var rand = 0;
// var categories;
// var chosenCategory;
// var getHint ;

//var rand = 0;
// var guess ;
// var guesses = [ ];

// var counter ;
// var space;


// var lives ;

// var showLives = document.getElementById("mylives");
// var showCategory = document.getElementById("category1");
// var showCategory = document.getElementById("category2");
// var getHint = document.getElementById("hint");
// var showClue = document.getElementById("clue");





// var sStyle = ["Overalls", "Neon Windbreakers", "Vertically striped shirt", "One pant leg Rolled up", "Raiders Snapbacks", "Mood Ring", "Rollerblades", "Bandanas", "Baggys jeans", "FUBU", "Spiked hair", "Bike caps", "Hoop earings", "L.A Lites","Tatoo Necklace","Air Jordans","Slap Bracelet"];
// var sMovies = ["Dumb and Dumber", "Jurassic Park", "Forrest Gump","Pulp Fiction","Titanic","Cruel Intentions","Space Jam","Toy Story","Jumanji","Matrix","Aladin","The Lion King","Blade","Romeo & Juliet","Fight club","Mrs Doubfire","Home Alone","The Shawshank Redemption","Boyz N the Hood","Heat","Reservoir Dog"];
// var music = [ "Outkast","Destiny's Child","Spice Girls","Hanson","NSYNC","2B3","Green Day","Backstreet Boys","BoyZ II Men","No Doubt","Daft Punk","TLC","Fugees","Alliage","Boyzone","Liberty X","Ace of Base","Atomic kitten","Linkin Park","Take That","Worlds Apart"];
// var game = ["Marbles","Tamagotchi","Pogs","Barbie","Sky Dancers","Gameboy Nintendo","Polly Pocket","Sega Game Gear","Troll Doll","Tickle Me Elmo","Ninja turtles","Street Sharks","Furby","Skip it","Power rangers","Green Day","Green Day","Green Day"];




function sp(){
    document.getElementById('introPage').style.display = "none";
    document.getElementById('multiPage').style.display = "none";
    document.getElementById('singlePage').style.display = "block";
}

function mp(){
    document.getElementById('introPage').style.display = "none";
    document.getElementById('singlePage').style.display = "none";
    document.getElementById('multiPage').style.display = "block";
}

function sStyle(){
    rand = Math.floor(Math.random()*sStyle.length);
    word = sStyle[rand];
    document.getElementById('singlePage').style.display = "none";
    document.getElementById('categoryName').innerHTML = "Clothes's Style";
    hangman();
}

function sMovies(){
    rand = Math.floor(Math.random()*sMovies.length);
    word = sMovies[rand];
    document.getElementById('singlePage').style.display = "none";
    document.getElementById('categoryName').innerHTML = "Movies";
    hangman();
}

function music(){
    rand = Math.floor(Math.random()*music.length);
    word = music[rand];
    document.getElementById('singlePage').style.display = "none";
    document.getElementById('categoryName').innerHTML = "Band Name";
    hangman();
}

function game(){
    rand = Math.floor(Math.random()*game.length);
    word = game[rand];
    document.getElementById('singlePage').style.display = "none";
    document.getElementById('categoryName').innerHTML = "Do You Remember?";
    hangman();
};

var word ;
var word = "";
var lettersGuessed = "";
var guessesLeft;
var correct;
var wordLength;
var wordSubstring;
var wins = 0;
var losses = 0;

var wordList = ["Overalls", "Neon Windbreakers", "Vertically striped shirt", "One pant leg Rolled up", "Raiders Snapbacks", "Mood Ring",
    "Dumb and Dumber", "Jurassic Park", "Forrest Gump","Pulp Fiction","Titanic","Cruel Intentions","Space Jam","Toy Story",
    "Outkast","Destiny's Child","Spice Girls","Hanson","NSYNC","2B3","Green Day","Backstreet Boys","BoyZ II Men","No Doubt","Daft Punk","TLC", "Fugees",
    "Marbles","Tamagotchi","Pogs","Barbie","Sky Dancers","Gameboy Nintendo","Polly Pocket","Sega Game Gear","Troll Doll","Tickle Me Elmo",];


var audio = new Audio('assets/images/mcbomfunk-background-music.mp3');




// Function to start a new game and split the word.
function newGame() {
    placeholder = "";
    guessesLeft = 10;
    lettersGuessed = "";
    audio.play();
    word = wordList[Math.floor(Math.random() * wordList.length)];
    splitWord = word.split("");
    currentWord = 0;

    // word = wordList[currentWord];
    wordLength = word.length;
    wordSubstring = word.substring;

    //Adding underscores for every character in the phrase.
    for (var i = 0; i<splitWord.length; i++) {
        placeholder = placeholder + "_";
    }

    document.getElementById("placeholder").innerHTML = placeholder;
    document.getElementById("gameStatus").innerHTML = "Push any key to play.";
}


// Function to transfer keypress to userguess.
document.onkeypress = function(event) {
    var correct = 0;
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    console.log(word);

    var keyPressed = keyPressed || window.event,
        charCode = keyPressed.keyCode || keyPressed.which,
        lettersGuessed = String.fromCharCode(charCode);

    document.getElementById("lettersGuessed").innerHTML += lettersGuessed;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;

    for (var i = 0;i<splitWord.length;i++) {
        //If correct.
        if (userGuess == word.substring(i, i + 1)) {
            correct++;
            placeholder = placeholder.substring(0, i) + userGuess + placeholder.substring(i +1, placeholder.length +1);
            document.getElementById("placeholder").innerHTML = placeholder;
        }
    }

    if (correct === 0) {
        guessesLeft--;
    }

    if (placeholder.indexOf("_") == -1) {
        //alert("You Win!");
        wins++;
        var userWins = wins;
        document.querySelector("#wins").innerHTML = userWins;

        var correctGuess = " ";
        document.querySelector("#lettersGuessed").innerHTML = correctGuess;
        newGame();
    }

    if (guessesLeft === -1) {
        //alert("You Lose!");
        losses++;
        var userLoses = losses;
        document.querySelector("#losses").innerHTML = userLoses;

        var missedGuess = " ";
        document.querySelector("#lettersGuessed").innerHTML = missedGuess;
        alert("The word was " + word);
        newGame();
    }
}



// //var buttons = function () {
// //    myButtons = document.getElementById('buttons');
// //    letters = document.createElement('ul');
// // }
//
//
//
//   /// OnClick Function
// //check = function () {
//   //  list.onclick = function () {
// //     this.setAttribute("class", "active");
//   //      this.onclick = null;
//     //    for (var i = 0; i < word.length; i++) {
//       //      if (word[i] === guess) {
//       //          guesses[i].innerHTML = guess;
//                 counter += 1;
//             }
//         }
//         var j = (word.indexOf(guess));
//         if (j === -1) {
//             lives -= 1;
//             comments();
//             animate();
//         } else {
//             comments();
//         }
//     };
// };
//
// //
// //     // Create alphabet ul
// // for (var i = 0; i < alphabet.length; i++) {
// //     letters.id = 'alphabet';
// //     list = document.createElement('li');
// //     list.id = 'letter';
// //     list.innerHTML = alphabet[i];
// //     check();
// //     myButtons.appendChild(letters);
// //     letters.appendChild(list);
// // }
// //       };
// //
// //
// //     // Select Category
// // var selectCat = function () {
// //      if (chosenCategory === categories[0]) {
// //             categoryName.innerHTML = "The Chosen Category Is Clothes";
// //      } else if (chosenCategory === categories[1]) {
// //             categoryName.innerHTML = "The Chosen Category Is Movie";
// //      } else if (chosenCategory === categories[2]) {
// //             categoryName.innerHTML = "The Chosen Category Is Music";
// //      } else if (chosenCategory === categories[3]) {
// //             categoryName.innerHTML = "The Chosen Category Is Game";
// //     }
// //  };
//
//
//
// // Play
// play = function () {
//     categories = [
//         ["Overalls", "Neon Windbreakers", "Vertically striped shirt", "One pant leg Rolled up", "Raiders Snapbacks", "Mood Ring", "Rollerblades", "Bandanas", "Baggys jeans", "FUBU", "Spiked hair", "Bike caps", "Hoop earings", "L.A Lites","Tatoo Necklace","Air Jordans","Slap Bracelet"],
//         ["Dumb and Dumber", "Jurassic Park", "Forrest Gump","Pulp Fiction","Titanic","Cruel Intentions","Space Jam","Toy Story","Jumanji","Matrix","Aladin","The Lion King","Blade","Romeo & Juliet","Fight club","Mrs Doubfire","Home Alone","The Shawshank Redemption","Boyz N the Hood","Heat","Reservoir Dog"],
//         ["Outkast","Destiny's Child","Spice Girls","Hanson","NSYNC","2B3","Green Day","Backstreet Boys","BoyZ II Men","No Doubt","Daft Punk","TLC","Fugees","Alliage","Boyzone","Liberty X","Ace of Base","Atomic kitten","Linkin Park","Take That","Worlds Apart"],
//         ["Marbles","Tamagotchi","Pogs","Barbie","Sky Dancers","Gameboy Nintendo","Polly Pocket","Sega Game Gear","Troll Doll","Tickle Me Elmo","Ninja turtles","Street Sharks","Furby","Skip it","Power rangers"]
//     ]};



//
//     chosenCategory = categories[Math.floor(Math.random() * categories.length)];
//     word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
//     word = word.replace(/\s/g, "-");
//     console.log(word);
//     buttons();
//
//     guesses = [ ];
//     lives = 10;
//     counter = 0;
//     space = 0;
//     result();
//     comments();
//     selectCat();
//     //canvas();
//     }
//
//     play();
//
//
//
//
//
// // Reset
//
// /*document.getElementById('reset').onclick = function() {
//     correct.parentNode.removeChild(correct);
//     letters.parentNode.removeChild(letters);
//     showClue.innerHTML = "";
//     context.clearRect();
//     play();
// };
// };

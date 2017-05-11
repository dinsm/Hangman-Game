/**
 * Created by denisemayele on 07/05/2017.
 */
window.onload = function () {

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
}

//alphabet.onkeypress = function(){};
// object.addEventListener("keypress", alphabet);


function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

//var rand = 0;

//var numWrong = 0;
//var numRight = 0;
var categories;         // Array of topics
var chosenCategory;     // Selected category
var getHint ;          // Word getHint
var word ;              // Selected word
//var word = "";
//var rand = 0;
var guess ;             // Guess
var guesses = [ ];      // Stored guesses
var lives ;             // Lives
var counter ;           // Count correct geusses
var space;              // Number of spaces in word '-'

var showLives = document.getElementById("mylives");
var showCategory = document.getElementById("category1");
var showCategory = document.getElementById("category2");
var getHint = document.getElementById("hint");
var showClue = document.getElementById("clue");


var sStyle = ["Overalls", "Neon Windbreakers", "Vertically striped shirt", "One pant leg Rolled up", "Raiders Snapbacks", "Mood Ring", "Rollerblades", "Bandanas", "Baggys jeans", "FUBU", "Spiked hair", "Bike caps", "Hoop earings", "L.A Lites","Tatoo Necklace","Air Jordans","Slap Bracelet"];
var sMovies = ["Dumb and Dumber", "Jurassic Park", "Forrest Gump","Pulp Fiction","Titanic","Cruel Intentions","Space Jam","Toy Story","Jumanji","Matrix","Aladin","The Lion King","Blade","Romeo & Juliet","Fight club","Mrs Doubfire","Home Alone","The Shawshank Redemption","Boyz N the Hood","Heat","Reservoir Dog"];
var music = [ "Outkast","Destiny's Child","Spice Girls","Hanson","NSYNC","2B3","Green Day","Backstreet Boys","BoyZ II Men","No Doubt","Daft Punk","TLC","Fugees","Alliage","Boyzone","Liberty X","Ace of Base","Atomic kitten","Linkin Park","Take That","Worlds Apart"];
var game = ["Marbles","Tamagotchi","Pogs","Barbie","Sky Dancers","Gameboy Nintendo","Polly Pocket","Sega Game Gear","Troll Doll","Tickle Me Elmo","Ninja turtles","Street Sharks","Furby","Skip it","Power rangers","Green Day","Green Day","Green Day"];



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
}

var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');
}

/*
    // OnClick Function
check = function () {
    list.onclick = function () {
        var guess = (this.innerHTML);
        this.setAttribute("class", "active");
        this.onclick = null;
        for (var i = 0; i < word.length; i++) {
            if (word[i] === guess) {
                guesses[i].innerHTML = guess;
                counter += 1;
            }
        }
        var j = (word.indexOf(guess));
        if (j === -1) {
            lives -= 1;
            comments();
            animate();
        } else {
            comments();
        }
    };
};*/

/*

    // Create alphabet ul
for (var i = 0; i < alphabet.length; i++) {
    letters.id = 'alphabet';
    list = document.createElement('li');
    list.id = 'letter';
    list.innerHTML = alphabet[i];
    check();
    myButtons.appendChild(letters);
    letters.appendChild(list);
}
      };


    // Select Category
var selectCat = function () {
     if (chosenCategory === categories[0]) {
            categoryName.innerHTML = "The Chosen Category Is Clothes";
     } else if (chosenCategory === categories[1]) {
            categoryName.innerHTML = "The Chosen Category Is Movie";
     } else if (chosenCategory === categories[2]) {
            categoryName.innerHTML = "The Chosen Category Is Music";
     } else if (chosenCategory === categories[3]) {
            categoryName.innerHTML = "The Chosen Category Is Game";
    }
 };
*/


// Play
play = function () {
    categories = [
        ["Overalls", "Neon Windbreakers", "Vertically striped shirt", "One pant leg Rolled up", "Raiders Snapbacks", "Mood Ring", "Rollerblades", "Bandanas", "Baggys jeans", "FUBU", "Spiked hair", "Bike caps", "Hoop earings", "L.A Lites","Tatoo Necklace","Air Jordans","Slap Bracelet"],
        ["Dumb and Dumber", "Jurassic Park", "Forrest Gump","Pulp Fiction","Titanic","Cruel Intentions","Space Jam","Toy Story","Jumanji","Matrix","Aladin","The Lion King","Blade","Romeo & Juliet","Fight club","Mrs Doubfire","Home Alone","The Shawshank Redemption","Boyz N the Hood","Heat","Reservoir Dog"],
        ["Outkast","Destiny's Child","Spice Girls","Hanson","NSYNC","2B3","Green Day","Backstreet Boys","BoyZ II Men","No Doubt","Daft Punk","TLC","Fugees","Alliage","Boyzone","Liberty X","Ace of Base","Atomic kitten","Linkin Park","Take That","Worlds Apart"],
        ["Marbles","Tamagotchi","Pogs","Barbie","Sky Dancers","Gameboy Nintendo","Polly Pocket","Sega Game Gear","Troll Doll","Tickle Me Elmo","Ninja turtles","Street Sharks","Furby","Skip it","Power rangers"]
    ];

   /* chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    guesses = [ ];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();
    //canvas();
    }

    play();




// Show lives
comments = function () {
        showLives.innerHTML = "You have " + lives + " lives";
        if (lives < 1) {
            showLives.innerHTML = "Game Over";
        }
        for (var i = 0; i < guesses.length; i++) {
            if (counter + space === guesses.length) {
                showLives.innerHTML = "You Win!";
            }
       }
  };*/



// Reset

/*document.getElementById('reset').onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    showClue.innerHTML = "";
    context.clearRect();
    play();
};
};*/

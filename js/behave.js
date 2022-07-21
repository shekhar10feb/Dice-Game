(function(){
    // Getting name from the user
    let name = prompt(`What is your name?`);

    let firstLetter = name[0].toUpperCase();
    let allLetters  = name.slice(1).toLowerCase();
    let letters     = firstLetter + allLetters;

    let button = document.querySelector(".button");
    let playerName = document.querySelector(".player1");

    if(letters === '' || letters === null || letters === 'undefined'){
        alert("Please enter your name!");
        window.location.reload();    
        
    } else {
        playerName.innerHTML = letters;
    }

    button.addEventListener("click", function(){
        // For first dice 
        let randomNumber1 = Math.floor(Math.random() * 6) + 1;
        let randomDiceImage1 = "dice" + randomNumber1 + ".png";
        let randomImageSource1 = "images/" + randomDiceImage1;
        let image1 = document.querySelectorAll('img')[0];
        image1.setAttribute('src', randomImageSource1);


        // For second dice 
        let randomNumber2 = Math.floor(Math.random() * 6) + 1;
        let randomDiceImage2 = "dice" + randomNumber2 + ".png";
        let randomImageSource2 = "images/" + randomDiceImage2;
        let image2 = document.querySelectorAll('img')[1];
        image2.setAttribute('src', randomImageSource2);

        // If a player wins or draw 
        if(randomNumber1 > randomNumber2) {
          document.querySelector("h1").innerHTML = `&#127884 Hurray, ${letters} Wins 🏆!!`;
        } else if(randomNumber2 > randomNumber1) {
          document.querySelector("h1").innerHTML = `Computer Wins!`;
        } else {
          document.querySelector("h1").innerHTML = `Match Draw!`;
        }
    })
})();
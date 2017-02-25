 // Our array of possible computer choices.
      var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
      'o','p','q','r','s','t','u','v','w','x','y','z'];

      // Variables for tracking our wins, losses, remaining guesses, and guesses taken..Wins and losses start at 0, 
      // guesses left counts down from ten, and guesses taken will list what letters the user has already guessed.
      var wins = 0;
      var losses = 0;
      var guessesleft = 10;
      var guessestaken = [];
      var gameover = false;
      
   

      // When the user presses a key, it will run the following function...
      document.onkeyup = function(event) {

        // Determine which key was pressed
        var userGuess = event.key;
        userGuess = userGuess.toLowerCase ();
        
        // Sets the computerGuess variable equal to a random choice from the computerChoice array.
        var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
        
             
         //var guessestaken = [];
         //for (var i = userGuess; i++;) {
         //guessestaken.push("userGuess" + (i + 1));
         //}
        //console.log("Your guesses so far: " + guessestaken);



               // If the user presses any letter, run the game logic.
          // This logic determines the outcome of the game (win/loss), and increments the appropriate counter.
            if (userGuess === computerGuess) {
            wins++;
            gameover = true;
            guessesleft = 10;
            guessestaken = [];

            
           }

           else {
           	guessesleft--;
            gameover = false;

           // var myArray = new Array(1);
            //for (var i = 0; i < myArray.length; i++) {
            //myArray[i] = ['userGuess', + (i+1)];
            //console.log(myArray);

            // guessestaken.push({value:userGuess});
       
          
           }

                                       

           if (guessesleft === 0) {
           	losses++;
            guessesleft = 10;
           } 



 //for var = guessestaken = "" {
        //text = text.concat([userGuess]);
       // }

                // var output = "";
     // var answer = computerGuess;
     // for (var i; i!=computerGuess; i++) {
     //  guessestaken[i] = "";
    // output = output + guessestaken[i];
   //}
    //document.getElementById("game").innerHTML = output;
    //output ="";
         
          
               
          
//When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
//When the player loses, increase the Losses counter and restart the game without a page refresh 
//(just like when the user wins).
// function to show guesses made already by user
        
                  
          // Here we create the HTML that will be injected into our div and displayed on the page.
         // Creating a variable to hold our new HTML. Our HTML now keeps track of our wins/losses/ties.
          var html = "<p>Guess what letter I'm thinking of...</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses left: " + guessesleft + "</p>"
          "<p>Your guesses so far: " + guessestaken + "</p>";

         
          // Injecting the HTML we just created into our div and updating the game information on our page.
         document.querySelector('#game').innerHTML = html;
         
        
     }
      
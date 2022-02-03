var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// console.log(enemyNames);
// console.log(enemyNames.length);
// console.log(enemyNames[0]);
// console.log(enemyNames[3]);

// function to generate a random numeric value
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

// fight function (now with parameter for enemy's name)
var fight = function(enemyName) {
   while(playerHealth > 0 && enemyHealth > 0) {
  //We should prompt the player to ask if they want to fight.
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
   
  // if player choses to skip confirm and then stop the loop
if (promptFight === "skip" || promptFight === "SKIP") {
  // confirm player wants to skip
  var confirmSkip = window.confirm("Are you sure you'd like to quit?");

  // if yes (true), leave fight
  if (confirmSkip) {
    window.alert(playerName + " has decided to skip this fight. Goodbye!");
    // subtract money from playerMoney for skipping
    playerMoney = Math.max(0, playerMoney - 10);
    console.log("playerMoney", playerMoney);
    break;
  }
  }

// generate random damage value based on player's attack power
var damage = randomNumber(playerAttack - 3, playerAttack);

enemyHealth = Math.max(0, enemyHealth - damage);

    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

// check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
      
      //award player money for winning
      playerMoney = playerMoney +20
      
      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
  
    // generate random damage value based on enemy's attack power
    var damage = randomNumber(enemyAttack - 3, enemyAttack);
    playerHealth = Math.max(0, playerHealth - damage);
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
  
    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  }
};

//run fight function to start game and fight each enemy-robot, looping over them and fighting them one at a time (now with a function to start a new game)
var startGame = function() {
  //reset player stats
  playerHealth = 100
  playerAttack = 10
  playerMoney = 10
  for(var i = 0; i < enemyNames.length; i++) {
    // if player is still alive, keep fighting
    if (playerHealth > 0) {
        // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it   
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
       
        //pick new enemy to fight based on the index of the enemyNames array
        var pickedEnemyName = enemyNames[i];
        
        // reset enemyHealth before starting new fight
        enemyHealth = randomNumber(40, 60);
        
        // use debugger to pause script from running and check whats going on at that moment in the code
        // debugger;
       
        // pass the pickedEnemyName varable's value into the fight function, where it waill assume the value of the enemyName parameter
        fight(enemyNames[i]);
        } 
        else {
          window.alert("You have lost your robot in battle! Game Over!");
            break;
          }
        }
        // function to end the entire game
        var endGame = function() {
          //if player is still alive, player wins!
          if (playerHealth > 0) {
          window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
          }
          else {
            window.alert("You've lost your robot in battle.");
              }
          }
          // ask player if they'd like to play again
          var playAgainConfirm = window.confirm("Would you like to play again?");

          if (playAgainConfirm) {
          // restart the game
          startGame();
          } 
          else {
            window.alert("Thank you for playing Robot Gladiators! Come back soon!");
          }

          window.alert("The game has now ended. Let's see how you did!");

          // after the loop ends, player is either out of health or out of enemies to fight, so run the endGame function
          endGame();
};

        // play again
        startGame();

// start the game when the page loads
startGame();
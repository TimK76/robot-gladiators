var playerInfo = {
  name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10
};


var enemyInfo = [
  {
    name: "Roborto",
    attack: 12
  },
  {
    name: "Amy Android",
    attack: 13
  },
  {
    name: "Robo Trumble",
    attack: 14
  }
];


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
   while(playerInfo.health > 0 && enemyHealth > 0) {
  //We should prompt the player to ask if they want to fight.
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
   
  // if player choses to skip confirm and then stop the loop
if (promptFight === "skip" || promptFight === "SKIP") {
  // confirm player wants to skip
  var confirmSkip = window.confirm("Are you sure you'd like to quit?");

  // if yes (true), leave fight
  if (confirmSkip) {
    window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
    // subtract money from playerInfo.money for skipping
    playerInfo.money = playerInfo.money - 10;
    console.log("playerInfo.money", playerInfo.money);
    break;
  }
  }

// remove enemy's health by subtracting the amount set in the playerInfo.attack variable
    enemyHealth = enemyHealth - playerInfo.attack;
    console.log(
      playerInfo.name + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

// check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
      
      //award player money for winning
      playerInfo.money = playerInfo.money +20
      
      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
  
    // // remove player's health by subtracting the amount set in the enemyAttack variable
    playerInfo.health = playerInfo.health - enemyAttack;
    console.log(
      enemyName + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
    );
  
    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + " has died!");
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
    }
  }
};

//run fight function to start game and fight each enemy-robot, looping over them and fighting them one at a time (now with a function to start a new game)
var startGame = function() {
  //reset player stats
  playerInfo.health = 100
  playerInfo.attack = 10
  playerInfo.money = 10
  for(var i = 0; i < enemyInfo.length; i++) {
    // if player is still alive, keep fighting
    if (playerInfo.health > 0) {
        // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it   
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
       
        //pick new enemy to fight based on the index of the enemyNames array
        var pickedEnemyObj = enemyInfo[i];
        
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
          if (playerInfo.health > 0) {
          window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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
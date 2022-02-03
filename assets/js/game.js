// function to set name
var getPlayerName = function() {
  var name = "";

  while (name === "" || name === null) {
    name = prompt("What is your robot's name?");
  }
  

  console.log("Your robot's name is " + name);
  return name;
};

var playerInfo = {
  name: getPlayerName(),
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
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
      }
    }

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
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
  playerHealth = 100
  playerAttack = 10
  playerMoney = 10
  
  // fight each enemy robot by looping over them and fighting them one at a time
  for(var i = 0; i < enemyNames.length; i++) {
    // if player is still alive, keep fighting
    if (playerHealth > 0) {
     // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it   
     window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
       
     //pick new enemy to fight based on the index of the enemyName array
     var pickedEnemyName = enemyNames[i];
        
     // reset enemyHealth before starting new fight
     enemyHealth = 50
            
     // pass the pickedEnemyName varable's value into the fight function, where it will assume the value of the enemyName parameter
     fight(pickedEnemyName);    

    // if player is still alive and we're not at the last enemy in the array
    if (playerHealth > 0 && i < enemyNames.length - 1) {
      // ask if player wants to use the store before next round
      var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
    
      // if yes, take them to the store() function
      if (storeConfirm) {
        shop();
      }
    }
  }
    // if player is not alive, break out of the loop and let endGame function run
     else {
        window.alert("You have lost your robot in battle! Game Over!");
          break;
     }
  }   

  // after the loop ends, player is either out of health or out of enemies to fight, so run the endGame function
  endGame();
};

        // function to end the entire game
    var endGame = function() {
      window.alert("The game has now ended. Let's see how you did!");

    //if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
        }
        else {
          window.alert("You've lost your robot in battle.");
        }
        // ask player if they'd like to play again
        var playAgainConfirm = window.confirm("Would you like to play again?");

        if (playAgainConfirm) {
        startGame();
        } else {
          window.alert("Thank you for playing Robot Gladiators! Come back soon!");
          }
};

// go to shop between battles function
var shop = function() {
// ask player what they'd like to do
var shopOptionPrompt = window.prompt(
  "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
);

// use switch to carry out action
switch (shopOptionPrompt) {
  case "REFILL": // new case
  case "refill":
    if (playerMoney >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");

      playerHealth = playerHealth + 20;
      playerMoney = playerMoney - 7;
    }
    else {
      window.alert("You don't have enough money!");
    }

    break;
  case "UPGRADE":
  case "upgrade":
    if (playerMoney >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");

      // increase attack and decrease money
      playerAttack = playerAttack + 6;
      playerMoney = playerMoney - 7;
    }
    else {
      window.alert("You don't have enough money!");
    }
    break;
  case "LEAVE": // new case
  case "leave":
    window.alert("Leaving the store.");
   
// do nothing, so function will end
    break;
  default:
    window.alert("You did not pick a valid option. Try again.");
    
    // call shop() again to force player to pick a valid option
    shop();
    break;
}
};

// start the game when the page loads
startGame();

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
console.log(enemyNames);
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
   // repeat and execute as long as the enemy-robot is alive 
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
  
    // // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
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

// if player chooses to fight, then fight
// if (promptFight === "fight" || promptFight === "FIGHT") {
// if no (false), ask question again by running fight() again
//     else {
//       fight();
//     }
//     //if player did not chose 1 or 2 in prompt
//  } else {
//     window.alert<"You need to pick a valid option. Try again!";
//  }
// };
// }
//run fight function to start game
for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0){
        // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it   
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
        //pick new enemy to fight based on the index of the enemyNames array
        var pickedEnemyName = enemyNames[i];
        // reset enemyHealth before starting new fight
        enemyHealth = 50
        // use debugger to pause script from running and check whats going on at that moment in the code
        // debugger;
        // pass the pickedEnemyName varable's value into the fight function, where it waill assume the value of the enemyName parameter
        fight(enemyNames[i]);
    } else {
        window.alert("You have lost your robot in battle! Game Over!");
            break;
          }
        }
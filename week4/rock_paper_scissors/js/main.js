// Initalize player's score and bot's score
var botScore=0,
	playerScore=0;

// Player clicks on rock option
document.getElementById("rock").onclick=playerThrowsRock;
function playerThrowsRock(){
	var botsWeapon= getRandomWeapon();
	checkWhoWon(botsWeapon,"rock");
	displayCompleteMessage("Player threw rock | Bot threw " + botsWeapon);
}

// Player clicks on scissors option
document.getElementById("scissors").onclick=playerThrowsScissors;
function playerThrowsScissors(){
	var botsWeapon= getRandomWeapon();
	checkWhoWon(botsWeapon,"scissors");
	displayCompleteMessage("Player threw scissors | Bot threw " + botsWeapon)
}

// Player clicks on paper option
document.getElementById("paper").onclick=playerThrowsPaper;
function playerThrowsPaper(){
	var botsWeapon= getRandomWeapon();
	checkWhoWon(botsWeapon,"paper");
	displayCompleteMessage("Player threw paper | Bot threw " + botsWeapon)
}

// Bot is assigned a random weapon
function getRandomWeapon(){
	var randomNumber=Math.random();
	var botsWeapon="rock";
	if(randomNumber<.33){
		botsWeapon="scissors";
	}
	else if(randomNumber<.6666){
		botsWeapon="paper";
	}
	return botsWeapon;
}

// Compare player's option to bot's option to increase score
function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon==playersWeapon){
		displayCompleteMessage2("Great minds think alike..");
	}
	else if(
		(botsWeapon=="scissors" && playersWeapon=="paper") ||
		(botsWeapon=="paper" && playersWeapon=="rock") ||
		(botsWeapon=="rock" && playersWeapon=="scissors")
		){
		increaseBotScore();
	}
	else{
		increasePlayerScore();
	}
}

// Increases bot's score by 1
function increaseBotScore(){
	botScore+=1;
	document.getElementById("computerScore").innerHTML=botScore;
	displayCompleteMessage2("Try again, playa!");
}

// Increases player's score by 1
function increasePlayerScore(){
	playerScore+=1;
	document.getElementById("humanScore").innerHTML=playerScore;
	displayCompleteMessage2("You got that, playa!");
}
function displayCompleteMessage(msg){
	document.getElementById("status").innerHTML=msg;
}
function displayCompleteMessage2(msg){
	document.getElementById("winner").innerHTML=msg;
}

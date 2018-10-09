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
// Player clicks on lizard option
document.getElementById("lizard").onclick=playerThrowsLizard;
function playerThrowsLizard(){
	var botsWeapon= getRandomWeapon();
	checkWhoWon(botsWeapon,"lizard");
	displayCompleteMessage("Player threw lizard | Bot threw " + botsWeapon)
}
// Player clicks on spock option
document.getElementById("spock").onclick=playerThrowsSpock;
function playerThrowsSpock(){
	var botsWeapon= getRandomWeapon();
	checkWhoWon(botsWeapon,"spock");
	displayCompleteMessage("Player threw spock | Bot threw " + botsWeapon)
}

// Bot is assigned a random weapon
function getRandomWeapon(){
	var randomNumber=Math.random();
	var botsWeapon="rock";
	if(randomNumber<.20){
		botsWeapon="scissors";
	}
	else if(randomNumber<.40){
		botsWeapon="paper";
	}
	else if(randomNumber<.60){
		botsWeapon="lizard";
	}
	else if(randomNumber<.80){
		botsWeapon="spock";
	}
	return botsWeapon;
}

// (and as it always has) Rock crushes Scissors
// Compare player's option to bot's option to increase score
function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon==playersWeapon){
		displayCompleteMessage2("Great minds think alike..");
	}
	else if(
		(botsWeapon=="scissors" && playersWeapon=="paper") ||
		(botsWeapon=="paper" && playersWeapon=="rock") ||
		(botsWeapon=="rock" && playersWeapon=="scissors") ||
		(botsWeapon=="rock" && playersWeapon=="lizard") ||
		(botsWeapon=="lizard" && playersWeapon=="spock") ||
		(botsWeapon=="spock" && playersWeapon=="scissors") ||
		(botsWeapon=="scissors" && playersWeapon=="lizard") ||
		(botsWeapon=="lizard" && playersWeapon=="paper") ||
		(botsWeapon=="paper" && playersWeapon=="spock") ||
		(botsWeapon=="spock" && playersWeapon=="rock")
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

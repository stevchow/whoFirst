let p1Button = document.querySelector("#p1");
let p2Button = document.getElementById("p2");
let resetButton = document.getElementById("reset");
let p1Display = document.querySelector("#p1Display");
let p2Display = document.querySelector("#p2Display");
let numInput = document.querySelector("input");
let winningScoreDisplay = document.querySelector("p span");
let p1Score = 0;
let p2Score = 0;
let gameOver = false;
let winningScore = 5;
const monsterSound = new Audio("audio/monster.wav");
const displayBlock = document.querySelector('.displayBlock');


p1Button.addEventListener("click", function () {
	if (!gameOver) {
		p1Score++;
		if (p1Score === winningScore) {
			p1Display.classList.add("winner");
			gameOver = true;
		}
		p1Display.textContent = p1Score;
	}
	monsterKill();
});

p2Button.addEventListener("click", function () {
	if (!gameOver) {
		p2Score++;
		if (p2Score === winningScore) {
			p2Display.classList.add("winner");
			gameOver = true;
		}
		p2Display.textContent = p2Score;
	}
	monsterKill();
});

resetButton.addEventListener("click", function () {
	reset();
});

function reset() {
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;
}

numInput.addEventListener("change", function () {
	winningScoreDisplay.textContent = this.value;
	winningScore = Number(this.value);
	reset();
});

const monsterKill = () => {
	if ((p1Score === 0 && p2Score === winningScore) || (p2Score === 0 && p1Score === Number(winningScore))) {
		monsterDisplay();
		monsterSound.volume = 0.1;
		monsterSound.play();
		monsterSound.currentTime = 0;
	}
}

function monsterDisplay(){
	displayBlock.classList.add('monsterDisplay');
	displayBlock.textContent = "MONSTER KILL!!!";
	setTimeout(()=>{
		displayBlock.classList.remove('monsterDisplay');
		displayBlock.textContent = "";
	}, 1218);
}


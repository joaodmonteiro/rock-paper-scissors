let startButton = document.getElementById("startButton");
let gameDiv = document.getElementById("game");
let roundCounter = 0;
let userPoints = 0;
let computerPoints = 0;

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
                
    if(randomNumber == 1)
    {
        return('Rock');
    }
    else if (randomNumber == 2)
    {
        return('Paper');
    }
    else return('Scissors');
}

function playRound() {
    let playerSelection = button.classList[0];
    let computerSelection = computerPlay(); 

    if(playerSelection.toLowerCase() === 'rock')
    {
        switch(computerSelection){
            case 'Paper': 
                roundResult = "You lose! Paper beats Rock!";
                break;
            case 'Scissors': 
                roundResult = "You win! Rock beats Scissors!";
                break;
            case 'Rock': 
                roundResult ="Draw! Play again!";
                break;
        }
    }
    else if(playerSelection.toLowerCase() === 'paper')
    {
        switch(computerSelection){
            case 'Paper': 
                roundResult = "Draw! Play again!";
                break;
            case 'Scissors': 
                roundResult = "You lose! Scissors beats Paper!";
                break;
            case 'Rock': 
                roundResult = "You win! Paper beats Rock!";
                break;
        }
    }
    else if(playerSelection.toLowerCase() === 'scissors')
    {
        switch(computerSelection){
            case 'Paper': 
                roundResult = "You win! Scissors beats Paper!";
                break;
            case 'Scissors': 
                roundResult = "Draw! Play again!";
                break;
            case 'Rock': 
                roundResult = "You lose! Rock beats Scissors!";
                break;
        }
    }
    
    if(roundResult.substr(0, 8) === 'You win!')
    {
        userPoints++;
        roundCounter++;
    }
    else if(roundResult.substr(0, 8) === 'You lose')
    {
        computerPoints++;
        roundCounter++;
    }

    alert(roundResult + " You: " + userPoints + ", Computer: " + computerPoints);

    console.log(roundCounter);    
}

function game(rounds) {
    
    startButton.remove();

    if(roundCounter<=rounds)
    {
        console.log("ronda");
        let para = document.createElement('h2');
        para.innerText = "Choose your weapon!";
        gameDiv.appendChild(para);
    
        let rockButton = document.createElement('button');
        rockButton.innerText = "Rock";
        rockButton.classList.add('rock', 'optionButton');
    
        let paperButton = document.createElement('button');
        paperButton.innerText = "Paper";
        paperButton.classList.add('paper', 'optionButton');
    
        let scissorsButton = document.createElement('button');
        scissorsButton.innerText = "Scissors";
        scissorsButton.classList.add('scissors', 'optionButton');
    
        let roundResult;
    
        gameDiv.appendChild(rockButton);
        gameDiv.appendChild(paperButton);
        gameDiv.appendChild(scissorsButton);
    
        const buttons = document.querySelectorAll('.optionButton');
        
        buttons.forEach((button) => {
            button.addEventListener('click', playRound);
                
            });
        
        console.log("oi");       
    }
    else {
        if(userPoints>computerPoints)
        {
            alert("You win!");
        }
        else if(computerPoints>userPoints)
        {
            alert("Computer wins");
        }
        else
        {
            alert("Draw!");
        }
    }
    
}
            
startButton.onclick = function() {
    console.log("ola");
    game(5);   
}
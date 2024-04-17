function getComputerChoice() {
    // Will randomly return rock, paper or scissor
    // Math.floor(Math.random() * (max - min + 1)) + min;
    // used for getting random numbers in a specific range
    let random = Math.floor(Math.random() * (3)) + 1;
    if (random == 1)
    {
        return "Rock";
    }
    else if (random == 2)
    {
        return "Paper";
    }
    else if (random == 3)
    {
        return "Scissor";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    // Depending on the combination of the two selections, return a string that declares the winner
    // if player chooses rock
    if (playerSelection === "rock")
    {
        // if computer chooses rock
        if (computerSelection === "rock")
        {
            return "Tie!";
        }
        // else if computer chooses paper
        else if (computerSelection === "paper")
        {
            return "You lose!";
        }
        // else if computer chooses scissor
        else if (computerSelection === "scissor")
        {
            return "You win!";
        }
    }
    // else if player chooses paper
    else if (playerSelection === "paper")
    {
        // if computer chooses rock
        if (computerSelection === "rock")
        {
            return "You win!";
        }
        // else if computer chooses paper
        else if (computerSelection === "paper")
        {
            return "Tie!";
        }
        // else if computer chooses scissor
        else if (computerSelection === "scissor")
        {
            return "You lose!";
        }
    }
    // else if player chooses scissor
    else if (playerSelection === "scissor")
    {
        // if computer chooses rock
        if (computerSelection === "rock")
        {
            return "You lose!";
        }
        // else if computer chooses paper
        else if (computerSelection === "paper")
        {
            return "You win!";
        }
        // else if computer chooses scissor
        else if (computerSelection === "scissor")
        {
            return "Tie!";
        }
    }
}

function playGame() {
    // play a five round game that keeps score and reports a winner or loser at the end
    let player = 0, computer = 0;
    for (i = 0; i < 5; i++)
    {
        let playerSelection = prompt("Enter your move");
        let computerSelection = getComputerChoice();
        let outcome = playRound(playerSelection, computerSelection)
        console.log(outcome);
        if (outcome === "You win!")
        {
            player++;
        }
        else if (outcome == "You lose!")
        {
            computer++;
        }
    }
    if (player > computer)
    {
        console.log("The winner is the Player!")
    }
    else if (computer > player)
    {
        console.log("The winner is the Computer!")
    }
    else
    {
        console.log("The match was a draw!")
    }
}

playGame()
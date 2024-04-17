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
            return "You lose! Paper beats Rock!";
        }
        // else if computer chooses scissor
        else if (computerSelection === "scissor")
        {
            return "You win! Rock beats Scissor!";
        }
    }
    // else if player chooses paper
    else if (playerSelection === "paper")
    {
        // if computer chooses rock
        if (computerSelection === "rock")
        {
            return "You win! Paper beats Rock!";
        }
        // else if computer chooses paper
        else if (computerSelection === "paper")
        {
            return "Tie!";
        }
        // else if computer chooses scissor
        else if (computerSelection === "scissor")
        {
            return "You lose! Scissor beats Paper!";
        }
    }
    // else if player chooses scissor
    else if (playerSelection === "scissor")
    {
        // if computer chooses rock
        if (computerSelection === "rock")
        {
            return "You lose! Rock beats Scissor!";
        }
        // else if computer chooses paper
        else if (computerSelection === "paper")
        {
            return "You win! Scissor beats Paper";
        }
        // else if computer chooses scissor
        else if (computerSelection === "scissor")
        {
            return "Tie!";
        }
    }
}

console.log(playRound("RocK", getComputerChoice()));

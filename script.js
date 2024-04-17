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

console.log(getComputerChoice())


window.alert("Lets play Rock, Paper, Scissors!");
var gameScore = {
    wins: 0,
    losses:0,
    ties: 0,
}
choices = ["Rock", "Paper", "Scissors"]
var playAgain = true;
while (!playAgain===false){
    //establish gameloop function
    function gameLoop(){
    var playerChoice = window.prompt("Choose R, P, or S");
    if ((playerChoice === "R") || (playerChoice === "P") || (playerChoice === "S")){
        //translate choice into player value
        var playerValue;
        if (playerChoice === "R"){
            playerValue = choices[0];
        } else if (playerChoice === "P"){
            playerValue = choices[1];
        } else if (playerChoice ==="S"){
            playerValue = choices[2];}
        
        //Declare playerValue for debugging
        window.alert("You chose " + playerValue + "!"); 
        //computer's move
        var computerChoice = Math.floor(Math.random()*3);
        window.alert("The computer chose " + choices[computerChoice] + "!");
        var computerValue = choices[computerChoice];

        //determine outcome
        if (playerValue === computerValue){
            windows.alert("It's a tie!");
            gameScore.ties++;
        }
        //win conditions
        else if(
            (playerValue === "Rock" && computerValue === "Scissors") ||
            (playerValue === "Paper" && computerValue === "Rock") ||
            (playerValue === "Scissors" && computerValue === "Paper")){
                window.alert("You won!");
                gameScore.wins++;} 
        //lose
        else{
            window.alert("The computer won.");
            gameScore.losses++;
        }
        //display stats
        window.alert("Stats:" + 
        "\nWins: " + gameScore.wins +
        "\nLosses: " + gameScore.losses +
        "\nTies: " + gameScore.ties);
    }else{window.alert("You entered an invalid choice. Try again!");
        gameLoop();}
    }
    gameLoop();
    //Check if the player wants to play again
    function checkPlayAgain(){
    playAgain = window.confirm("Play again?");}
    checkPlayAgain();
 
}
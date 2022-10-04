import State from "./state";

export class Scoreboard{
    constructor(levelSetup){
        this.levelSetup = levelSetup
        this.correct = 0;
        this.incorrect = 0;
        this.level = this.levelSetup.level;
        this.levelBuffer = 0
        this.totalNumberOfQuestions = 0;
    }
    correctPlusOne(){
        // Check if running before ++
        if(State.isRunning){
            this.correct += 1;
            this.levelBuffer += 1;
            this.totalNumberOfQuestions += 1;
            // Check if next level 
            if(this.levelBuffer >= this.levelSetup.maxCorrectNumber){
                // Set next level
                this.levelSetup.nextLevel();
                console.log("Level + 1")
                // Clear level buffer back to 0
                this.levelBuffer = 0;
            }

            console.log("Correct + 1")
            this.updateHTMLScoreboard()
        }
    }
    incorrectPlusOne(){
        // Check if running before ++
        if(State.isRunning){
            this.incorrect += 1;
            this.totalNumberOfQuestions += 1;
            this.updateHTMLScoreboard()
            if(this.incorrect >= 5){
                this.levelSetup.gameOver()
            }
        }
    }
    levelPlusOne(){
        this.levelSetup.nextLevel()
        this.updateHTMLScoreboard()
    }
    updateHTMLScoreboard(){
        const htmlScoreboard = document.getElementById("scoreboard-container");
        htmlScoreboard.innerHTML = `
        <h3>Difficulty: `+this.levelSetup.level+` </h3>
        <h3>Correct: `+this.correct+` </h3>
        <h3>Incorrect: `+this.incorrect+` </h3>`
        
        
    }
    reset(){
        this.level = 1;
        this.correct = 0;
        this.incorrect = 0;
        this.totalNumberOfQuestions = 0;
        this.updateHTMLScoreboard()
    }

}
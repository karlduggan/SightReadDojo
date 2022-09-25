export class Scoreboard{
    constructor(levelSetup){
        this.levelSetup = levelSetup
        this.correct = 0;
        this.incorrect = 0;
        this.totalNumberOfQuestions = 0;
    }
    correctPlusOne(){
        this.correct += 1;
        this.totalNumberOfQuestions += 1;
        console.log("Correct Answer yay :)")
        this.updateHTMLScoreboard()
    }
    incorrectPlusOne(){
        this.incorrect += 1;
        this.totalNumberOfQuestions += 1;
        this.updateHTMLScoreboard()
        if(this.incorrect >= 5){
            this.levelSetup.gameOver()
        }
    }
    updateHTMLScoreboard(){
        const htmlScoreboard = document.getElementById("scoreboard");
        htmlScoreboard.innerHTML = `
        <h3>Correct: `+this.correct+` </h3>
        <h3>Incorrect: `+this.incorrect+` </h3>`
        
        
    }
    reset(){
        this.correct = 0;
        this.incorrect = 0;
        this.totalNumberOfQuestions = 0;
        this.updateHTMLScoreboard()
    }

}
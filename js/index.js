var p1Button = document.querySelector('#p1');
var p2Button = document.querySelector('#p2');
var h1 = document.querySelector("h1");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var resetButton = document.querySelector("#reset");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");//p裡的span
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 0;

p1Button.addEventListener("click",function(){
    if(!gameOver){ 
        p1Score ++;
        if(p1Score ===  winningScore){
            p1Display.classList.add('green');
            gameOver = true;
            console.log("Game over");
        }
        p1Display.textContent = p1Score;
    }
    else {
      //do nothing
    }
})

p2Button.addEventListener("click",function(){

    if(!gameOver){
        p2Score ++ ;
        console.log(p2Score);
        if(winningScore === p2Score){
            p2Display.classList.add('green');
            gameOver = true;
            console.log("game over ");
        }
        p2Display.textContent = p2Score;
    }
})

function Reset(){
    p1Score = 0;
    p1Display.textContent = p1Score;
    p1Display.classList.remove('green');
    p2Score = 0;
    p2Display.textContent = p2Score;
    p2Display.classList.remove('green');
    gameOver = false;
}
resetButton.addEventListener("click",function(){
    Reset();
})

numInput.addEventListener("change",function(){
    winningScoreDisplay.textContent =this.value;//this => the event which is listened on
    winningScore = Number(this.value);
    Reset();
})
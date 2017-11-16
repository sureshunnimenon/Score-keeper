var btnPlayer1 = document.getElementById("p1");
var btnPlayer2 = document.getElementById("p2");
var btnReset = document.getElementById("reset");

var score = document.getElementById("num");
score.defaultValue=5;


//var winningScore = Number(document.getElementById("num").value);
var winningScore = 5;
document.getElementById("score").textContent=5;
var gameOver=false;

var scorePlayer1 = 0;
var scorePlayer2 = 0;

btnPlayer1.addEventListener("click", function(){  
  if (!gameOver){
  scorePlayer1++; 
    
    if(scorePlayer1===winningScore){
      gameOver=true;
    }
  document.getElementById("score1").textContent = scorePlayer1; 
  if(gameOver){document.getElementById("score1").style.color="green"}}  
    })

btnPlayer2.addEventListener("click", function(){
  if(!gameOver){  
  scorePlayer2++;
    if(scorePlayer2===winningScore){
      gameOver=true;
    }
    document.getElementById("score2").textContent = scorePlayer2; 
    if(gameOver){document.getElementById("score2").style.color="green"}}
      })

btnReset.addEventListener("click", function(){
  gameOver=false;
  scorePlayer1=0;
  scorePlayer2=0;
  winningScore=Number(score.value);
  document.getElementById("num").textContent=winningScore;
  document.getElementById("score1").textContent = scorePlayer1;
  document.getElementById("score2").textContent = scorePlayer2;
  document.getElementById("score1").style.color="black";
  document.getElementById("score2").style.color="black";
  })

score.addEventListener("change", function(){
  winningScore = Number(score.value);
  document.getElementById("score").textContent=winningScore;
   
})



const gameboard = {
   board: [0,1,2,3,4,5,6,7,8],
   choice:null,
    num: null,
    players: []
};
function player(name,choice){
    let diplayers=document.querySelector(".players");
    
    diplayers.innerHTML+=`${name}:${choice}<br>`;
    
}
    let start=document.querySelector(".start");
start.addEventListener("click",(event)=>{
    event.preventDefault();
    let namer=document.querySelector(".namer").value;
    let choices=document.querySelector(".choices").value;
    gameboard.players.push(namer);
 gameboard.choice=choices;

    
  player(namer,choices);
  

})
const gamestate=(function(){
    let gameg=document.querySelector(".gameg");
function getboard(){
    gameboard.board.forEach((b,i)=>{
    let diva=document.createElement("div");
    
    gameg.style.display="grid";
    gameg.style.gridTemplateColumns = "repeat(3, 100px)"; // 3 columns, 100px each
gameg.style.gridTemplateRows = "repeat(3, 100px)";    // 3 rows
gameg.style.gap = "10px"; 
diva.style.backgroundColor = "red"; // ✅
diva.dataset.index = i; // automatically from forEach
diva.textContent=b;
gameg.appendChild(diva);
})
}

function mark(){
    let currentPlayer="x";
    gameg.addEventListener("click",(e)=>{
const clickedIndex = e.target.dataset.index; // now you know which array position
gameboard.num = Number(clickedIndex);


gameboard.board[clickedIndex ] = currentPlayer; 
e.target.textContent = currentPlayer;       // ✅ works


game.logic();
currentPlayer = currentPlayer === "x" ? "o":"x";
    })
    
}
function reset(){
    gameboard.board=[0,1,2,3,4,5,6,7,8];
} return{getboard,mark,reset};
})();
gamestate.getboard();
gamestate.mark();
const game=(function(){
    function logic(){
    let diplayers=document.querySelector(".players");
        if (
  (gameboard.board[0] === gameboard.choice && gameboard.board[1] ===gameboard.choice && gameboard.board[2] === gameboard.choice)||
  (gameboard.board[3] === gameboard.choice &&gameboard.board[4] === gameboard.choice && gameboard.board[5] === gameboard.choice) ||
  (gameboard.board[6] === gameboard.choice && gameboard.board[7] === gameboard.choice && gameboard.board[8] === gameboard.choice) ||
  (gameboard.board[0] === gameboard.choice && gameboard.board[3] === gameboard.choice && gameboard.board[6] === gameboard.choice) ||
  (gameboard.board[1] === gameboard.choice && gameboard.board[4] === gameboard.choice && gameboard.board[7] === gameboard.choice)|| 
  (gameboard.board[2] === gameboard.choice && gameboard.board[5] === gameboard.choice &&gameboard.board[8] === gameboard.choice)|| 
  (gameboard.board[0] ===gameboard.choice &&gameboard.board[4] === gameboard.choice && gameboard.board[8] === gameboard.choice) ||
  (gameboard.board[2] ===gameboard.choice && gameboard.board[4] === gameboard.choice && gameboard.board[6] === gameboard.choice)
) {
  
  diplayers.innerHTML=(`${gameboard.players}:${gameboard.choice} is the winner`);


}else if (gameboard.board.every(cell => cell === "x"||cell === "o")) {
    diplayers.innerHTML=`its a tie`;
    }
    }
    return{logic};
})();

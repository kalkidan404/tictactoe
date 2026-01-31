const gameboard = {
   board: [0,1,2,3,4,5,6,7,8],
    num: null,
    choice: null,
    players: []
};

const gamestate=(function(){

function getboard(){
    return gameboard.board;
}
function mark(num){
    gameboard.board[num]=gameboard.choice;
}
function reset(){
    gameboard.board=[0,1,2,3,4,5,6,7,8];
} return{getboard,mark,reset}
})();
function player(name,choice){
    return name,choice;
}
    const game=(function(){
        if (
  (gameboard.board[0] === gameboard.choice && gameboard.board[1] ===gameboard.choice && gameboard.board[2] === gameboard.choice) ||
  (gameboard.board[3] === gameboard.choice &&gameboard.board[4] === gameboard.choice && gameboard.board[5] === gameboard.choice) ||
  (gameboard.board[6] === gameboard.choice && gameboard.board[7] === gameboard.choice && gameboard.board[8] === gameboard.choice) ||
  (gameboard.board[0] === gameboard.choice && gameboard.board[3] === gameboard.choice && gameboard.board[6] === gameboard.choice) ||
  (gameboard.board[1] === gameboard.choice && gameboard.board[4] === gameboard.choice && gameboard.board[7] === gameboard.choice) ||
  (gameboard.board[2] === gameboard.choice && gameboard.board[5] === gameboard.choice &&gameboard.board[8] === gameboard.choice) ||
  (gameboard.board[0] ===gameboard.choice &&gameboard.board[4] === gameboard.choice && gameboard.board[8] === gameboard.choice) ||
  (gameboard.board[2] ===gameboard.choice && gameboard.board[4] === gameboard.choice && gameboard.board[6] === gameboard.choice)
) {
  console.log(`${gameboard.choice} is the winner`);


}else if (gameboard.board.every(cell => cell === "X" || cell === "O")) {
    console.log("All spaces are checked off — tie if no winner");
     console.log(`${gameboard.num}=${gameboard.choice}`);
        console.log("it is a tie");
    }
})();
gamestate();
game();
player();
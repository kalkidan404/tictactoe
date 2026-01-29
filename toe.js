let position=[0,1,2,3,4,5,6,7,8];
function game(choice,num){
    
    let Toprow=position[0,1,2];
   let Middlerow=position[3,4,5];
let Bottomrow=position[6,7,8]
let Leftcolumn=position[0,3,6]
let Middlecolumn=position[1,4,7]
let Rightcolumn=position[2,5,8]
let DiagonalTL=position[0,4,8]
let DiagonalTR=position[2,4,6]
    
function gameboard(){
    
     if(num<0||num>8){
            console.log("not appliable");
        return;
    }else if(position[num]==="x"||position[num]==="o"){
            console.log("taken");
        return;
        }else{
   
console.log(`${num}=${choice}`);
return position[num]=choice;
}
}
    function gamecontroller(){
        if(Toprow===choice||Middlerow===choice||Bottomrow===choice||Leftcolumn===choice||Middlecolumn===choice||Rightcolumn===choice||DiagonalTL===choice||DiagonalTR===choice){
            console.log(`${choice} is the winner`);
    
    }else if (position.every(cell => cell === "X" || cell === "O")) {
    console.log("All spaces are checked off — tie if no winner");
     console.log(`${num}=${choice}`);
        console.log("it is a tie");
    }
}return function(){
    gameboard(),
    gamecontroller()
}
}
let kal=game("x",0);
kal();
let miki=game("o",4);
miki();
kal=game("x",1);
kal();
miki=game("o",2);
miki();
kal=game("x",7);
kal();
 miki=game("o",6);
miki();
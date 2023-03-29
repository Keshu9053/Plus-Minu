let turn = document.querySelector(".turn");
let boxes = document.querySelectorAll(".box");
let newbtn = document.querySelector(".btn");

let currentPlayer;
let gameGrid;


const winningPositions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

// initialization of game
function init(){
    currentPlayer = "X";
    gameGrid = ["","","","","","","","",""];
    // removing the signs from UI
    boxes.forEach((box,index )=> {
        box.innerText = "";
        boxes[index].style.pointerEvents = "all";
        //one more thing is missing, initialise box with css properties again
        box.classList = `box box${index+1}`;
        
    });
    newbtn.classList.remove("active");
    turn.innerText = `Current player - ${currentPlayer}`;
    turn.classList.remove("win");
    turn.classList.remove("loss");
}

init();

function checkGameOver(){
    let answer = "";
    winningPositions.forEach( (position) =>{

        if( (gameGrid[position[0]] !== "" || gameGrid[position[1]] !== "" || gameGrid[position[2]] !== "")
            && ( gameGrid[position[0]] === gameGrid[position[1]] ) && ( gameGrid[position[1]] === gameGrid[position[2]] ) ){
                if(gameGrid[position[0]] === "X"){
                    answer = "X";
                }
                else answer = "O";  

                // After Winning Disable all the boxes
                boxes.forEach(box =>{
                    box.style.pointerEvents = "none";
                });

                boxes[position[0]].classList.add("win");
                boxes[position[1]].classList.add("win");
                boxes[position[2]].classList.add("win");
        }
    });

    // means ans milgya
    if(answer !== ""){
        turn.innerHTML = `Winner - ${answer}`;
        turn.classList.add("win");
        newbtn.classList.add("active");
        return;
    }

    // when game will be tie 
    let fillout = 0;
    gameGrid.forEach(box =>{
        if(box !== "") fillout++;
    });

    if(fillout == 9){
        newbtn.classList.add("active");
        turn.innerHTML = "Game Tied !";
        turn.classList.add("loss");
    }


}

function swapTurn(){
    if(currentPlayer === "X")
        currentPlayer = "O";
    else currentPlayer = "X";
    turn.innerText = `Current player - ${currentPlayer}`;
}

function handleClick(index){
   if(gameGrid[index] === ""){
    boxes[index].innerText = currentPlayer;
    gameGrid[index] = currentPlayer;
    boxes[index].style.pointerEvents = "none";

    swapTurn();
    checkGameOver();
   }
}



// Event-Listners on boxes!
boxes.forEach((box,index) =>{
    box.addEventListener("click",() =>{
        handleClick(index);
    })
});

newbtn.addEventListener("click" , init);
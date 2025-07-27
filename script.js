let boxes=document.querySelectorAll(".box");
let message=document.querySelector("#msg");
let messageContainer=document.querySelector(".msg-container");
let newButton=document.querySelector("#new-btn");
let resetButton=document.querySelector("#reset-btn");

let turn0= true;
let count= 0;

const winPatterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

boxes.forEach((box => {
    box.addEventListener("click",function(){
        if(turn0){
            box.innerText = "O";
            box.style.color = "blue";
            turn0=false;
        }
        else{
            box.innerText = "X"
            turn0=true;
            box.style.color = "red";
        }
        box.disabled=true;
        count++;

        let IsWinner = checkWinner();
        if(count===9 && !IsWinner){
            GameDraw();
        }
    });
}));
const GameDraw = () => {
    message.innerText =" The Game is Draw";
    messageContainer.classList.remove("hide") ;
    disableBoxes();
};
const checkWinner = () => {
    for( let pattern of winPatterns){
    let pos1value = boxes[pattern[0]].innerText;
    let pos2value = boxes[pattern[1]].innerText;
    let pos3value = boxes[pattern[2]].innerText;

    if(pos1value != "" && pos2value != "" && pos3value != ""){
        if(pos1value===pos2value && pos2value===pos3value){
            showWinner(pos1value);
            return true;
        }
    }
}     
};
const showWinner = (winner) => {
    message.innerText =`Congratulation , Winner is ${winner}`;
    messageContainer.classList.remove("hide");
    disableBoxes();
};
const disableBoxes = () => {
    for(let box of boxes){
    box.disabled=true;}

};
const enableBoxes = () => {
    for(let box of boxes){
    box.disabled=false;
    box.innerText="";}
};
const resetGame = () =>{
    messageContainer.classList.add("hide");
    count=0;
    turn0=true;
    enableBoxes();
};
resetButton.addEventListener("click",resetGame);
newButton.addEventListener("click",resetGame);

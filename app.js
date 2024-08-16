let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset_btn");
let newGameBtn = document.querySelector("#new_btn");
let msgContainer = document.querySelector(".msg_container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if (turnO){
            box.innerText = "O";
            turnO = false;
            box.style.color = "red"
        }else {
            box.innerText = "X";
            turnO = true;
            box.style.color = "blue"
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
msg.innerText = `Congratulations, Winner is ${winner}`;
msgContainer.classList.remove("hide");
disableBoxes();
};

const checkWinner = () => {
    for (let pattern of winPatterns){
       let pos1Val = boxes [pattern[0]].innerText;
       let pos2Val = boxes [pattern[1]].innerText;
       let pos3Val = boxes [pattern[2]].innerText;

       if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if (pos1Val === pos2Val && pos2Val === pos3Val){
           showWinner(pos1Val);
        }
       }
    }
};

newGameBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame); 
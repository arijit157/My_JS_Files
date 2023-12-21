let turnMusic = new Audio("ting.mp3");
// let backgroundMusic = new Audio("music.mp3");
let gameoverMusic = new Audio("gameover.mp3");
let turn = "X";
let gameOver = false;

let changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

let checkWinner = () => {
    let boxTexts = document.getElementsByClassName("box-text");

    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    wins.forEach((e) => {
        if ((boxTexts[e[0]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[1]].innerText === boxTexts[e[2]].innerText) && (boxTexts[e[0]].innerText !== "")) {
            document.querySelector(".info").innerText = boxTexts[e[0]].innerText + " won! 🎊🎉";
            gameOver = true;
            document.getElementById("imgbox").style.display = "block";
            gameoverMusic.play();
        }
    });
}


let startGame = () => {
    let boxes = document.getElementsByClassName("box");
    Array.from(boxes).forEach((el) => {
        el.addEventListener("click", (event) => {
            let boxText = el.querySelector(".box-text");
            boxText.innerText = turn;
            turn = changeTurn();
            turnMusic.play();
            checkWinner();
            if (gameOver === false) {
                document.getElementsByClassName("info")[0].innerText = "Turn of " + turn;
            }
        });
    });
}

startGame();

let resetGame=()=>{
    let boxTexts = document.getElementsByClassName("box-text");
    Array.from(boxTexts).forEach((boxText)=>{
        boxText.innerText="";
    });
    gameOver=false;
    if (gameOver === false) {
        document.getElementsByClassName("info")[0].innerText = "Turn of X";
        document.getElementById("imgbox").style.display = "none";
    }
}
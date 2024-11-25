console.log("Hellooooo.....");


let music = new Audio("Assests/music.mp3");
let audioturn = new Audio("Assests/ting.mp3");
let gameover = new Audio("Assests/ting.mp3");


let turn = "X";
let isgameover=false;

//function to change the turn

const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

//function to check for a win

const checkWin = () => {
    let boxtexts= document.getElementsByClassName("boxText");
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]

    ]
    wins.forEach(e=>{
        if((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText)  && (boxtexts[e[1]].innerText===boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText!=="")){
            document.querySelector(".info").innerText=boxtexts[e[0]].innerText + "WON!!!";
            isgameover=true;
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="200px";
        }
        
    })
}

//Game Logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxText");
  element.addEventListener("click", (e) => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn=changeTurn();
      audioturn.play();
      checkWin();
      if(!isgameover){
      document.getElementsByClassName("info")[0].innerText =
        " Turn for " + turn;
      }
    }
  });
});

//adding reset listener

let reset = document.getElementById("reset")
reset.addEventListener('click',(e)=>{
    let boxtexts= document.getElementsByClassName("boxText");
    Array.from(boxtexts).forEach(element=>{
        element.innerText="";
    })
    turn="X";
    isgameover=false;
    document.getElementsByClassName("info")[0].innerText =
        " Turn for " + turn;
         document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="0"
        
})
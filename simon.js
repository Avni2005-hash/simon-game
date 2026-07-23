let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;
        levelup();
    }
    });

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
function levelup(){
        userSeq=[];
        level++;
        h2.innerText=`Level ${level}`;
        let randIdx=Math.floor(Math.random()*4);
        let randColor=btns[randIdx];

    console.log("Random Index:", randIdx);
    console.log("Random Color:", randColor);
        let randbtn=document.querySelector(`.${randColor}`);
         console.log("Button:", randbtn);
        gameSeq.push(randColor);
        console.log("Game Sequence:", gameSeq);
        gameflash(randbtn);
}
function checkAns(idx){
    console.log(userSeq[idx], gameSeq[idx]);
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML=  `Game Over!Your Score was <b>${level}</b><br> Press any key to start`;
        
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="red";
        },150);
        reset();
    }
}
function btnPress(){
    let btn=this;
    userflash(btn);
    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    console.log("Clicked:", userColor);
    console.log("User Sequence:", userSeq);
    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
var board=[["","",""],["","",""],["","",""]];
var count=0;
const btn=document.getElementById("btn");

btn.addEventListener('click',()=>{
    location.reload();
});

function getValue(id){
    const value=document.getElementById(id);
    if(value.innerText==""){
        if(count%2==0){
            value.innerText='X';
            board[id[0]][id[1]]='X';
            check('X',id);
        }else{
            value.innerText='O';
            board[id[0]][id[1]]='O';
            check('O',id);
        }
        count++;
    }else{
        noValue();
    }
}

function check(value,id){
    const x=id[0];
    const y=id[1];
    if(board[x][0]==value && board[x][1]==value && board[x][2]==value){
        horizontal(x);
    }else if(board[0][y]==value && board[1][y]==value && board[2][y]==value){
        vertical(y);
    }else if(board[0][0]==value && board[1][1]==value && board[2][2]==value){
        diagonalLeft();
    }else if(board[0][2]==value && board[1][1]==value && board[2][0]==value){
        diagonalRight();
    }
    return false;
}

function horizontal(x){
    const val1=document.getElementById(x+0);
    const val2=document.getElementById(x+1);
    const val3=document.getElementById(x+2);
    val1.style.background="rgb(14, 238, 6)";
    val1.style.color="#fff";
    val2.style.background="rgb(14, 238, 6)";
    val2.style.color="#fff";
    val3.style.background="rgb(14, 238, 6)";
    val3.style.color="#fff";
    correct();

}
function vertical(y){
    const val1=document.getElementById(0+y);
    const val2=document.getElementById(1+y);
    const val3=document.getElementById(2+y);
    val1.style.background="rgb(14, 238, 6)";
    val1.style.color="#fff";
    val2.style.background="rgb(14, 238, 6)";
    val2.style.color="#fff";
    val3.style.background="rgb(14, 238, 6)";
    val3.style.color="#fff";
    correct();
}
function diagonalLeft(){
    const val1=document.getElementById('00');
    const val2=document.getElementById('11');
    const val3=document.getElementById('22');
    val1.style.background="rgb(14, 238, 6)";
    val1.style.color="#fff";
    val2.style.background="rgb(14, 238, 6)";
    val2.style.color="#fff";
    val3.style.background="rgb(14, 238, 6)";
    val3.style.color="#fff";
    correct();
}
function diagonalRight(){
    const val1=document.getElementById('02');
    const val2=document.getElementById('11');
    const val3=document.getElementById('20');
    val1.style.background="rgb(14, 238, 6)";
    val1.style.color="#fff";
    val2.style.background="rgb(14, 238, 6)";
    val2.style.color="#fff";
    val3.style.background="rgb(14, 238, 6)";
    val3.style.color="#fff";
    correct();
}
function noValue(){
    const value=document.querySelector('.board');
    value.classList.add("red-glow");
    setTimeout(() => value.classList.remove("red-glow"), 300);
}
function correct(){
    const value=document.querySelector('.board');
    value.classList.add("green-glow");
    //setTimeout(() => value.classList.remove("green-glow"), 300);
}
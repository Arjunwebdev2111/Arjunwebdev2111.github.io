var gameboard= new Array(3).fill(0).map(()=>(new Array(3).fill(0)));
var player1=1;
var player2=2;
var win =false;
var switchplayer = true;
var turncount=1;
var playable=true;
var boxarr={"box1":[0,0],"box2":[0,1],"box3":[0,2],"box4":[1,0],
            "box5":[1,1],"box6":[1,2],"box7":[2,0],"box8":[2,1],
            "box9":[2,2]}
var boxplayed=[];

// Game Logic used to set the value of the total game play.
function connectGame(boxnum){
    // button touch sound starts
    document.getElementById("btn-touch").play();
    // button touch sound ends

    selectedBox=boxarr[boxnum];
   
   
   if(boxplayed.length==0){
        boxplayed.push(boxnum); 
    }
    else{
        for(let i=boxplayed.length-1;i>=0;i--){
            if(boxnum==boxplayed[i] && boxplayed.length!=0 && win==false){
                playable=false;
                switchplayer=!switchplayer;
                alert("Already Selected.Please Choose alternate box");
                break;
            }
            else{
                playable=true; 
            }
        }
        if(playable==true){
            boxplayed.push(boxnum);
        }
    }
    console.log(playable);
    console.log(boxplayed);
    if(turncount!=16){
        if(playable==true && win==false){
            
            // switchplayer==true means Player 1 turn and switchplayer==false means Player 2 turn
            if (switchplayer==true){
                gameboard[selectedBox[0]][selectedBox[1]]=player1;
                document.getElementById(boxnum).style.backgroundColor="red";
                if((gameboard[0][0]==1 && gameboard[0][1]==1 && gameboard[0][2]==1 )||(gameboard[1][0]==1 && gameboard[1][1]==1 && gameboard[1][2]==1)||(gameboard[2][0]==1 && gameboard[2][1]==1 && gameboard[2][2]==1 )
                ||(gameboard[0][0]==1 && gameboard[1][0]==1 && gameboard[2][0]==1)||(gameboard[0][1]==1 && gameboard[1][1]==1 && gameboard[2][1]==1 )||(gameboard[0][2]==1 && gameboard[1][2]==1 && gameboard[2][2]==1 )
                ||(gameboard[0][0]==1 && gameboard[1][1]==1 && gameboard[2][2]==1 )||(gameboard[0][2]==1 && gameboard[1][1]==1 && gameboard[2][0]==1 )){
                    // alert("Player 1 Wins");
                    document.getElementById("player").textContent="Player 1 Wins";
                    win=true;

                }

                else{
                    document.getElementById("player").textContent="Player 2  Turn";
                }
            }
            else{
                gameboard[selectedBox[0]][selectedBox[1]]=player2;
                document.getElementById(boxnum).style.backgroundColor="yellow";
                if((gameboard[0][0]==2 && gameboard[0][1]==2 && gameboard[0][2]==2 )||(gameboard[1][0]==2 && gameboard[1][1]==2 && gameboard[1][2]==2)||(gameboard[2][0]==2 && gameboard[2][1]==2 && gameboard[2][2]==2 )
                ||(gameboard[0][0]==2 && gameboard[1][0]==2 && gameboard[2][0]==2)||(gameboard[0][1]==2 && gameboard[1][1]==2 && gameboard[2][1]==2 )||(gameboard[0][2]==2 && gameboard[1][2]==2 && gameboard[2][2]==2 )
                ||(gameboard[0][0]==2 && gameboard[1][1]==2 && gameboard[2][2]==2 )||(gameboard[0][2]==2 && gameboard[1][1]==2 && gameboard[2][0]==2 )){
                    // alert("Player 2 Wins");
                    document.getElementById("player").textContent="Player 2 Wins";
                    win=true;

                }
                else{
                    document.getElementById("player").textContent="Player 1 Turn";
                }
                
            }
        }

        turncount+=1;
        // Game Draw Logic if turncount reach 16 and winner is still false.
        if(turncount==9 && win==false){
            document.getElementById("player").textContent="Draw";
            win =true;
        }
    }

    if(win==true){
        // check incase of Draw for audio purpose.
        if(document.getElementById('player').textContent!="Draw"){
            document.getElementById("win").play();
        }
        else{
            document.getElementById("draw").play();
        }
        document.getElementById('reset').disabled=false;
        document.getElementById('reset').style.backgroundColor="rgb(33, 122, 223)";
    }
    else{
        document.getElementById('reset').disabled=true;

    }
    // swiching player turns
    switchplayer=!switchplayer;
    
    // console.log(gameboard[selectedBox[0]][selectedBox[1]]);
    // console.log(turncount);
}

// Game Reset Logic used to reset the value of the total game play.
function reset(){
    gameboard= new Array(4).fill(0).map(()=>(new Array(4).fill(0)));
    document.getElementById("game-theme").volume = 0.01; 
     switchplayer = true;
     turncount=0;
     playable=true;
     boxplayed=[];
    document.getElementById('player').textContent="Player 1 Turn";
    for(let i=1;i<=9;i++){
        let box='box'+i;
        document.getElementById(box).style.backgroundColor="black";
    }
    win =false;
    if(win==false){
        document.getElementById('reset').disabled=true;
        document.getElementById('reset').style.backgroundColor="rgb(138, 182, 232)";
    }
}

// import { slyComputer, winՕptions, optionsChosseBoard, cornerIndexs } from "./consts.js";

// const container = document.querySelector(".container");
// const againButton = document.querySelector(".again");
// const slyComputerKeys = Object.keys(slyComputer);
// const slyComputerValues = Object.values(slyComputer);

// let initialPlayer = "o";
// let player = "x";
// let win = false;
// let board = [
//     ["", "", ""],
//     ["", "", ""],
//     ["", "", ""]
// ];

// const changePlayer = () => player = player === "x" ? "o" : "x";

// // IF WIN OR FULL
// function createBuutons (type) {
//     againButton.style.display = "block";

//     againButton.addEventListener("click", () => {
//         board.forEach((column, i) => {
//             column.forEach((el, j) => {
//                 board[i][j] = "";
//                 if(i === 2 && j === 2) {
//                     againButton.style.display = "none";
//                     if(type === "win"){
//                         win = false
//                     }
//                     render();
//                 };
//             });
//         });
//     });
// }

// // CHECK THE SITUATION
// function chooseWin () {
//     for(let i = 0; i < winՕptions.length; i++){
//         let choose = 0;
//         for(let j = 0; j < winՕptions[i].length; j++){
//             const box = winՕptions[i][j].split(" ");
//             if(	board[ +box[0] ][ +box[1] ] === player ){
//                 choose += 1;
//             }
//         }
//         if(choose === 3){
//             return true;
//         }
//     }
// }


// function chooseBoard () {
//     let choose = 0;
    
//     for(let i = 0; i < optionsChosseBoard.length; i++){
//         const column = +optionsChosseBoard[i].split(' ')[0];
//         const index = +optionsChosseBoard[i].split(' ')[1];
//         if(board[column][index] !== ''){
//             choose += 1;
//         }
//     }
//     if(choose === optionsChosseBoard.length){
//         return true;
//     }
// }

// // CHECK THE SITUATION 

// function chooseSlySistem(){
//     for(let i = 0; i < slyComputerKeys.length; i++){
//         const [oneBox, twoBox] = slyComputerKeys[i].split("-");
//         const [columnOneBox, indexOneBox] = oneBox.split(" ");
//         const [columnTwoBox, indexTwoBox] = twoBox.split(" ");
//         if(board[+columnOneBox][+indexOneBox] === initialPlayer && board[+columnTwoBox][+indexTwoBox] === initialPlayer){
//             const [column, index] = slyComputerValues[i].split(" ");
//             if(board[+column][+index] === ""){
//                 board[+column][+index] = player;
//                 if(chooseWin()){
//                     setTimeout(() => alert("o"));
//                     createBuutons("win");
//                     win = true;
//                 }
//                 changePlayer();
//                 return true;
//             }
//         }        
//     };
// }


// function chooseRandomBox(){
//     const column = Math.floor(Math.random() + 2);
//     const index = Math.floor(Math.random() + 2);

//     if(board[column][index] === ""){
//         board[column][index] = player;
//         if(chooseWin()){
//             setTimeout(() => alert("o"));
//             createBuutons("win");
//             win = true;
//         }
//         changePlayer();
//         return;
//     }else{
//         chooseRandomBox();
//     }
// }


// function computer () {
//     let chooseBoxCorner = false;

//     if( !chooseSlySistem() ){  
//         initialPlayer = "x";
//         if(chooseSlySistem()){
//             return
//         }
//     }else{
//         return;
//     }

//     if(board[1][1] === ""){
//         board[1][1] = player;
//         if(chooseWin()){
//             setTimeout(() => alert(""));
//             createBuutons("win");
//         }
//         changePlayer();
//         return;
//     }
//     for(let i = 0; i < cornerIndexs.length; i++){
//         if(chooseBoxCorner){
//             chooseBoxCorner = false;
//             return;
//         } 
//         const [ newColumn, newIndex ] = cornerIndexs[i].split(" ");
//         if(board[+newColumn][+newIndex] === ""){
//             function chooseRandomCorner(){
//                 const randomNumber = Math.floor(Math.random() * cornerIndexs.length);
//                 const [ newColumn, newIndex ] = cornerIndexs[randomNumber].split(" ");
//                 if(board[+newColumn][+newIndex] !== ""){
//                     chooseRandomCorner();
//                 }else{
//                     board[+newColumn][+newIndex] = player;
//                     if(chooseWin()){
//                         setTimeout(() => alert("o"));
//                         createBuutons("win");
//                         win = true;
//                     }
//                     changePlayer();
//                     chooseBoxCorner = true;
//                 }
//             }
//             if(!chooseBoxCorner){
//                 chooseRandomCorner();
//             };
//         }
//     }

//     chooseRandomBox();
// }

// function onclick (column, index) {
//     if(!win){
//         if(!board[column][index]){
//             board[column][index] = player;
//             if(chooseBoard()){
//                 render();
//                 setTimeout(() => alert("full"));
//                 createBuutons("boradFull");
//                 return;
//             }
//             if(chooseWin()){
//                 render();
//                 setTimeout(() => alert(player));
//                 createBuutons("win");
//                 win = true;
//                 return;
//             }
//             changePlayer();
//             computer();
//             render();
//         }
//     }
// }


// function render() {
//     container.innerHTML = "";
//     for(let i = 0; i < board.length; i++){
//         const divPerent = document.createElement("div");
//         divPerent.style.display = "flex";
        
//         for(let j = 0; j < board[i].length; j++){
//             const divChild = document.createElement("div");
//             divChild.classList = "boxes"
//             const divChildText = document.createTextNode(board[i][j]);
//             divChild.appendChild(divChildText);
//             divPerent.appendChild(divChild);

//             divChild.addEventListener("click", () => onclick(i, j));
//         };
//         container.appendChild(divPerent);
//     };
//     player = "x";
// }
// render();


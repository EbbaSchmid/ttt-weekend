/*---------------- Constants --------------------------*/

let winningCombos = [
    [0, 1, 2],[3, 4, 5],[6, 7, 8],
    [0, 3, 6],[1, 4, 7],[2, 5, 8],
    [0, 4, 8],[2, 4, 6]
];

console.log(winningCombos)
/*----------------- Variables (state) ---------------*/

// / Step 1 - Define the required variables used to track the state of the game

let board, turn, winner
// holds state (data) stored in JS about each section



/*--------- Cached Element References ------------------------*/

// CER gives acces to html elements
// Step 2 - Store cached element references


const squareEls = document.querySelectorAll(".board > div")
console.log(squareEls)
//regarding the divs listed in html for each square the board, parent=board child=div

const messageEl = document.querySelector("#message")
console.log(messageEl)
// displays messages for who's turn or who won

const boardEl = document.querySelector(".board")
console.log(boardEl)
// node list of squares from under board from html

const resetBtnEl = document.querySelector("#reset-button")

/*-------------- Event Listeners -----------------------------*/

boardEl.addEventListener("click", handleClick)
resetBtnEl.addEventListener('click', init)

/*----------- Functions --------------------------------*/


// Step 3 - Upon loading, the game state should be initialized, and a function should be called to render this game state
init()
// always put init for interaction on game????????????

function init(){

    board = [null, null, null, null, null, null, null, null, null]
// null array = different board squares

// 3d) Set the `turn` to `1` - which will represent player X.
    turn = 1

 // 3e) Set the `winner` to `null`.
    winner = null
// no winner is declared yet

 // 3f) Call a function called `render` at the end of the `init` function
    render()
    // calling to update the page to beginning of game after winner is declared 
}

// Step 6A-6H within the handleClick function 
// Step 6d: this step we're only creating return statements for two events: One is if the winner value is 1(x) or -1(o), we will return nothing. The other event is if there is a value in the sqidx (other player can't access the square and override the value) ex. [1, null, null, null, null, null, null, null, null]
// we're setting this up so that in these two events nothing will happen
// handleClick
function handleClick(evt) {
    console.log(evt.target)
    // Convert the ID sq string into a usable number
    let sqIdx = parseInt(evt.target.id[2])
    console.log(sqIdx)
    if (isNaN(sqIdx)) {
    // if a user clicks on something BESIDES a board square (but within the board section/space) we don't want that to affect the game. So we return, which exits this function 
        return 
    }
    if (winner) {
        return
    }
    if (board[sqIdx]) {
        return 
    }
    // When a user clicks on one of the divs(squares), we can figure out which square it was by:
      // finding the ID on evt.target
      // that ID from the div should correspond with the appropriate element in the board array 
    
    board[sqIdx] = turn 
    // when the line of code below runs, the turn will update by multiplying by -1. In the initialization function, turn is equal to 1 which represents X (X goes first). When a user clicks on the next square, this handleClick function will run, and update the value of turn (by multiplying by negative one) which would update turn to -1 (0). The line below is how the player switches from X to O. 
    turn = turn * -1 
    winner = getWinner()
    render()
}

// step 7a/7b1
function getWinner(){
    let bestCombo = []
    winningCombos.forEach(function(combo){

        let comboValue = board[combo[0]]+board[combo[1]]+board[combo[2]]
        bestCombo.push(Math.abs(comboValue))
    })
    let winnersCombo = bestCombo.some(function(value){
        return value === 3
    })
    if (winnersCombo === true) {
        return turn * -1
    } else if (!board.some(function(value){return value === null})){
        return "T"
    }
    return null
}

// 4a) Create a function called `render`.
function render(){
    // running every time a move to is made
// 4b) Loop over `board` and for each element:
    board.forEach(function (sq, idx) {
    // accessing board tells us where to put X or O or blank - value is stored inside board through render it grabs data to put in the cooresponding html element
    // board is monitoring the squares 
    // board is big picture and squares are inside to work on individual items or group them
    if (sq === 1){
        squareEls[idx].textContent = "X"
    //if 1 set element at ind squareEls to X
    // accessing state variable and manipulate the html data based on state variables through if/else statements 
    // accessing board tells us where to put X or O or blank - vaule is stored in board in html
    } else if (sq === -1){
        squareEls[idx].textContent = "O"
    //if -1 set element at ind squareEls to 0
    } else {
        squareEls[idx].textContent = " "
    }
})
// after it renders (after any interaction/click on board) it updates to see if there is a winner has been set. if not, it continues through if/else statements and display message of whos turn or whos won

console.log(winner)

if (winner === null) {
    if (turn === 1) {
        messageEl.textContent = "It's player one's turn"
    } else {
        messageEl.textContent = "It's player two's turn"
    } 
    } else if (winner === "T") {
        messageEl.textContent = "It's a tie!"
    } else if (winner === 1) {
        messageEl.textContent = "Player 1 has won!"
    } else if (winner === -1) {
        messageEl.textContent = "Player 2 has won!"
    }

}
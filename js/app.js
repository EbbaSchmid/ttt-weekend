/*---------------- Constants --------------------------*/

let winningCombinations = [
    [0, 1, 2],[3, 4, 5],[6, 7, 8],
    [0, 3, 6],[1, 4, 7],[2, 5, 8],
    [0, 4, 8],[2, 4, 6]
];


/*----------------- Variables (state) ---------------*/

// / Step 1 - Define the required variables used to track the state of the game

// let board () {} 

// let turn () {}

// let winner () {}



/*--------- Cached Element References ------------------------*/

// Step 2 - Store cached element references

const squareEls = document.querySelectorAll(".board > div")
console.log(squareEls)

const messageEl = document.querySelector("#message")
console.log(messageEl)

const boardEl = document.querySelector(".board")
console.log(boardEl)

/*-------------- Event Listeners -----------------------------*/

boardEl.addEventListener("click", handleClick)


/*----------- Functions --------------------------------*/


// Step 3 - Upon loading, the game state should be initialized, and a function should be called to render this game state
init()

function init(){

    board = [null, null, null, null, null, null, null, null, null]

// 3d) Set the `turn` to `1` - which will represent player X.
    turn = 1

 // 3e) Set the `winner` to `null`.
    winner = null

 // 3f) Call a function called `render` at the end of the `init` function
    render()
}

function handleClick(evt) {
    const sqIdx = parseInt(evt.target.id[2])
    if (winner === 1 || winner === -1) {
    return 
    }
    if (board[sqIdx]) {
    return 
    }
    // step 6e/f
    board[sqIdx] = turn 
    turn = turn * -1

    // step 6g/h
    // winner = getWinner()
    render()
}

// step 7a/7b1
function getWinner(){
    let bestCombo = []
    winningCombos.forEach(function(combo){
        // combo will look like [0,1,2]
        // console.log (combo)
        let comboValue = board[combo[0]]+board[combo[1]+board[2]]

        // combo.forEach(function(position){
        //     comboValue += board[position]
        //     // console.log(position)
        // })
        bestCombo.push(Math.abs(comboValue))
    })
    let winnersCombo = bestCombo.some(function(value){
        return value === 3
    })
}

// 4a) Create a function called `render`.
function render(){
// 4b) Loop over `board` and for each element:
    board.forEach(function (square, idx) {
    if (square === 1){
        squareEls[idx].textContent = "X"
    //if 1 set element at ind squareEls to X
    } else if (square === -1){
        squareEls[idx].textContent = "O"
    //if -1 set element at ind squareEls to 0
    } else {
        squareEls[idx].textContent = " "
    }
})



if (winner === null) {
    if (turn === 1) {
        messageEl.textContent = "It's player one's turn"
    } else {
        messageEl.textContent = "It's player two's turn"
    }} else if (winner === "T") {
        messageEl.textContent = "It's a tie!"
    } else if (winner === 1) {
        messageEl.textContent = "Player 1 has won!"
    } else {
        messageEl.textContent = "Player 2 has won!"
    }


}
/*---------------- Constants --------------------------*/




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

/*-------------- Event Listeners -----------------------------*/



/*----------- Functions --------------------------------*/


// Step 3 - Upon loading, the game state should be initialized, and a function should be called to render this game state
init()

function init(){

    board = new Array (9).fill(null)

// 3d) Set the `turn` to `1` - which will represent player X.
    turn = 1

 // 3e) Set the `winner` to `null`.
    winner = null

 // 3f) Call a function called `render` at the end of the `init` function
    render()
}

// 4a) Create a function called `render`.
function render(){
// 4b) Loop over `board` and for each element:
    board.forEach(function (square, idx){
    // check if square is 1, -1 or null
    //if 1 set element at ind squareEls to X
    //if -1 set element at ind squareEls to 0
    //if null set element at ind squareEls to empty
})


}
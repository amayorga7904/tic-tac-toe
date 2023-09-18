









// 1) Define required constants:
//   1.1) Define a colors object with keys of 'null' (when the square is empty), 
// and players 1 & -1. The value assigned to each key represents the color to display
// for an empty square (null), player 1 and player -1.
const colors = {
'null': '',
'1': 'blue',
'-1': 'pink'
}

//   1.2) Define the 8 possible winning combinations, each containing three indexes 
//of the board that make a winner if they hold the same player value.
const winningBoxes = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

        // const grid = document.getElementById('grid')

        // const determineWinner = () => {
        //     if ((boxSelected === box1 && box2 && box3) || (boxSelected === box1 && box4 && box7) || (boxSelected === box2 && box5 && box8)
        //     || (boxSelected === box3 && box6 && box9) || (boxSelected === box4 && box5 && box6) || (boxSelected === box7 && box8 && box9)
        // || (boxSelected === box1 && box5 && box9) || (boxSelected === box7 && box5 && box3)) {
        //     return 'You Win!'
        // } else {
        //     return 'You Lost!'
        // }
        // }
            
            
// 2) Define required variables used to track the state of the game:
            
            
//   2.1) Use a board array to represent the squares.
let board = ['', '', '', '', '', '', '', '', '']
//   2.2) Use a turn variable to remember whose turn it is.
let playerTurn
//   2.3) Use a winner variable to represent three different possibilities - player 
//that won, a tie, or game in play.
let winner
// 3) Store elements on the page that will be accessed in code more than once in 
//variables to make code more concise, readable and performant:
const START_BUTTON_ID = 'start-button'
const startButton = document.getElementById(START_BUTTON_ID)
const message = document.getElementById('message')
const GRID_ID = 'grid'
//   3.1) Store the 9 elements that represent the squares on the page.
// const box1 = document.getElementById('box1')
// const box2 = document.getElementById('box2')
// const box3 = document.getElementById('box3')
// const box4 = document.getElementById('box4')
// const box5 = document.getElementById('box5')
// const box6 = document.getElementById('box6')
// const box7 = document.getElementById('box7')
// const box8 = document.getElementById('box8')
// const box9 = document.getElementById('box9')
const grid = document.getElementById(GRID_ID)
const boxes = document.querySelectorAll('.box')
// 4) Upon loading the app should:
//   4.1) Initialize the state variables:
//startButton.addEventListener('click', initializeGame)
// const readyUp = () => {
//     message.innerText = 'Ready? Player 1 Goes First'   
// }
// startButton.addEventListener('click', readyUp)
const makeBlack = () => {
    boxes.backgroundColor = 'black'
}
grid.addEventListener('mouseover', makeBlack)
//startButton.addEventListener('click', initializeGame)
const initializeGame = () => {

                // const pickTurn = Math.random()
                // if (pickTurn < 0.5) {
                    //     return 'Player 1 goes first'
                    // } else {
                        //     return 'Player 2 goes first'
                        // }
                        // startButton.disabled = true
//     4.1.1) Initialize the board array to 9 nulls to represent empty squares. 

// The 9 elements will "map" to each square, where index 0 maps to the top-left 
// square and index 8 maps to the bottom-right square.
board.fill(null)
//     4.1.2) Initialize whose turn it is to 1 (player 'X'). Player 'O' will be 
//represented by -1.
playerTurn = 1
                        
//     4.1.3) Initialize winner to null to represent that there is no winner or 
// tie yet. Winner will hold the player value (1 or -1) if there's a winner. Winner 
// will hold a 'T' if there's a tie. 
                        
winner = null


//   4.2) Render those state variables to the page:

}                        

                        //render()
                        
                        
                        //startButton.addEventListener('click', initializeGame)

//     4.2.1) Render the board:
const renderBoard = () => {
//       4.2.1.1) Loop over each of the 9 elements that represent the squares on 
//the page, and for each iteration:
//let value = 0
//for (let i =0; i <= box.length; i++) {
    //board.forEach(function(box, index) {
boxes.forEach((box, index) => {
        
        
//         4.2.1.1.2) Use the index of the iteration to access the mapped value 
//from the board array.
        //const box = box[i]
        //console.log(box.innerText)
        //const value = document.getElementById(`box-${index}`)
//         4.3.1.1.3) Set the background color of the current element by using 
//the value as a key on the colors lookup object (constant).
box.style.backgroundColor = colors[board[index]]
})
//value.style.backgroundColor = colors[box]
//})

//     4.2.2) Render a message:
//const renderMessage = () => {
    //       4.2.2.1) If winner has a value other than null (game still in progress), 
    //render whose turn it is - use the color name for the player, converting it to upper case.
if (winner !== null) {
    //message.innerText = 'Ready?'   
        //message.innerText = `${colors[playerTurn].toUpperCase()}`;
        //       4.2.2.2) If winner is equal to 'T' (tie), render a tie message.
if (winner === 'T') {
    message.innerText = 'Tie!'
} else {
    let player
    if (winner === 1) {
        player = 'Player 1'
    } else {
    player = 'Player 2'
    }
    message.innerText = `${player} wins!`
    }
    //} else if( winner === 'T') {
        //message.innerText = 'Tie!'
        //       4.2.2.3) Otherwise, render a congratulatory message to which player has won 
        //- use the color name for the player, converting it to uppercase.
    //} else {
       // message.innerText = `${colors[winner].toUpperCase()}`
} else {
let player   
    if (playerTurn === 1) {
    player = 'Player 1' 
    message.innerText = `It's ${player}'s turn`
    } else {
    player = 'Player 2'
    message.innerText = `It's ${player}'s turn`
    }
    }
}

initializeGame()
renderBoard()
//startButton.addEventListener('click', initializeGame)
//message.innerText = 'Begin!'
//   4.3) Wait for the user to click a square

//startButton.addEventListener('click', initializeGame)
//startButton.addEventListener('click', initializeGame)

// 5) Handle a player clicking a square:
//e.target.style.backgroundColor = 'blue'
//   5.1) Obtain the index of the square that was clicked by either:
//const handlePlayer = (e) => {
    //const boxes = document.getElementsByClassName('box')
//     5.1.1) "Extracting" the index from an id assigned to the element in the HTML, or
    //boxes.forEach((box) => {
        //box.addEventListener('click', (e) => {
            //const boxId = e.target.id
            //const index = parseInt(boxId.split('-')[1])
//     5.1.2) Looping through the cached square elements using a for loop and breaking
//out when the current square element equals the event object's target.
            
//   5.2) If the board has a value at the index, immediately return because that 
//square is already taken.
boxes.forEach((box, index) => {
box.addEventListener('click', () => {
if (board[index] !== null || winner !== null) {
                        //if (board[index] !== '') {
                            //return message.innerText = 'Already Taken!'
                            //}
//   5.3) If winner is not null, immediately return because the game is over.
return
}
//   5.4) Update the board array at the index with the value of turn.
board[index] = playerTurn 
//board[index] = playerTurn 
//   5.5) Flip turns by multiplying turn by -1 (flips a 1 to -1, and vice-versa).
playerTurn *= -1
//   5.6) Set the winner variable if there's a winner:
//winner = getWinner()
                        
                        // })
                        // })
                        
                        // }
//     5.6.1) Loop through the each of the winning combination arrays defined.
                        //const getWinner = () => {
//     5.6.2) Total up the three board positions using the three indexes in the current combo.
for (const winningArr of winningBoxes) {
    const total = winningArr.reduce((sum, i) => sum + board[i], 0)
if (Math.abs(total) === 3) {
    winner = board[winningArr[0]]
break
    }
}
                            // for (let boxes of winningBoxes) {
                                //     let total = 0        
                                //if (Math.abs(board[boxes[0]] + board[boxes[1]] + board[boxes[2]]) === 3) 
//     5.6.3) Convert the total to an absolute value (convert any negative total to positive).
                                //return board[boxes[0]]
                                //}
                                // for (let index of boxes) {
                                    //     total += board[index]
                                    // }        
                                    // total = Math.abs(total)
//     5.6.4) If the total equals 3, we have a winner! Set winner to the board's value 
//at the index specified by the first index in the combo array. Exit the loop.
                                    // if (total === 3) {
                                        //     winner = board[boxes[0]]
                                        //     break
                                        //     return message.innerText = 'You Win!'
                                        // }
                                        // }
//   5.7) If there's no winner, check if there's a tie:
//if (board.includes(null)) 
                                        //return null
                                        //return 'T'
                                        //}
if (!board.includes(null) && winner === null) {
    winner = 'T'
}
                                        
//     5.7.1) Set winner to 'T' if there are no more nulls in the board array.
// if (!board.includes(null)) {
                                            //     winner = 'T'
                                            //     return message.innerText = 'Tie!'
                                            // }
                                            
//   5.8) All state has been updated, so render the state to the page (step 4.2).
                                            
                                            //     renderBoard()
                                            //     renderMessage()
renderBoard()
})
})
   

// startButton.innerText = 'Replay'
// startButton.style.display = 'block'
// startButton.disabled = false


// 6) Handle a player clicking the replay button:
//   6.1) Do steps 4.1 (initialize the state variables) and 4.2 (render).
// const endGame = () => {
 //}

 startButton.addEventListener('click', () => {
    initializeGame()
    renderBoard()
    startButton.innerText = 'Replay'
    message.innerText = 'Ready?'
    startButton.disabled = false
 })
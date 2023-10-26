let board = ["", "", "", "", "", "", "", "", ""]
let playerTime = 0
const symbols = ['o', 'x']
let gameOver = false

const statesOfWin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function handleMove(position) {

    if (!gameOver) {
        if (board[position] == '') {
            board[position] = symbols[playerTime]

            playerTime = (playerTime == 0) ? 1 : 0

            gameOver = isOver()
        }
    }

    return gameOver

}

function isOver() {
    for (let i = 0; i < statesOfWin.length; i++) {
        let sequence = statesOfWin[i]

        let position1 = sequence[0]
        let position2 = sequence[1]
        let position3 = sequence[2]

        if (board[position1]
            && board[position1] == board[position2]
            && board[position1] == board[position3]) {
            return true
        }
    }
    return false
}
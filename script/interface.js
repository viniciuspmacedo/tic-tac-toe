document.addEventListener("DOMContentLoaded", () => {
    let squares = document.querySelectorAll(".square")

    for (const square of squares) {
        square.addEventListener('click', handleClick)
    }

})

function handleClick(event) {
    let square = event.target
    let postion = square.id
    if (handleMove(postion)) {
        setTimeout(() => {
            alert(`Fim de jogo! \nO vencedor foi o jogador ${playerTime}`)
        }, 10)
    }
    updateSquare(square), 10


}

function updateSquare(square) {
    let postion = square.id
    let symbol = board[postion]
    if (symbol != '') {
        square.innerHTML = `<div class="${symbol}"></div>`
    }

}
const table = document.querySelector('table')
const p = document.querySelector('p')
const button = document.querySelector('button')

let rowCount = 0;

button.addEventListener('click', addJokeriRivi)

function addJokeriRivi () {
    const newRow = document.createElement('tr')

    for (let i = 0; i < 7; i++) {
        const newCell = document.createElement('td')

        const randomNum = Math.floor(Math.random() * 10)
        newCell.textContent = randomNum

        newRow.appendChild(newCell)
    }

    table.appendChild(newRow)

    rowCount++
    p.textContent = `Valmiita rivejä: ${rowCount}`
}
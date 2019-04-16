// Задача. Знайти середню оцінку учня. Кількість та оцінки вводяться користувачем 
// (використати таблицю з компонентами input).
function makeTable() {
    let tbl = document.createElement('table')
    let tr = document.createElement('tr')
    let rowCount = parseInt(document.getElementById('rateCount').value)
    for (let i = 0; i < rowCount; i++) {
        let td = document.createElement('td')
        let inp = document.createElement('input')
        inp.type = 'number'
        inp.id = "input"
        td.appendChild(inp)
        tr.appendChild(td)
    }
    tbl.appendChild(tr)
    let div = document.getElementById('dvi')
    div.innerHTML = ""
    div.appendChild(tbl)
}
function getAVG() {
    let rates = document.querySelectorAll('#input')
    let acc = 0
    for (let i = 0; i < rates.length; i++) {
        acc += rates[i].value
    }
    let over = acc / rates.length
    document.getElementById('result').innerText = over
}

window.onload = function tabl() {
    document.getElementById("insert").onclick = makeTable
    document.getElementById("averageRate").onclick = getAVG
}

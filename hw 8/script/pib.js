//Задача. Сформувати список працівників (ПІБ, посада, заробітна плата). 
//По одному додається інформація про працівників у вигляді таблиці (як у попередньому завданні).
// Потім знайти сумарну заробітну плату працівників, у яких заробітна плата більша за 3000.

function makeZP() {
    let nameField = document.createElement('input')
    nameField.type = 'text'
    nameField.placeholder = "insert name"
    let postField = document.createElement('input')
    postField.type = 'text'
    postField.placeholder = "insert post"
    let money = document.createElement('input')
    money.type = "number"
    money.id = "zp"
    money.placeholder = "$"
    let dvi = document.getElementById('div')
    dvi.appendChild(nameField)
    dvi.appendChild(postField)
    dvi.appendChild(money)
    dvi.innerHTML += "<br>"
}
function getSum() {
    let zarPl = document.querySelectorAll('#zp')
    let acc = 0
    for (let i = 0; i < zarPl.length; i++) {
        if (zarPl[i].value >= 3000) acc += +zarPl[i].value
    }
    document.getElementById('res').innerText = acc
}

window.onload = function tabl() {
    document.getElementById("buttZP").onclick = makeZP
    document.getElementById("sumZP").onclick = getSum
}





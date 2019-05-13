//Задача 2. Користувач вводить 10 слів. Підрахувати кількість слів, у яких перша літера і остання літера однакові.

class SameLetters {
    constructor(rowCount) {
        this.rowCount = rowCount
    }
    getWords() {
        let words = document.querySelectorAll("input")
        let ArrW = Array.from(words)
        let acc = 0
        for (let i = 0; i < ArrW.length; i++) {
            if (ArrW[i].value[0] == ArrW[i].value[ArrW[i].value.length - 1]) acc += 1
        }
        this.span.innerText = acc
    }
    render(contId) {
        let div = document.getElementById(contId)
        for (let i = 0; i < this.rowCount; i++) {
            let tbl = document.createElement("table")
            let tr = document.createElement("tr")   А де td?
            let inp = document.createElement("input")
            tr.appendChild(inp)
            tbl.appendChild(tr)
            div.appendChild(tbl)
        }
        let btn = document.createElement("button")
        btn.innerText = "find"
        btn.onclick = this.getWords.bind(this)
        div.appendChild(btn)

        this.span = document.createElement("span")
        div.appendChild(this.span)
    }
}
window.onload = function () {
    let wo = new SameLetters(10)
    wo.render("case2")
}

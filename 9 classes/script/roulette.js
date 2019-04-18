// Створити об’єкт «Рулетка»
// Поля(властивості)	
//     Масив, у якому зберігаються бали ігрового барабану
// Методи (дії)	
//     Метод для випадкового визначення кількості балів
//     Виведення ігрового барабану на екран (у формі таблиці)

class roulette {
    constructor(numArr) {
        this.numArr = numArr
    }
    getRandomNum() {
        let i = Math.floor(Math.random() * this.numArr.length)
        let div = document.getElementById('score')
        div.innerText = `${this.numArr[i]}`
    }
    getRouletteTable() {
        let tbl = document.createElement('table')
        for (let i = 0; i < this.numArr.length; i++) {
            let tr = document.createElement('tr')
            let td = document.createElement('td')
            td.innerText = `${this.numArr[i]}`
            tr.appendChild(td)
            tbl.appendChild(tr)
        }
        let div = document.getElementById('dvi')
        div.innerHTML = ""
        div.appendChild(tbl)

    }
}
let user = new roulette([0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26])

window.onload = function f() {
    document.getElementById("getScore").onclick = user.getRandomNum()
    document.getElementById("allRoulette").onclick = user.getRouletteTable()
}
//-------------------чомусь спрацьовує одразу, а не по кліку

let oldTypeRoulette = {
    numArr: [0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26],
    getRandomNum: function () {
        let i = Math.floor(Math.random() * this.numArr.length)
        return this.numArr[i]
    },
    getRouletteTable: function () {
        let tbl = document.createElement('table')

        for (let i = 0; i < this.numArr.length; i++) {
            let tr = document.createElement('tr')
            let td = document.createElement('td')
            td.innerText = `${this.numArr[i]}`
            tr.appendChild(td)
            tbl.appendChild(tr)
        }
        let div = document.getElementById('dvi')
        div.innerHTML = ""
        div.appendChild(tbl)
    }
}

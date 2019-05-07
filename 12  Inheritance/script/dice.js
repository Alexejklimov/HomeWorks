// <!-- Задача 1. 
// Створити клас Dice, який представляє гральний кубик (одне поле faceCount - кліькістьграней) 
// і дозволяє генерувати випадкове число від 1 до кількості граней. Потім на основі цього класу створити клас ,
//  який дозволяє вказати не тільки кількість граней,
//  а й кількість спроб - attemptCount (при цьому як випадкове число повертається середнє значення). -->

class Dice {
    constructor(faceCount = 6) {
        this.faceCount = faceCount
    }
    getRandom() {
        let randomIndex = 1 + Math.floor(Math.random() * (this.faceCount - 1))
        return randomIndex
    }
}
class Game extends Dice {
    constructor(faceCount, attemptCount = 2) {
        super(...arguments)
        this.attemptCount = attemptCount
    }
    letsPlay() {
        let acc = 0
        for (let i = 0; i < this.attemptCount; i++) {
            acc += this.getRandom()
        }
        let result = acc / this.attemptCount
        this.span.innerText = result
    }
    render(contId) {
        let box = document.getElementById(contId)
        let btn = document.createElement('button')
        btn.innerText = "play"
        btn.onclick = this.letsPlay.bind(this)
        this.span = document.createElement('span')

        box.appendChild(btn)
        box.appendChild(this.span)
    }
}
window.onload = function () {
    let dice = new Game()
    dice.render("dvi")
}
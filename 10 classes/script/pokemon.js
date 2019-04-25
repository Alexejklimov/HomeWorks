// Задача 3. Створити клас «Покемон» (позиція (одне число  -- індекс як у одновимірному масиві ), 
// кількість патронів, кількість здоров’я). За один крок кожен з покемонів стріляє по базі (якщо є патрони)
//  і переміщається випадковим чином у нову позицію. 
// База  у відповідь стріляє у якусь позицію і наносить шкоду кожному із покемонів, які знаходяться у заданій позиції.

//все плохо
class Pokemon {
    constructor(name, health, ammo) {
        this.name = name
        Object.defineProperty(this, 'health', {
            get: function () {
                return health
            },
            set: function (value) {
                if (health <= 0) throw new Error('Wasted')
                return health = value
            }
        })
        this.health = health
        Object.defineProperty(this, 'ammo', {
            get: function () {
                return ammo
            },
            set: function (value) {
                if (ammo <= 0) throw new Error('Ammo is gone(')
                return ammo = value
            }
        })
        this.ammo = ammo
        this.position = this.randomPosition(0, 30)


    }
    randomPosition(min, max) {
        return min + Math.floor(Math.random() * (max - min + 1))
    }
    shoot() {
        if (this.ammo > 0) castleHealth -= 1
        this.randomPosition(0, 30)
        this.ammo -= 1
    }
    hitByCastle() {
        this.health -= 1
    }

    render(div, castleHealth) {
        this.tbl = document.createElement('table')
        this.tr = document.createElement('tr')
        this.pokemonScore = document.createElement('span')
        this.pokemonScore.innerText = this.health
        this.tr.appendChild(this.pokemonScore)
        this.tbl.appendChild(this.tr)

        this.tr = document.createElement('tr')
        this.castleScore = document.createElement('span')
        this.castleScore.innerText = castleHealth
        this.tr.appendChild(this.castleScore)
        this.tbl.appendChild(this.tr)
        document.getElementById('div').appendChild(this.tbl)
        this.button = document.createElement("button")
        this.button.innerText = "go"
        this.button.onclick = this.shoot.bind(this)
        document.getElementById('div').appendChild(this.button)
    }
}
let pikachu = new Pokemon('pikachu', 12, 35)
let castleHealth = 30
window.onload = function () {
    pikachu.render('div', castleHealth)

}
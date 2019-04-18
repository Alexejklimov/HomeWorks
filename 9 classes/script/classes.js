// Створити об’єкт «Діапазон»
// Поля (властивості)	
//Нижня межа
// Верхня межа
// Методи (дії)	
//Перевірка того, чи належить діапазону
// Генерування випадкового числа з вказаного діапазону

class Range {
    constructor(max, min) {
        this.max = max
        this.min = min
    }
    isInRange(num) {
        return (num >= this.min && num <= this.max)
    }
    RandomCount() {
        return (this.min + Math.floor(Math.random() * (this.max - this.min)))
    }
}
//---------------------
let range = {
    max: 107,
    min: 17,
    isInRange: function (num) {
        return (num >= this.min && num <= this.max)
    },
    randomCount: function () {
        return (this.min + Math.floor(Math.random() * (this.max - this.min)))
    }
}
// Створити об’єкт «Клієнт»
// Поля(властивості)	
//ПІБ
// Номер рахунку
// Кількість коштів
// Методи (дії)	
//Зняття грошей з рахунку
// Додавання грошей на рахунок

class client {
    constructor(name, accountNumber, money) {
        this.name = name
        this.accountNumber = accountNumber
        this.money = money
    }
    getCash(num) {
        return this.money -= num
    }
    insertCash(num) {
        return this.money += num
    }
}
//----------------------
let oldTypeClient = {
    name: "НБУ",
    accountNumber: 2600127535895621,
    money: 1000,
    getCash: function (num) {
        return this.money -= num
    },
    insertCash: function (num) {
        return this.money += num
    }
}
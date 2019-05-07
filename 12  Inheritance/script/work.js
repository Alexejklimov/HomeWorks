// <!-- Задача 3. Створити клас TPair, який представляє пару чисел і містить методи для їх збільшення/зменшення на 1.
//  Реалізувати класи нащадки TTime (“години.хвилини”) та TMoney (“гривні.копійки”).
//   Згенерувати поступово випадковим чином   пар (час, гроші), де час – тривалість виконання роботи, 
// а гроші – вартість однієї хвилини роботи працівників. Обчислити витрати на виконання кожної із робіт. -->

class TPair {
    constructor(val1, val2) {
        this.val1 = val1
        this.val2 = val2
    }
    plus(value) {
        return value += 1
    }
    minus(value) {
        return value -= 1
    }
    toString() {
        return `${this.val1}:${this.val2}`
    }
}
class TTime extends TPair {
    constructor(hour, minute) {
        super(...arguments)
    }
}
class TMoney extends TPair {
    constructor(hrn, kop) {
        super(...arguments)
    }
}
window.onload = function () {
    let time1 = new TTime(5, 6)
    let time2 = new TTime(0, 30)
    let time3 = new TTime(1, 45)

    let money1 = new TMoney(1, 0)
    let money2 = new TMoney(1, 50)
    let money3 = new TMoney(2, 40)

    let TArr = [time1, time2, time3]
    let MArr = [money1, money2, money3]
    let timeArr = []
    let moneyArr = []

    for (let i = 0; i < TArr.length || i < MArr.length; i++) {
        let timepart = Math.floor(Math.random() * TArr.length)
        let moneypart = Math.floor(Math.random() * MArr.length)
        timeArr.push(TArr[timepart])
        moneyArr.push(MArr[moneypart])
    }
    let priceOfWork = []
    for (let i = 0; i < timeArr.length || i < moneyArr.length; i++) {
        let price = (((timeArr[i].val1 * 60) + timeArr[i].val2) *
            ((moneyArr[i].val1 * 100) + moneyArr[i].val2)) / 100
        priceOfWork.push(price)
    }
    for (let i = 0; i < priceOfWork.length; i++) {
        document.write(`price of work is ${priceOfWork[i]}`)
        document.write('<br>')
    }
}
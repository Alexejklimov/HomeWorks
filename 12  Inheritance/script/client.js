// <!-- Створити клас Client
// Властивості	---ID, ПІБ,  Кількість грошей на рахунку
// Методи---	Додавання грошей,  Зняття грошей,  ToString
// На основі цього класу створити клас GoldenClient
//         Властивості	---ID  ПІБ  Кількість грошей на рахунку,  Ліміт кредитних коштів,  Відсоток за використання кредитних коштів
//         Методи---	Додавання грошей,  Зняття грошей,  Визначення пені за використання кредитних коштів,  ToString 
// Створити клас Bank, у якому зберігається масив клієнтів. Виконати такі операції
// •	Вивести усіх простих клієнтів;
// •	Вивести усіх клієнтів GoldenClient;
// •	Знати сумарну кількість грошей на рахунку;
// -->
class Client {
    constructor(accountID, name, money) {
        this.accountID = accountID
        this.name = name
        this.money = money
    }
    getCash(num) {
        return this.money -= num
    }
    insertCash(num) {
        return this.money += num
    }
    toString() {
        return `${this.name}: ${this.accountID} money = ${this.money} <br>`
    }
}
class GoldenClient extends Client {
    constructor(accounID, name, money, CreditLimit, CreditPercent) {
        super(...arguments)
        this.CreditLimit = CreditLimit
        this.CreditPercent = CreditPercent
    }
    CreditPenalty(sum) {
        return sum * (this.CreditPercent / 100)
    }
    toString() {
        return super.toString() + `${this.CreditLimit} - ${this.CreditPercent}<br>`
    }
}
class Bank {
    constructor(clientArr) {
        this.clientArr = clientArr
    }
    plebs() {
        let plebsArr = this.clientArr.filter((x, i, arr) => (arr[i] instanceof GoldenClient) == false) //Тут треба використати метод instaceOf
        return plebsArr                                                                                // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/instanceof
    }
    goldenPlebs() {
        let goldenArr = this.clientArr.filter((x, i, arr) => arr[i] instanceof GoldenClient)
        return goldenArr
    }
    allMoney() {
        let acc = 0
        this.clientArr.forEach(element => {
            acc += element.money
        })
        return acc
    }
}
window.onload = function () {
    let client1 = new Client(001, "petrov", 700)
    let client2 = new Client(002, "simonov", 30000)
    let client3 = new Client(003, "smirnoff", 10700)
    let Gclient1 = new GoldenClient(004, "wefwe", 450000, 10000, 12)
    let Gclient2 = new GoldenClient(005, "ojmo", 540000, 5000, 7)
    let Gclient3 = new GoldenClient(006, "qerb", 415050, 1000, 27)
    let Arr = [client1, client2, client3, Gclient1, Gclient2, Gclient3]
    let bbank = new Bank(Arr)
    document.write(bbank.allMoney())
    document.write("<hr>")
    document.write(bbank.plebs())
    document.write("<hr>")
    document.write(bbank.goldenPlebs())
}

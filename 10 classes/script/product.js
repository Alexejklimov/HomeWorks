// Задача 2. Створити клас Product, що представляє товар на складі
// поля:
// 	Назва товару
// 	Кількість одиниць
// 	Ціна одиниці
// методи:
// 	зменшення кількості товару
// 	збільшення кількості товару
// 	визначення вартості вказаної кількості товару
// 	нарахування вказаної знижки (у відсотках)
// 	визначення загальної вартості товару
// На основі цього класу визначити сумарну вартість усіх товарів, та нарахувати знижку на усі товари, 
// ціна яких перевищує 1000 грн.

class Product {
    constructor(name, quantity, price) {
        this.name = name
        Object.defineProperty(this, 'quantity', {
            get: function () {
                return quantity
            },
            set: function (value) {
                if (quantity <= 0) throw new Error('quantity must be => 0')
                return quantity = value
            }
        })
        this.quantity = quantity
        Object.defineProperty(this, 'price', {
            get: function () {
                return price
            },
            set: function (value) {
                if (price <= 0) throw new Error('price must be => 0')
                return price = value
            }
        })
        this.price = price
    }
    quantityMinus(value) {
        this.quantity -= value
    }
    quantityPlus(value) {
        this.quantity += value
    }
    priceOf(value) {
        if (this.quantity < value) throw new Error('not enought product')
        this.price *= value
    }
    discount(value) {
        this.price *= (value / 100)
    }
    SumPrice() {
        return this.price * this.quantity
    }
    toString() {
        return `${this.name}: ${this.quantity} ${this.price}`
    }
}
let apple = new Product('apple', 13, 3000)
let cherry = new Product('cherry', 12, 200)
let ginger = new Product('ginger', 121, 25)
let prodArr = []
prodArr.push(apple, cherry, ginger)
//document.write(prodArr)
//document.write('<br>')
const SumAllTOv = Arr => {
    let acc = 0
    for (let i = 0; i < Arr.length; i++) {
        let vart = Arr[i].price * Arr[i].quantity
        acc += vart
    }
    return acc
}
//document.write(SumAllTOv(prodArr))
prodArr.forEach((x, i, arr) => {
    if (arr[i].price > 1000)
        arr[i].discount(80)
});
//document.write(prodArr)

let arr=[]
l
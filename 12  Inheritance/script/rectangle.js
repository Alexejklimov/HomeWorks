// <!-- Задача 2. Створити клас Rectangle, який представляє прямокутник. 
// Властивості	A B
// Методи	Знаходження площі   Знаходження периметру    ToString

// На основі цього класу створити клас Paralelepiped
// Властивості	A B H 
// Методи	Знаходження площі поверхні   Знаходження об’єму    ToString -->

class Rectangle {
    constructor(A, B) {
        Object.defineProperty(this, 'A', {
            get: function () {
                return A
            },
            set: function (value) {
                if (A <= 0) throw new Error('must be >0')
                return A = value
            }
        })
        this.A = A
        Object.defineProperty(this, 'B', {
            get: function () {
                return B
            },
            set: function (value) {
                if (B <= 0) throw new Error('must be >0')
                return B = value
            }
        })
        this.B = B
    }
    getArea(a, b) {
        return a * b
    }
    getPerimetr() {
        return this.A * 2 + this.B * 2
    }
    toString() {
        return `${this.A}x${this.B}`
    }
}
class Paralelepiped extends Rectangle {
    constructor(A, B, H) {
        super(...arguments)
        Object.defineProperty(this, 'H', {
            get: function () {
                return H
            },
            set: function (value) {
                if (H <= 0) throw new Error('must be >0')
                return H = value
            }
        })
        this.H = H
    }
    surfaceArea() {
        return this.getArea(this.A, this.B) * 2 + this.getArea(this.B, this.H) * 2 + this.getArea(this.H, this.A) * 2
    }
    getVolume() {
        return this.getArea(this.A, this.B) * this.H
    }
    toString() {
        return super.toString() + `x${this.H}`
    }
}
// window.onload = function () {
//     let kub = new Paralelepiped(5, 6, 7)
//     document.write(kub.toString())
//     document.write("<br>")
//     document.write(kub.surfaceArea())
//     document.write("<br>")
//     document.write(kub.getVolume())
// }
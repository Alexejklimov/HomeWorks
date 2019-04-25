//Створити клас, що представляє прямокутник і має методи для знаходження площі, периметру та масштабування.
class Rectangle {
    constructor(AB, BC) {
        Object.defineProperty(this, "ab", {
            get: function () {
                return AB
            },
            set: function (value) {
                if (AB <= 0) throw new Error('side of figure must be > 0')
                return AB = value
            }
        })
        this.ab = AB
        Object.defineProperty(this, "bc", {
            get: function () {
                return BC
            },
            set: function (value) {
                if (BC <= 0) throw new Error('side of figure must be > 0')
                return BC = value
            }
        })
        this.bc = BC
    }
    Area() {
        return this.ab * this.bc
    }
    Perimeter() {
        return this.ab * 2 + this.bc * 2
    }

    scaleSides(value) {
        this.ab *= value
        this.bc *= value
    }
    toString() {
        return `ab=${this.ab} bc=${this.bc}`
    }
}
let sq = new Rectangle(25, 17)
document.write(sq.Area())
document.write('<br>')
document.write(sq.Perimeter())
document.write('<br>')
document.write(sq.toString())
document.write('<br>')
sq.scaleSides(2)
document.write(sq.toString())
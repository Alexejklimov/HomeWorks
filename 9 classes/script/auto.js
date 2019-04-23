// Створити об’єкт «Авто». 		
//     Поля(властивості)	
// Марка
// Розмір бака
// Кількість наявних літрів
// Кількість місць
// Кількість пасажирів
//     Методи (дії)
// Заправка на вказану кількість літрів
// Виведення кількості пасажирів
// Додавання пасажирів
// Висадка пасажирів
class Auto {
    constructor(marka, bak, fuel, place, passenger) {
        this.marka = marka
        this.bak = bak
        this.fuel = fuel
        this.place = place
        this.passenger = passenger
    }
    getGas(gas) {
        if ((this.fuel + gas) <= this.bak) this.fuel += gas
        else throw new Error('too much Gas')
    }
    getPassenger(pas) {
        if ((this.passenger + pas) <= this.place) this.passenger += pas
        else throw new Error('too much Passengers')
    }
    PassengerOut(passOut) {
        if ((this.passenger - passOut) >= 0) this.passenger -= passOut
    }
    ValueOf() {
        return this.passenger
    }
    toString() {
        return `${this.marka} - ${this.passenger} gas balance: ${this.fuel} l.`
    }
}

let car = new Auto('vw', 60, 24, 4, 1)
try {
    car.getGas(3)
    document.write(car)
    document.write('<br>')
} catch (error) {
    alert('too much Gas')
    throw error
}
try {
    car.getPassenger(12)
    document.write(car)
    document.write('<br>')
} catch (error) {
    alert('Its not a Bus')
    throw error
}
car.PassengerOut(2)
document.write(car)
document.write('<br>')

// Задача 4. Усі елементи введеного масиву помножити на 17. 
let arrNumber = []
for (let i = 0; i < 11; i++) {
    arrNumber.push(Math.floor(Math.random() * 1000))
}
//document.write(arrNumber)

arrNumber.forEach((x, i, arr) => { arr[i] *= 17 })

//document.write('<hr>')
//document.write(arrNumber)

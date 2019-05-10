// Задача 3. Дано послідовність чисел, які згенеровано випадковим чином. 
//Сформувати новий масив, у якому елементи є більшими за перший елемент.

let arrNumber = []
for (let i = 0; i < 11; i++) {
    arrNumber.push(Math.floor(Math.random() * 1000))
}
const newArr = arrNumber.filter((x, i, arr) => x > arr[0])
// document.write(arrNumber)
// document.write('<hr>')
// document.write(newArr)
// Задача 5. Знайти суму елементів, які знаходяться після елемента зі значенням 78.
let arrNumber = [278, 702, 136, 78, 545, 629, 538, 585, 170, 150, 748, 176]
let index = arrNumber.indexOf(78)
if (index == -1) alert("There is no el = 78")
else {
    var newArr =
        arrNumber.slice(index)
    newArr.reduce((acc, x) => {        
        return acc += x
    }, 0)
}
document.write(newArr)

// Задача 1. Дано оцінки учня за 5 предметів у 12 бальній шкалі.  Вивести номери предметів, з яких у учня трійки?
let ratings = [3, 12, 11, 3, 8, 5, 6, 4, 2, 4, 8, 3, 3, 1, 8, 9, 0, 4, 8, 9, 4, 12]
let badRatingsNumbers = []
let badRatings = ratings.forEach((x, i, arr) => {
    if (arr[i] == 3) badRatingsNumbers.push(i)
})
//document.write(`номери поганих оцінок: ${badRatingsNumbers}`)


